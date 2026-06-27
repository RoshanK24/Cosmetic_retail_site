import { Link } from 'react-router-dom'
import { siteConfig } from '@/data/site-config'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blush">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600&q=80')] bg-cover bg-center opacity-25" />
      <div className="container-custom relative section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gold-dark sm:mb-4 sm:text-sm">
            Welcome to {siteConfig.name}
          </p>
          <h1 className="heading-xl text-charcoal">
            Discover Your
            <span className="block text-gold-dark">Natural Radiance</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted sm:mt-6 sm:max-w-xl sm:text-lg">
            {siteConfig.tagline}. Premium skincare, makeup &amp; beauty essentials.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Link to="/products" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                View Products
              </Button>
            </Link>
            <Link to="/enquiry" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Send Enquiry
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
