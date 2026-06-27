import type { Product } from '@/types/product'
import { catalog } from '@/data/catalog'
import { getProductImageUrl } from '@/data/product-images'

function resolveImages(item: (typeof catalog)[number]): string[] {
  if (item.images && item.images.length > 0) return item.images
  if (item.image) return [item.image]
  return [getProductImageUrl(item.name, item.subCategory, item.slug)]
}

export const products: Product[] = catalog.map((item, index) => ({
  id: String(index + 1),
  slug: item.slug,
  name: item.name,
  brand: item.brand,
  category: item.category,
  subCategory: item.subCategory,
  images: resolveImages(item),
  shortDescription: item.shortDescription,
  fullDescription: item.fullDescription,
  benefits: item.benefits,
  ingredients: item.ingredients ?? 'Refer to product packaging for full ingredient list.',
  howToUse:
    item.howToUse ??
    `Use as directed on the product packaging. Suitable for regular ${item.subCategory.toLowerCase()} routine.`,
  variants: item.variants,
  price: item.price,
  mrp: item.mrp,
  status: 'available' as const,
  featured: item.featured,
  popular: item.popular,
  createdAt: item.createdAt,
}))
