import { PageSEO } from '@/components/seo/PageSEO'
import { Hero } from '@/components/home/Hero'
import { FeaturedCategories } from '@/components/home/FeaturedCategories'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { CustomerTrust } from '@/components/home/CustomerTrust'
import { EnquiryCTA } from '@/components/home/EnquiryCTA'
import { siteConfig } from '@/data/site-config'

export function HomePage() {
  return (
    <>
      <PageSEO
        title="Home"
        description={`${siteConfig.name} - ${siteConfig.tagline}. Browse premium cosmetics, skincare, makeup, and beauty essentials.`}
      />
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <WhyChooseUs />
      <CustomerTrust />
      <EnquiryCTA />
    </>
  )
}
