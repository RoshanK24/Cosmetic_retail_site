import { type TextareaHTMLAttributes, forwardRef } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={textareaId} className="text-sm font-medium text-charcoal">
            {label}
            {props.required && <span className="text-gold-dark"> *</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`min-h-[120px] resize-y rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-base text-charcoal outline-none transition-colors placeholder:text-charcoal-light/60 focus:border-gold focus:ring-2 focus:ring-gold/20 sm:py-2.5 sm:text-sm ${error ? 'border-red-400' : ''} ${className}`}
          {...props}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'
