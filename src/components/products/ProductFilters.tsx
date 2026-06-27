import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { siteConfig } from '@/data/site-config'
import { getBrands, getSubCategories } from '@/lib/products'
import type { SortOption } from '@/types/product'

const FILTER_KEYS = ['category', 'subCategory', 'brand'] as const

export function getActiveFilterCount(searchParams: URLSearchParams): number {
  return FILTER_KEYS.filter((key) => searchParams.get(key)).length
}

export function getFiltersFromParams(searchParams: URLSearchParams) {
  return {
    query: searchParams.get('q') ?? undefined,
    category: searchParams.get('category') ?? undefined,
    subCategory: searchParams.get('subCategory') ?? undefined,
    brand: searchParams.get('brand') ?? undefined,
    sort: (searchParams.get('sort') as SortOption) ?? 'newest',
  }
}

export function ProductSearch() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''

  function setQuery(value: string) {
    const params = new URLSearchParams(searchParams)
    if (value) params.set('q', value)
    else params.delete('q')
    setSearchParams(params)
  }

  return (
    <div className="relative mb-4 sm:mb-6">
      <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-light" />
      <input
        type="search"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-xl border border-charcoal/10 bg-white py-2.5 pl-10 pr-10 text-sm text-charcoal outline-none placeholder:text-charcoal-light/60 focus:border-gold focus:ring-2 focus:ring-gold/20"
        aria-label="Search products"
      />
      {query && (
        <button
          type="button"
          onClick={() => setQuery('')}
          className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-charcoal-light hover:bg-blush hover:text-charcoal"
          aria-label="Clear search"
        >
          <ClearIcon className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  )
}

interface ProductFilterTriggerProps {
  onClick: () => void
  activeCount: number
}

export function ProductFilterTrigger({ onClick, activeCount }: ProductFilterTriggerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-10 shrink-0 items-center gap-2 rounded-xl border border-charcoal/15 bg-white px-4 text-sm font-medium text-charcoal shadow-sm transition-colors hover:border-gold hover:text-gold-dark"
      aria-label="Open filters"
    >
      <SlidersIcon className="h-4 w-4" />
      Filters
      {activeCount > 0 && (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1.5 text-[11px] font-semibold text-white">
          {activeCount}
        </span>
      )}
    </button>
  )
}

interface ProductFilterSheetProps {
  open: boolean
  onClose: () => void
}

export function ProductFilterSheet({ open, onClose }: ProductFilterSheetProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const brands = getBrands()
  const subCategories = getSubCategories()
  const activeCount = getActiveFilterCount(searchParams)
  const currentSort = searchParams.get('sort') ?? 'newest'
  const hasFilters = activeCount > 0 || currentSort !== 'newest'

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams)
    if (value) params.set(key, value)
    else params.delete(key)
    setSearchParams(params)
  }

  function clearFilters() {
    const params = new URLSearchParams(searchParams)
    params.delete('category')
    params.delete('subCategory')
    params.delete('brand')
    params.delete('sort')
    setSearchParams(params)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-charcoal/45 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close filters"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="filter-dialog-title"
        className="relative flex w-full max-w-lg max-h-[min(90dvh,640px)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-charcoal/8"
      >
        <div className="shrink-0 border-b border-charcoal/8 px-5 py-4 sm:px-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 id="filter-dialog-title" className="font-heading text-xl font-semibold text-charcoal">
                Filter Products
              </h2>
              <p className="mt-1 text-sm text-muted">
                Pick options below to find what you need
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-charcoal-light hover:bg-blush hover:text-charcoal"
              aria-label="Close"
            >
              <ClearIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-6 sm:py-5">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            <FilterField
              label="Sort By"
              value={currentSort}
              onChange={(v) => updateParam('sort', v === 'newest' ? '' : v)}
              options={[
                { value: 'newest', label: 'Newest First' },
                { value: 'popular', label: 'Most Popular' },
                { value: 'name', label: 'Name (A to Z)' },
              ]}
            />

            <FilterField
              label="Category"
              value={searchParams.get('category') ?? ''}
              onChange={(v) => updateParam('category', v)}
              options={[
                { value: '', label: 'All Categories' },
                ...siteConfig.categories.map((c) => ({ value: c, label: c })),
              ]}
            />

            <FilterField
              label="Product Type"
              value={searchParams.get('subCategory') ?? ''}
              onChange={(v) => updateParam('subCategory', v)}
              options={[
                { value: '', label: 'All Types' },
                ...subCategories.map((s) => ({ value: s, label: s })),
              ]}
            />

            <FilterField
              label="Brand"
              value={searchParams.get('brand') ?? ''}
              onChange={(v) => updateParam('brand', v)}
              options={[
                { value: '', label: 'All Brands' },
                ...brands.map((b) => ({ value: b, label: b })),
              ]}
            />
          </div>
        </div>

        <div className="shrink-0 border-t border-charcoal/8 bg-cream/40 px-5 py-4 sm:px-6">
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            {hasFilters ? (
              <button
                type="button"
                onClick={clearFilters}
                className="text-center text-sm font-medium text-gold-dark hover:underline sm:text-left"
              >
                Clear All Filters
              </button>
            ) : (
              <span className="hidden sm:block" />
            )}
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-xl bg-gold py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-dark active:scale-[0.99] sm:w-auto sm:min-w-[200px] sm:px-6"
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface FilterFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
}

function FilterField({ label, value, onChange, options }: FilterFieldProps) {
  const id = label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-charcoal">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-charcoal/12 bg-white py-3 pl-4 pr-10 text-sm text-charcoal outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
        >
          {options.map((opt) => (
            <option key={opt.value || 'all'} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronIcon className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-light" />
      </div>
    </div>
  )
}

function SlidersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      />
    </svg>
  )
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
    </svg>
  )
}

function ClearIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
