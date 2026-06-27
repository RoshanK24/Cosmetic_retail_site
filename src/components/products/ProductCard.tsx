import { Link, useNavigate } from 'react-router-dom'
import type { Product } from '@/types/product'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ProductImage } from '@/components/products/ProductImage'
import { PriceOnEnquiry } from '@/components/products/PriceOnEnquiry'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate()

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-charcoal/5 bg-white shadow-sm transition-shadow hover:shadow-md sm:rounded-2xl sm:hover:scale-[1.02]">
      <Link to={`/products/${product.slug}`} className="relative aspect-square overflow-hidden">
        <ProductImage
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-contain bg-white p-2 transition-transform duration-300 group-hover:scale-105 sm:p-3"
        />
        <div className="absolute left-1.5 top-1.5 hidden flex-col gap-1 sm:left-3 sm:top-3 sm:flex">
          <Badge variant="gold">{product.subCategory}</Badge>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-2 sm:p-4">
        <p className="truncate text-[10px] font-medium uppercase tracking-wider text-gold-dark sm:text-xs">
          {product.brand}
        </p>
        <Link to={`/products/${product.slug}`}>
          <h3 className="mt-0.5 font-heading text-sm font-semibold leading-snug text-charcoal transition-colors hover:text-gold-dark line-clamp-2 sm:mt-1 sm:text-lg">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 hidden flex-1 text-sm text-muted line-clamp-2 sm:mt-2 sm:block">
          {product.shortDescription}
        </p>

        <PriceOnEnquiry className="mt-1.5 sm:mt-3" />

        <div className="mt-2 flex flex-col gap-1.5 sm:mt-4 sm:flex-row sm:gap-2">
          <Link to={`/products/${product.slug}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full px-2 text-xs sm:px-3 sm:text-sm">
              <span className="sm:hidden">View</span>
              <span className="hidden sm:inline">View Details</span>
            </Button>
          </Link>
          <Button
            variant="secondary"
            size="sm"
            className="w-full flex-1 px-2 text-xs sm:px-3 sm:text-sm"
            onClick={() =>
              navigate(`/enquiry?product=${encodeURIComponent(product.name)}`)
            }
          >
            <span className="sm:hidden">Enquire</span>
            <span className="hidden sm:inline">Enquire Now</span>
          </Button>
        </div>
      </div>
    </article>
  )
}
