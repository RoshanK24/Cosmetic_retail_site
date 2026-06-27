import type { CatalogEntry } from '@/data/catalog'
import { resolveCategory } from '@/data/category-map'

import type { ProductVariant } from '@/types/product'

export interface NewProductInput {
  name: string
  brand: string
  subCategory: string
  price: number
  mrp?: number
  /** Main image or array of images — paths under /products/ */
  image?: string
  images?: string[]
  shortDescription?: string
  fullDescription?: string
  benefits?: string[]
  ingredients?: string
  howToUse?: string
  variants?: ProductVariant[]
  /** Optional custom URL slug — use when same product name exists in different sizes */
  slug?: string
  featured?: boolean
  popular?: boolean
}

export function slugify(name: string, brand: string): string {
  return `${name}-${brand}`
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/** Helper to add a product — category is auto-assigned from subCategory */
export function product(input: NewProductInput): CatalogEntry {
  const slug = input.slug ?? slugify(input.name, input.brand)
  const category = resolveCategory(input.subCategory)

  return {
    name: input.name,
    brand: input.brand,
    subCategory: input.subCategory,
    price: input.price,
    mrp: input.mrp,
    category,
    slug,
    image: input.image,
    images: input.images ?? (input.image ? [input.image] : undefined),
    shortDescription:
      input.shortDescription ??
      `${input.brand} ${input.subCategory} — premium quality, authentic product.`,
    fullDescription:
      input.fullDescription ??
      `${input.brand} ${input.name} is a premium ${input.subCategory.toLowerCase()} product from ${input.brand}.`,
    benefits: input.benefits ?? ['Premium quality', 'Authentic product', 'Trusted brand'],
    ingredients: input.ingredients,
    howToUse: input.howToUse,
    variants: input.variants ?? [{ label: 'Standard', sku: `${slug}-std` }],
    featured: input.featured ?? false,
    popular: input.popular ?? false,
    createdAt: new Date().toISOString().split('T')[0],
  }
}
