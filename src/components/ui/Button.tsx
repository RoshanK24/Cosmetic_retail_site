import { type ButtonHTMLAttributes, forwardRef } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const variants: Record<Variant, string> = {
  primary:
    'bg-charcoal text-white hover:bg-charcoal-light border border-charcoal shadow-sm',
  secondary:
    'bg-gold text-white hover:bg-gold-dark border border-gold shadow-sm',
  outline:
    'bg-transparent text-charcoal border border-charcoal/20 hover:border-gold hover:text-gold-dark',
  ghost: 'bg-transparent text-charcoal hover:bg-blush/50',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#1da851] border border-[#25D366]',
}

const sizes: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'min-h-10 px-4 py-2 text-sm',
  md: 'min-h-11 px-5 py-2.5 text-sm',
  lg: 'min-h-12 px-6 py-3 text-base sm:px-7',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
