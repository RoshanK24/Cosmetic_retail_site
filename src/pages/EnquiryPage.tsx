import { useSearchParams } from 'react-router-dom'
import { PageSEO } from '@/components/seo/PageSEO'
import { EnquiryForm } from '@/components/enquiry/EnquiryForm'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function EnquiryPage() {
  const [searchParams] = useSearchParams()
  const product = searchParams.get('product') ?? ''
  const quantity = searchParams.get('quantity') ?? ''

  return (
    <>
      <PageSEO
        title="Enquiry"
        description="Send us a product enquiry. We will get back to you with details and pricing."
      />
      <div className="page-padding bg-cream">
        <div className="container-custom mx-auto max-w-2xl">
          <SectionHeader
            as="h1"
            title="Send an Enquiry"
            subtitle="Fill in the form — no payment required"
            className="mb-6 sm:mb-8"
          />
          <div className="rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm sm:p-8">
            <EnquiryForm defaultProduct={product} defaultQuantity={quantity} />
          </div>
        </div>
      </div>
    </>
  )
}
