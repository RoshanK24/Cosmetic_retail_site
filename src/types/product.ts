export type ProductCategory =
  | 'Skin Care'
  | 'Hair Care'
  | 'Makeup'
  | 'Fragrance'
  | 'Personal Care'
  | 'Beauty Tools'
  | 'Face Care'
  | 'Body Care'

export type ProductStatus = 'available' | 'on-enquiry'

export type SortOption = 'newest' | 'popular' | 'name' | 'price-low' | 'price-high'

export interface ProductVariant {
  label: string
  sku: string
}

export interface Product {
  id: string
  slug: string
  name: string
  brand: string
  category: ProductCategory
  subCategory: string
  images: string[]
  shortDescription: string
  fullDescription: string
  benefits: string[]
  ingredients: string
  howToUse: string
  variants: ProductVariant[]
  price: number
  mrp?: number
  status: ProductStatus
  featured: boolean
  popular: boolean
  createdAt: string
}

export interface ProductFilters {
  query?: string
  category?: string
  subCategory?: string
  brand?: string
  sort?: SortOption
}
