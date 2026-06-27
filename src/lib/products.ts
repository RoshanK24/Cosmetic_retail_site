import { products } from '@/data/products'
import type { Product, ProductFilters, SortOption } from '@/types/product'

export function getProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(limit = 8): Product[] {
  return products.filter((p) => p.featured).slice(0, limit)
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const sameSub = products.filter(
    (p) => p.subCategory === product.subCategory && p.id !== product.id,
  )
  if (sameSub.length >= limit) return sameSub.slice(0, limit)

  const sameCategory = products.filter(
    (p) => p.category === product.category && p.id !== product.id,
  )
  return [...sameSub, ...sameCategory.filter((p) => !sameSub.includes(p))].slice(0, limit)
}

export function getBrands(): string[] {
  return [...new Set(products.map((p) => p.brand))].sort()
}

export function getSubCategories(): string[] {
  return [...new Set(products.map((p) => p.subCategory))].sort()
}

export function filterProducts(filters: ProductFilters): Product[] {
  let result = [...products]

  if (filters.query) {
    const q = filters.query.toLowerCase()
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.subCategory.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q),
    )
  }

  if (filters.category) {
    result = result.filter((p) => p.category === filters.category)
  }

  if (filters.subCategory) {
    result = result.filter((p) => p.subCategory === filters.subCategory)
  }

  if (filters.brand) {
    result = result.filter((p) => p.brand === filters.brand)
  }

  const sort = filters.sort ?? 'newest'
  result = sortProducts(result, sort)

  return result
}

function sortProducts(items: Product[], sort: SortOption): Product[] {
  const sorted = [...items]
  switch (sort) {
    case 'newest':
      return sorted.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
    case 'popular':
      return sorted.sort((a, b) => Number(b.popular) - Number(a.popular))
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price)
    default:
      return sorted
  }
}

export function formatPrice(price: number | null): string {
  if (price === null) return 'Price on Enquiry'
  return `₹${price.toLocaleString('en-IN')}`
}

export function getDiscountPercent(price: number, mrp?: number): number | null {
  if (!mrp || mrp <= price) return null
  return Math.round(((mrp - price) / mrp) * 100)
}
