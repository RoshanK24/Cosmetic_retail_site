type SectionHeaderProps = {
  title: string
  subtitle?: string
  as?: 'h1' | 'h2' | 'h3'
  align?: 'center' | 'start'
  size?: 'lg' | 'md'
  tone?: 'default' | 'gold' | 'light'
  className?: string
}

const titleTone: Record<NonNullable<SectionHeaderProps['tone']>, string> = {
  default: 'text-charcoal',
  gold: 'text-gold',
  light: 'text-white',
}

const subtitleTone: Record<NonNullable<SectionHeaderProps['tone']>, string> = {
  default: 'text-muted',
  gold: 'text-white/70',
  light: 'text-white/70',
}

export function SectionHeader({
  title,
  subtitle,
  as = 'h2',
  align = 'center',
  size = 'lg',
  tone = 'default',
  className = '',
}: SectionHeaderProps) {
  const Tag = as
  const headingClass = size === 'md' ? 'heading-md' : 'heading-lg'

  return (
    <div
      className={`mb-6 px-1 sm:mb-10 sm:px-0 ${
        align === 'center' ? 'text-center' : 'text-start'
      } ${className}`}
    >
      <Tag className={`${headingClass} ${titleTone[tone]}`}>{title}</Tag>
      {subtitle && (
        <p
          className={`mt-2 text-sm leading-relaxed sm:mt-3 sm:text-base ${subtitleTone[tone]} ${
            align === 'center' ? 'mx-auto max-w-[280px] sm:max-w-xl' : 'max-w-xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
