import { Link } from 'react-router-dom'
import { siteConfig } from '@/data/site-config'
import { SectionHeader } from '@/components/ui/SectionHeader'

const categoryIcons: Record<string, string> = {
  'Skin Care': '✨',
  'Hair Care': '💇',
  Makeup: '💄',
  Fragrance: '🌸',
  'Face Care': '🌿',
  'Body Care': '🛁',
}

export function FeaturedCategories() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeader
          title="Shop by Category"
          subtitle="Browse skincare, makeup, haircare & more"
        />
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {siteConfig.categories.map((cat) => (
            <Link
              key={cat}
              to={`/products?category=${encodeURIComponent(cat)}`}
              className="group flex flex-col items-center rounded-xl border border-charcoal/5 bg-white p-3 text-center shadow-sm transition-all active:scale-[0.98] sm:rounded-2xl sm:p-6 sm:hover:scale-[1.02] sm:hover:border-gold/30 sm:hover:shadow-md"
            >
              <span className="mb-2 text-2xl sm:mb-3 sm:text-3xl">{categoryIcons[cat] ?? '✨'}</span>
              <h3 className="font-heading text-xs font-semibold leading-tight text-charcoal line-clamp-2 group-hover:text-gold-dark sm:text-lg">
                {cat}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
