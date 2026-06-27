import { PageSEO } from '@/components/seo/PageSEO'
import { EnquiryForm } from '@/components/enquiry/EnquiryForm'
import { siteConfig } from '@/data/site-config'
import { openWhatsApp } from '@/lib/whatsapp'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function ContactPage() {
  return (
    <>
      <PageSEO
        title="Contact"
        description={`Get in touch with ${siteConfig.name}. Visit our store, call us, or send a message.`}
      />
      <div className="page-padding bg-cream">
        <div className="container-custom">
          <SectionHeader
            as="h1"
            title="Contact Us"
            subtitle="We would love to hear from you"
            className="mb-6 sm:mb-10"
          />

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-6">
              <div className="flex gap-4 rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm">
                <span className="text-2xl">👤</span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal">Contact Person</h3>
                  <p className="mt-1 text-sm text-muted">{siteConfig.contactPerson}</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal">Address</h3>
                  <p className="mt-1 text-sm text-muted">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal">Phone</h3>
                  <div className="mt-1 space-y-1">
                    {siteConfig.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="block text-sm text-muted hover:text-gold-dark"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm">
                <span className="text-2xl">💬</span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal">WhatsApp</h3>
                  <button
                    onClick={() => openWhatsApp()}
                    className="mt-1 text-sm text-muted hover:text-gold-dark"
                  >
                    {siteConfig.phone}
                  </button>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm">
                <span className="text-2xl">✉️</span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal">Email</h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 text-sm text-muted hover:text-gold-dark"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-charcoal/5 shadow-sm">
                <iframe
                  title="Store Location"
                  src={siteConfig.mapEmbedUrl}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <Button variant="whatsapp" size="lg" className="w-full" onClick={() => openWhatsApp()}>
                Chat on WhatsApp
              </Button>
            </div>

            <div className="rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="heading-md text-charcoal">Send a Message</h2>
              <p className="mt-2 text-sm text-muted">Fill out the form and we will get back to you.</p>
              <div className="mt-6">
                <EnquiryForm variant="contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
