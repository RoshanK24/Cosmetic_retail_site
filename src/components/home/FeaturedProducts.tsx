import { Link } from 'react-router-dom'
import { getFeaturedProducts } from '@/lib/products'
import { ProductCard } from '@/components/products/ProductCard'
import { Button } from '@/components/ui/Button'

export function FeaturedProducts() {
  const products = getFeaturedProducts(8)

  if (products.length === 0) return null

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-6 flex items-center justify-between gap-3 sm:mb-10">
          <div className="min-w-0 flex-1 text-start">
            <h2 className="heading-lg text-charcoal">Featured Products</h2>
            <p className="mt-1 hidden text-sm text-muted sm:mt-2 sm:block">
              Handpicked favourites from our collection
            </p>
          </div>
          <Link to="/products" className="shrink-0">
            <Button variant="outline" size="sm" className="whitespace-nowrap sm:min-h-12 sm:px-6 sm:text-base">
              <span className="sm:hidden">View All</span>
              <span className="hidden sm:inline">View All Products</span>
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
