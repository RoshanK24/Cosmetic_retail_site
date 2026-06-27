import { NavLink } from 'react-router-dom'
import { openWhatsApp } from '@/lib/whatsapp'
import { WhatsAppIcon } from './Header'

interface MobileNavProps {
  open: boolean
  onClose: () => void
  links: { to: string; label: string }[]
}

export function MobileNav({ open, onClose, links }: MobileNavProps) {
  if (!open) return null

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm lg:hidden"
        onClick={onClose}
        aria-label="Close menu"
      />
      <div className="fixed inset-x-0 top-14 z-50 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-charcoal/5 bg-cream shadow-lg sm:top-16 lg:hidden">
        <nav className="container-custom flex flex-col gap-1 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                  isActive ? 'bg-blush text-charcoal' : 'text-charcoal-light active:bg-blush/50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={() => {
              openWhatsApp()
              onClose()
            }}
            className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-base font-medium text-white active:bg-[#1da851]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat on WhatsApp
          </button>
        </nav>
      </div>
    </>
  )
}
