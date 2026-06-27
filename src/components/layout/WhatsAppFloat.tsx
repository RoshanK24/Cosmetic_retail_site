import { openWhatsApp } from '@/lib/whatsapp'
import { WhatsAppIcon } from './Header'

export function WhatsAppFloat() {
  return (
    <button
      type="button"
      onClick={() => openWhatsApp()}
      className="fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all active:scale-95 sm:bottom-6 sm:right-6 sm:hover:scale-110 sm:hover:bg-[#1da851] sm:hover:shadow-xl bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))]"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </button>
  )
}
