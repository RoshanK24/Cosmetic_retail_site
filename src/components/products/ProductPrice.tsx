import { formatPrice, getDiscountPercent } from '@/lib/products'

interface ProductPriceProps {
  price: number
  mrp?: number
  size?: 'sm' | 'lg'
}

export function ProductPrice({ price, mrp, size = 'sm' }: ProductPriceProps) {
  const discount = getDiscountPercent(price, mrp)
  const priceClass = size === 'lg' ? 'text-xl sm:text-2xl' : 'text-sm sm:text-lg'

  return (
    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
      <span className={`font-bold text-gold-dark ${priceClass}`}>{formatPrice(price)}</span>
      {mrp && mrp > price && (
        <>
          <span className="text-[10px] text-muted line-through sm:text-sm">{formatPrice(mrp)}</span>
          {discount && (
            <span className="rounded-full bg-green-100 px-1.5 py-0.5 text-[9px] font-medium text-green-700 sm:px-2 sm:text-xs">
              {discount}% OFF
            </span>
          )}
        </>
      )}
    </div>
  )
}
