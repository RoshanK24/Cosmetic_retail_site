import { Link } from 'react-router-dom'
import { PageSEO } from '@/components/seo/PageSEO'
import { siteConfig } from '@/data/site-config'
import { SectionHeader } from '@/components/ui/SectionHeader'

const categoryImages: Record<string, string> = {
  'Skin Care': 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80',
  'Hair Care': 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80',
  Makeup: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80',
  Fragrance: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80',
  'Face Care': 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80',
  'Body Care': 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80',
}

export function CategoriesPage() {
  return (
    <>
      <PageSEO
        title="Categories"
        description="Browse beauty products by category - skincare, makeup, haircare, fragrance, and more."
      />
      <div className="page-padding">
        <div className="container-custom">
          <SectionHeader
            as="h1"
            title="Product Categories"
            subtitle="Explore our collection by category"
            className="mb-6 sm:mb-10"
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            {siteConfig.categories.map((cat) => (
              <Link
                key={cat}
                to={`/products?category=${encodeURIComponent(cat)}`}
                className="group overflow-hidden rounded-2xl border border-charcoal/5 bg-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={categoryImages[cat]}
                    alt={cat}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-heading text-xl font-semibold text-charcoal group-hover:text-gold-dark">
                    {cat}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
