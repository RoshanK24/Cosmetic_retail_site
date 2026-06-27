import { Link } from 'react-router-dom'

interface PriceOnEnquiryProps {
  size?: 'sm' | 'lg'
  className?: string
}

export function PriceOnEnquiry({ size = 'sm', className = '' }: PriceOnEnquiryProps) {
  const isLarge = size === 'lg'

  return (
    <div className={className}>
      <p
        className={`font-medium text-gold-dark sm:hidden ${isLarge ? 'text-sm' : 'text-[10px] leading-snug'}`}
      >
        Price on enquiry —{' '}
        <Link to="/enquiry" className="underline underline-offset-2">
          contact us
        </Link>
      </p>
      <p
        className={`hidden font-medium text-gold-dark sm:block ${isLarge ? 'text-base sm:text-lg' : 'text-xs sm:text-sm'}`}
      >
        For price,{' '}
        <Link to="/contact" className="underline underline-offset-2 hover:text-brand-dark">
          contact us
        </Link>{' '}
        or{' '}
        <Link to="/enquiry" className="underline underline-offset-2 hover:text-brand-dark">
          send an enquiry
        </Link>
      </p>
    </div>
  )
}
