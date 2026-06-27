import { PageSEO } from '@/components/seo/PageSEO'
import { siteConfig } from '@/data/site-config'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function AboutPage() {
  return (
    <>
      <PageSEO
        title="About Us"
        description={`Learn about ${siteConfig.name} - your trusted destination for premium cosmetics and beauty products.`}
      />
      <div className="page-padding">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeader
            as="h1"
            title={`About ${siteConfig.name}`}
            subtitle={siteConfig.tagline}
            className="mb-8 sm:mb-12"
          />

          <div className="space-y-6 sm:space-y-8">
            <div className="rounded-2xl border border-charcoal/5 bg-white p-8 shadow-sm">
              <h2 className="heading-md text-charcoal">Our Story</h2>
              <p className="mt-4 text-muted leading-relaxed">
                {siteConfig.name} was founded with a simple mission: to make premium beauty and
                personal care products accessible across Uttarakhand and beyond. Based in
                Nanakmatta, we serve customers with authentic, high-quality products from trusted
                brands — backed by personal service from {siteConfig.contactPerson} and our team.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                From skincare essentials to luxury fragrances, our carefully curated collection
                covers every aspect of your beauty routine. We work directly with authorised
                distributors to ensure every product on our shelves is 100% genuine.
              </p>
            </div>

            <div className="rounded-2xl border border-charcoal/5 bg-blush/30 p-8">
              <h2 className="heading-md text-charcoal">What We Offer</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Skin Care', desc: 'Serums, moisturisers, cleansers, and treatments for every skin type.' },
                  { title: 'Hair Care', desc: 'Shampoos, conditioners, and treatments for healthy, beautiful hair.' },
                  { title: 'Makeup', desc: 'Foundations, lipsticks, mascaras, and more from top beauty brands.' },
                  { title: 'Fragrance', desc: 'Eau de parfums, body mists, and perfumes for every occasion.' },
                  { title: 'Face Care', desc: 'Cleansers, face washes, and daily face care essentials.' },
                  { title: 'Body Care', desc: 'Body lotions, scrubs, and shower essentials for all-over care.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl bg-white p-5">
                    <h3 className="font-heading text-lg font-semibold text-charcoal">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-charcoal/5 bg-white p-8 shadow-sm">
              <h2 className="heading-md text-charcoal">Our Values</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {[
                  { icon: '✅', title: 'Authenticity', desc: 'Only genuine, authorised products.' },
                  { icon: '🌟', title: 'Quality', desc: 'Curated selection of premium brands.' },
                  { icon: '🤝', title: 'Service', desc: 'Personalised enquiry support for every customer.' },
                ].map((value) => (
                  <div key={value.title} className="text-center">
                    <span className="text-3xl">{value.icon}</span>
                    <h3 className="mt-3 font-heading text-lg font-semibold text-charcoal">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
