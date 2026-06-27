import { useEffect } from 'react'
import { siteConfig } from '@/data/site-config'

interface PageSEOProps {
  title: string
  description?: string
}

export function PageSEO({ title, description }: PageSEOProps) {
  const fullTitle = title === 'Home' ? siteConfig.name : `${title} | ${siteConfig.name}`
  const desc = description ?? siteConfig.tagline

  useEffect(() => {
    document.title = fullTitle

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', desc)
  }, [fullTitle, desc])

  return null
}
