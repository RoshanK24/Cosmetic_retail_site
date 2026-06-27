import type { ProductCategory } from '@/types/product'

// ============================================================
// Store & contact details — Sahaj International
// ============================================================
export const siteConfig = {
  name: 'Sahaj International',
  namePrimary: 'Sahaj',
  nameSecondary: 'INTERNATIONAL',

  tagline: 'Premium Cosmetics & Beauty Essentials',

  contactPerson: 'L.S. Khinda',

  phone: '+91 97567 04131',
  phoneAlt: '+91 99977 04131',
  phones: ['+91 97567 04131', '+91 99977 04131'],

  // Digits only — primary WhatsApp number
  whatsapp: '919756704131',

  email: 'sahaj.int2014@gmail.com',

  address:
    '171, Sitarganj Road, Nanakmatta, U.S. Nagar, Uttarakhand - 262311, India',

  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.5!2d79.95!3d28.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU3JzAwLjAiTiA3OcKwNTcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000',

  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
  },

  categories: [
    'Skin Care',
    'Hair Care',
    'Makeup',
    'Fragrance',
    'Face Care',
    'Body Care',
  ] as ProductCategory[],
}
