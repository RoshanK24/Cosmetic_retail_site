import { siteConfig } from '@/data/site-config'

export function buildWhatsAppUrl(productName?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`
  const text = productName
    ? `Hello, I want to enquire about ${productName}. Please share details.`
    : 'Hello, I would like to make a general enquiry.'
  return `${base}?text=${encodeURIComponent(text)}`
}

export function openWhatsApp(productName?: string): void {
  window.open(buildWhatsAppUrl(productName), '_blank', 'noopener,noreferrer')
}
