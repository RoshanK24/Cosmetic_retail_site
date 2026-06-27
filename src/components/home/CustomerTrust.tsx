import { SectionHeader } from '@/components/ui/SectionHeader'

const stats = [
  { value: '500+', label: 'Happy Customers' },
  { value: '25+', label: 'Premium Brands' },
  { value: '6', label: 'Product Categories' },
  { value: '100%', label: 'Genuine Products' },
]

export function CustomerTrust() {
  return (
    <section className="section-padding bg-charcoal text-white">
      <div className="container-custom">
        <SectionHeader
          title="Trusted by Beauty Lovers"
          subtitle="Join thousands of satisfied customers who trust us"
          tone="gold"
        />
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-4xl font-bold text-gold sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
        {/* <div className="mt-8 grid gap-6 sm:mt-12 md:grid-cols-3">
          {[
            {
              quote: 'Amazing collection of skincare products. The enquiry process was so smooth!',
              author: 'Priya S.',
            },
            {
              quote: 'Found all my favourite brands in one place. Highly recommend Sahaj International.',
              author: 'Ananya M.',
            },
            {
              quote: 'Quick WhatsApp response and genuine products. My go-to beauty store.',
              author: 'Riya K.',
            },
          ].map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-sm italic text-white/80">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-gold">— {testimonial.author}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
