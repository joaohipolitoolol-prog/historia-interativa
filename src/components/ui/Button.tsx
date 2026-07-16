import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
} from 'react'
import {
  buildCheckoutUrl,
  isCheckoutConfigured,
  scrollToPlans,
  type CtaPosition,
} from '@/lib/checkout'
import type { PlanId } from '@/config/offerConfig'
import { trackEvent, type TrackEventName } from '@/lib/tracking'

type SharedProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  fullWidth?: boolean
}

type CheckoutButtonProps = SharedProps & {
  mode?: 'checkout'
  plan: PlanId
  position: CtaPosition
  trackAs?: TrackEventName
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'href'>

type ScrollButtonProps = SharedProps & {
  mode: 'scroll-to-plans'
  trackAs?: TrackEventName
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

type ButtonProps = CheckoutButtonProps | ScrollButtonProps

const variants = {
  primary:
    'bg-orange text-white shadow-[var(--shadow-cta)] hover:bg-orange-light active:translate-y-px',
  secondary: 'bg-navy text-white hover:bg-[#243049] active:translate-y-px',
  ghost: 'bg-transparent text-navy border border-border hover:bg-white',
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    className = '',
    fullWidth = false,
  } = props

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

  if (props.mode === 'scroll-to-plans') {
    const { trackAs = 'StickyPlanSelectorClicked', onClick, ...rest } = props
    return (
      <button
        type="button"
        className={classes}
        onClick={(e) => {
          trackEvent(trackAs, { action: 'scroll_to_plans' })
          scrollToPlans()
          onClick?.(e)
        }}
        {...rest}
      >
        {children}
      </button>
    )
  }

  const { plan, position, trackAs, onClick, ...rest } = props

  const href = buildCheckoutUrl(plan, position)
  const configured = isCheckoutConfigured(plan)
  const eventName: TrackEventName =
    trackAs ||
    (plan === 'essential'
      ? 'EssentialCheckoutClicked'
      : 'PremiumCheckoutClicked')

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    trackEvent(eventName, {
      selected_plan: plan,
      cta_position: position,
    })
    trackEvent('CheckoutClicked', {
      selected_plan: plan,
      cta_position: position,
    })

    if (!configured) {
      e.preventDefault()
      if (import.meta.env.DEV) {
        alert(
          `Checkout do plano ${plan === 'essential' ? 'Essencial' : 'Premium'} ainda não está configurado.\n\nAbra src/config/offerConfig.ts e cole ESSENTIAL_CHECKOUT_URL ou PREMIUM_CHECKOUT_URL.`,
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
