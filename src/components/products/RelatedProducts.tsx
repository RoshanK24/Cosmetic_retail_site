import type { Product } from '@/types/product'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProductCard } from './ProductCard'

interface RelatedProductsProps {
  products: Product[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null

  return (
    <section className="mt-10 sm:mt-16">
      <SectionHeader
        title="Related Products"
        subtitle="You might also like these"
        size="md"
        align="start"
        className="mb-4 sm:mb-6"
      />
      <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
