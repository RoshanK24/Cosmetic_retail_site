import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PageSEO } from '@/components/seo/PageSEO'
import { ProductGallery } from '@/components/products/ProductGallery'
import { RelatedProducts } from '@/components/products/RelatedProducts'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { getProductBySlug, getRelatedProducts } from '@/lib/products'
import { PriceOnEnquiry } from '@/components/products/PriceOnEnquiry'
import { openWhatsApp } from '@/lib/whatsapp'

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const product = slug ? getProductBySlug(slug) : undefined
  const [showIngredients, setShowIngredients] = useState(false)

  if (!product) {
    return (
      <div className="page-padding">
        <div className="container-custom text-center">
          <h1 className="heading-lg text-charcoal">Product Not Found</h1>
          <p className="mt-4 text-muted">The product you are looking for does not exist.</p>
          <Link to="/products" className="mt-6 inline-block">
            <Button variant="secondary">Back to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  const related = getRelatedProducts(product)

  function handleEnquire() {
    navigate(`/enquiry?product=${encodeURIComponent(product!.name)}`)
  }

  return (
    <>
      <PageSEO title={product.name} description={product.shortDescription} />
      <div className="page-padding pb-28 sm:pb-0">
        <div className="container-custom">
          <nav className="mb-4 flex flex-wrap items-center gap-x-1 gap-y-1 text-xs text-muted sm:mb-8 sm:text-sm">
            <Link to="/" className="hover:text-gold-dark">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-gold-dark">Products</Link>
            <span>/</span>
            <span className="line-clamp-1 text-charcoal">{product.name}</span>
          </nav>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
            <ProductGallery images={product.images} name={product.name} />

            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <Badge variant="gold">{product.category}</Badge>
                <Badge variant="default">{product.subCategory}</Badge>
                <Badge variant={product.status === 'available' ? 'success' : 'warning'}>
                  {product.status === 'available' ? 'Available' : 'On Enquiry'}
                </Badge>
              </div>

              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-gold-dark sm:mt-4 sm:text-sm">
                {product.brand}
              </p>
              <h1 className="product-title mt-1 sm:mt-2">{product.name}</h1>
              {product.variants[0] && (
                <p className="mt-1 text-sm text-muted sm:text-base">{product.variants[0].label}</p>
              )}

              <PriceOnEnquiry size="lg" className="mt-3 sm:mt-4" />

              <p className="mt-4 text-sm leading-relaxed text-muted sm:mt-6 sm:text-base">
                {product.fullDescription}
              </p>

              {product.benefits.length > 0 && (
                <div className="mt-5 sm:mt-6">
                  <h3 className="font-heading text-base font-semibold text-charcoal sm:text-lg">Benefits</h3>
                  <ul className="mt-2 space-y-2 sm:mt-3">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-0.5 shrink-0 text-gold">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.howToUse && (
                <div className="mt-5 sm:mt-6">
                  <h3 className="font-heading text-base font-semibold text-charcoal sm:text-lg">How to Use</h3>
                  <p className="mt-2 text-sm text-muted">{product.howToUse}</p>
                </div>
              )}

              {product.ingredients && (
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    onClick={() => setShowIngredients(!showIngredients)}
                    className="flex min-h-11 w-full items-center justify-between font-heading text-base font-semibold text-charcoal sm:text-lg"
                  >
                    Ingredients
                    <span className="text-gold">{showIngredients ? '−' : '+'}</span>
                  </button>
                  {showIngredients && (
                    <p className="mt-2 text-sm leading-relaxed text-muted">{product.ingredients}</p>
                  )}
                </div>
              )}

              {product.variants.length > 0 && (
                <div className="mt-5 sm:mt-6">
                  <h3 className="font-heading text-base font-semibold text-charcoal sm:text-lg">
                    Available Sizes / Variants
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2 sm:mt-3">
                    {product.variants.map((v) => (
                      <span
                        key={v.sku}
                        className="rounded-full border border-charcoal/15 bg-blush/50 px-3 py-1.5 text-xs text-charcoal sm:px-4 sm:text-sm"
                      >
                        {v.label}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 hidden flex-col gap-3 sm:flex sm:flex-row">
                <Button variant="secondary" size="lg" className="flex-1" onClick={handleEnquire}>
                  Enquire for this Product
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="flex-1"
                  onClick={() => openWhatsApp(product.name)}
                >
                  WhatsApp Enquiry
                </Button>
              </div>
            </div>
          </div>

          <RelatedProducts products={related} />
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-cream/95 p-3 backdrop-blur-md sm:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="container-custom flex gap-2">
          <Button variant="secondary" size="lg" className="flex-1 text-sm" onClick={handleEnquire}>
            Enquire
          </Button>
          <Button
            variant="whatsapp"
            size="lg"
            className="flex-1 text-sm"
            onClick={() => openWhatsApp(product.name)}
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </>
  )
}
