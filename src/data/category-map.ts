import type { ProductCategory } from '@/types/product'

// Maps product type (subCategory) → main website category
// Category is auto-assigned when you add a product — you only need to set subCategory
export const subCategoryToCategory: Record<string, ProductCategory> = {
  // Face Care / Skin Care
  'Face Wash': 'Face Care',
  Cleanser: 'Face Care',
  Moisturizer: 'Skin Care',
  Sunscreen: 'Skin Care',
  Serum: 'Skin Care',
  Toner: 'Skin Care',
  'Face Mask': 'Skin Care',
  'Sheet Mask': 'Skin Care',
  'Face Oil': 'Skin Care',
  'Skin Care': 'Skin Care',

  // Makeup
  Foundation: 'Makeup',
  Concealer: 'Makeup',
  Compact: 'Makeup',
  'Face Powder': 'Makeup',
  Lipstick: 'Makeup',
  'Lip Balm': 'Makeup',
  'Lip Care': 'Makeup',
  'Lip Tint': 'Makeup',
  'Lip Gloss': 'Makeup',
  Kajal: 'Makeup',
  Eyeliner: 'Makeup',
  Mascara: 'Makeup',
  Eyebrow: 'Makeup',
  Eyeshadow: 'Makeup',
  Blush: 'Makeup',
  Highlighter: 'Makeup',
  Primer: 'Makeup',
  'Makeup Fixer': 'Makeup',
  Makeup: 'Makeup',

  // Hair Care
  Shampoo: 'Hair Care',
  Conditioner: 'Hair Care',
  'Hair Oil': 'Hair Care',
  'Hair Serum': 'Hair Care',
  'Hair Mask': 'Hair Care',
  'Hair Care': 'Hair Care',

  // Body Care
  'Body Lotion': 'Body Care',
  'Body Scrub': 'Body Care',
  'Shower Gel': 'Body Care',
  Soap: 'Body Care',
  'Body Care': 'Body Care',

  // Personal Care
  'Roll On': 'Personal Care',
  'Personal Care': 'Personal Care',

  // Fragrance
  Deodorant: 'Fragrance',
  Fragrance: 'Fragrance',

  // Beauty Tools
  'Beauty Tool': 'Beauty Tools',
  'Beauty Tools': 'Beauty Tools',
}

export const subCategories = Object.keys(subCategoryToCategory).sort()

export function resolveCategory(subCategory: string): ProductCategory {
  const category = subCategoryToCategory[subCategory]
  if (!category) {
    console.warn(`Unknown subCategory "${subCategory}" — defaulting to Skin Care`)
    return 'Skin Care'
  }
  return category
}
