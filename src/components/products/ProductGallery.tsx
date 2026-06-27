import { useState } from 'react'
import { ProductImage } from './ProductImage'

interface ProductGalleryProps {
  images: string[]
  name: string
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="aspect-square overflow-hidden rounded-2xl border border-charcoal/5 bg-blush/30">
        <ProductImage
          src={images[activeIndex]}
          alt={name}
          className="h-full w-full object-contain bg-white p-3 sm:p-4"
        />
      </div>
      {images.length > 1 && (
        <div className="scrollbar-hide -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 snap-x snap-mandatory">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`h-16 w-16 shrink-0 snap-start overflow-hidden rounded-xl border-2 transition-all sm:h-20 sm:w-20 ${
                i === activeIndex ? 'border-gold' : 'border-transparent opacity-60'
              }`}
              aria-label={`View image ${i + 1}`}
              aria-current={i === activeIndex}
            >
              <ProductImage
                src={img}
                alt={`${name} view ${i + 1}`}
                className="h-full w-full object-contain bg-white p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
