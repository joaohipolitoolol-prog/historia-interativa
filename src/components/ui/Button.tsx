import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'
import {
  buildCheckoutUrl,
  isCheckoutConfigured,
  type CtaPosition,
} from '@/lib/checkout'
import { trackEvent } from '@/lib/tracking'

type ButtonProps = {
  children: ReactNode
  position: CtaPosition
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  fullWidth?: boolean
  checkoutUrl?: string
  trackAs?: 'PrimaryCTAClicked' | 'CheckoutClicked' | 'StickyCTAClicked'
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'href'>

const variants = {
  primary:
    'bg-orange text-white shadow-[var(--shadow-cta)] hover:bg-orange-light active:translate-y-px',
  secondary: 'bg-navy text-white hover:bg-[#243049] active:translate-y-px',
  ghost: 'bg-transparent text-navy border border-border hover:bg-white',
}

export function Button({
  children,
  position,
  variant = 'primary',
  className = '',
  fullWidth = false,
  checkoutUrl,
  trackAs = 'CheckoutClicked',
  onClick,
  ...rest
}: ButtonProps) {
  const href = buildCheckoutUrl(position, checkoutUrl)
  const configured = isCheckoutConfigured(checkoutUrl)

  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[16px] sm:text-[17px] font-bold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-orange disabled:opacity-60'

  const classes = [
    base,
    variants[variant],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    trackEvent(trackAs, { cta_position: position })
    trackEvent('PrimaryCTAClicked', { cta_position: position })

    if (!configured) {
      e.preventDefault()
      if (import.meta.env.DEV) {
        alert(
          'CHECKOUT_URL ainda não está configurado.\n\nAbra src/config/offerConfig.ts e cole o link do checkout.',
        )
      }
    }

    onClick?.(e)
  }

  return (
    <a
      href={href}
      className={classes}
      onClick={handleClick}
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  )
}
