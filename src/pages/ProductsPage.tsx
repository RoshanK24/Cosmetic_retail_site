import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PageSEO } from '@/components/seo/PageSEO'
import { ProductCard } from '@/components/products/ProductCard'
import {
  ProductFilterSheet,
  ProductFilterTrigger,
  ProductSearch,
  getActiveFilterCount,
  getFiltersFromParams,
} from '@/components/products/ProductFilters'
import { filterProducts, getProducts } from '@/lib/products'

export function ProductsPage() {
  const [searchParams] = useSearchParams()
  const [filtersOpen, setFiltersOpen] = useState(false)
  const filters = getFiltersFromParams(searchParams)
  const products = filterProducts(filters)
  const totalProducts = getProducts().length
  const activeCount = getActiveFilterCount(searchParams)

  return (
    <>
      <PageSEO
        title="Products"
        description="Browse our curated collection of premium cosmetics, skincare, makeup, haircare, and beauty essentials."
      />
      <div className="page-padding">
        <div className="container-custom">
          <div className="mb-6 flex items-center justify-between gap-3 sm:mb-8">
            <div className="min-w-0 flex-1 text-start">
              <h1 className="heading-lg text-charcoal">Our Products</h1>
            </div>
            <ProductFilterTrigger
              activeCount={activeCount}
              onClick={() => setFiltersOpen(true)}
            />
          </div>

          <ProductSearch />

          <ProductFilterSheet
            open={filtersOpen}
            onClose={() => setFiltersOpen(false)}
          />

          {products.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-2xl border border-dashed border-charcoal/15 bg-white p-8 text-center sm:mt-16 sm:p-12">
              <p className="text-base text-charcoal sm:text-lg">
                {totalProducts === 0
                  ? 'No products added yet'
                  : 'No products match your filters'}
              </p>
              <p className="mt-2 text-sm text-muted">
                {totalProducts === 0
                  ? 'New products will appear here as they are added to the catalog.'
                  : 'Try adjusting your filters.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
