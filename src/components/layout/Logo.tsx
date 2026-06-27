import { Link } from 'react-router-dom'
import { siteConfig } from '@/data/site-config'

interface LogoProps {
  variant?: 'default' | 'light'
  linked?: boolean
  compact?: boolean
  className?: string
}

export function LogoMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 38C8 22 14 12 26 10C26 10 18 14 16 22C14 30 20 36 30 38H8Z"
        fill="#C87941"
      />
      <path
        d="M10 10C10 10 18 8 24 14C30 20 28 32 20 38C20 38 32 34 34 22C36 10 24 6 10 10Z"
        fill="#C87941"
      />
      <rect x="34" y="14" width="5" height="24" rx="2.5" fill="#2d2a32" />
      <circle cx="36.5" cy="10" r="3" fill="#2d2a32" />
    </svg>
  )
}

export function Logo({
  variant = 'default',
  linked = true,
  compact = false,
  className = '',
}: LogoProps) {
  const isLight = variant === 'light'

  const content = (
    <div className={`flex min-w-0 items-center gap-2 ${compact ? 'gap-1.5' : 'gap-2.5'} ${className}`}>
      <LogoMark className={`shrink-0 ${compact ? 'h-8 w-8 sm:h-10 sm:w-10' : 'h-9 w-9 sm:h-10 sm:w-10'}`} />
      <div className="min-w-0 leading-tight">
        <span
          className={`block truncate font-heading font-bold tracking-tight text-brand ${
            compact ? 'text-base sm:text-2xl' : 'text-xl sm:text-2xl'
          }`}
        >
          {siteConfig.namePrimary}
        </span>
        <span
          className={`block truncate font-semibold tracking-[0.15em] ${
            compact ? 'text-[8px] sm:text-xs sm:tracking-[0.2em]' : 'text-[10px] sm:text-xs sm:tracking-[0.2em]'
          } ${isLight ? 'text-white/80' : 'text-charcoal'}`}
        >
          {siteConfig.nameSecondary}
        </span>
      </div>
    </div>
  )

  if (!linked) return content

  return (
    <Link to="/" className="min-w-0 transition-opacity hover:opacity-90" aria-label={siteConfig.name}>
      {content}
    </Link>
  )
}
