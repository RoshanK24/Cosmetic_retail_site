import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function EnquiryCTA() {
  return (
    <section className="section-padding bg-blush">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl rounded-2xl border border-gold/20 bg-white p-6 text-center shadow-sm sm:rounded-3xl sm:p-12">
          <SectionHeader
            title="Have a Question?"
            subtitle="Product recommendations, bulk orders & more"
            size="md"
            className="mb-4 sm:mb-6"
          />
          <p className="mx-auto hidden max-w-md text-sm text-muted sm:block sm:text-base">
            Whether you need product recommendations, bulk orders, or general information —
            we are here to help. Send us an enquiry and we will respond promptly.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Link to="/enquiry" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Send Enquiry
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
