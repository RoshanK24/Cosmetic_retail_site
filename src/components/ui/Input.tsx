import { type InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-charcoal">
            {label}
            {props.required && <span className="text-gold-dark"> *</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`min-h-12 rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-base text-charcoal outline-none transition-colors placeholder:text-charcoal-light/60 focus:border-gold focus:ring-2 focus:ring-gold/20 sm:min-h-0 sm:py-2.5 sm:text-sm ${error ? 'border-red-400' : ''} ${className}`}
          {...props}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    )
  },
)

Input.displayName = 'Input'
