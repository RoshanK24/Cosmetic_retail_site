import { useState, type FormEvent } from 'react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { openWhatsApp } from '@/lib/whatsapp'

interface EnquiryFormProps {
  variant?: 'enquiry' | 'contact'
  defaultProduct?: string
  defaultQuantity?: string
}

interface FormData {
  fullName: string
  mobile: string
  email: string
  productName: string
  quantity: string
  message: string
}

export function EnquiryForm({
  variant = 'enquiry',
  defaultProduct = '',
  defaultQuantity = '',
}: EnquiryFormProps) {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    mobile: '',
    email: '',
    productName: defaultProduct,
    quantity: defaultQuantity,
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const showProductFields = variant === 'enquiry'

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!form.mobile.trim()) newErrors.mobile = 'Mobile number is required'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return

    // TODO: connect to API/email service
    // Example: await fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(form) })
    console.log('Enquiry submitted:', form)
    setSubmitted(true)
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="heading-md text-green-800">Enquiry Sent Successfully!</h3>
        <p className="mt-2 text-sm text-green-700">
          Thank you for reaching out. We will get back to you shortly.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setSubmitted(false)
            setForm({
              fullName: '',
              mobile: '',
              email: '',
              productName: defaultProduct,
              quantity: defaultQuantity,
              message: '',
            })
          }}
        >
          Send Another Enquiry
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Full Name"
          required
          value={form.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          error={errors.fullName}
          placeholder="Your full name"
        />
        <Input
          label="Mobile Number"
          required
          type="tel"
          value={form.mobile}
          onChange={(e) => handleChange('mobile', e.target.value)}
          error={errors.mobile}
          placeholder="+91 98765 43210"
        />
      </div>

      <Input
        label="Email"
        type="email"
        value={form.email}
        onChange={(e) => handleChange('email', e.target.value)}
        placeholder="your@email.com (optional)"
      />

      {showProductFields && (
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            label="Product Name"
            value={form.productName}
            onChange={(e) => handleChange('productName', e.target.value)}
            placeholder="Product you are interested in (optional)"
          />
          <Input
            label="Quantity Required"
            value={form.quantity}
            onChange={(e) => handleChange('quantity', e.target.value)}
            placeholder="e.g. 2 pieces (optional)"
          />
        </div>
      )}

      <Textarea
        label="Message"
        required
        value={form.message}
        onChange={(e) => handleChange('message', e.target.value)}
        error={errors.message}
        placeholder="Tell us about your enquiry..."
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" variant="secondary" size="lg" className="flex-1">
          Submit Enquiry
        </Button>
        <Button
          type="button"
          variant="whatsapp"
          size="lg"
          className="flex-1"
          onClick={() => openWhatsApp(form.productName || undefined)}
        >
          Enquire via WhatsApp
        </Button>
      </div>
    </form>
  )
}
