import { siteConfig } from '@/data/site-config'
import { SectionHeader } from '@/components/ui/SectionHeader'

const features = [
  {
    icon: '🏆',
    title: 'Authentic Brands',
    description: '100% genuine products from trusted international and Indian beauty brands.',
  },
  {
    icon: '💎',
    title: 'Premium Quality',
    description: 'Every product is carefully curated to meet the highest quality standards.',
  },
  {
    icon: '🎯',
    title: 'Expert Curation',
    description: 'Our team selects only the best products for your skincare and beauty needs.',
  },
  {
    icon: '💬',
    title: 'Enquiry Support',
    description: 'Get personalised product recommendations via enquiry or WhatsApp chat.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-lavender/30">
      <div className="container-custom">
        <SectionHeader
          title="Why Choose Us"
          subtitle={`The ${siteConfig.name} difference`}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-6 text-center shadow-sm transition-all hover:scale-[1.02] hover:shadow-md"
            >
              <span className="text-4xl">{feature.icon}</span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-charcoal">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
