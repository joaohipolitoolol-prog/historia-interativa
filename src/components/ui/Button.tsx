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

type Shared = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  fullWidth?: boolean
}

type CheckoutProps = Shared & {
  mode?: 'checkout'
  plan: PlanId
  position: CtaPosition
  trackAs?: TrackEventName
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'href'>

type ScrollProps = Shared & {
  mode: 'scroll-to-plans'
  trackAs?: TrackEventName
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

type ActionProps = Shared & {
  mode: 'action'
  trackAs?: TrackEventName
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

type ButtonProps = CheckoutProps | ScrollProps | ActionProps

const variants = {
  primary:
    'bg-orange text-white shadow-[var(--shadow-cta)] hover:bg-orange-light active:translate-y-px',
  secondary: 'bg-navy text-white hover:bg-[#243049] active:translate-y-px',
  ghost: 'bg-transparent text-navy border border-border hover:bg-white',
}

function buildClassName(
  variant: 'primary' | 'secondary' | 'ghost',
  fullWidth: boolean,
  className: string,
) {
  return [
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[16px] sm:text-[17px] font-bold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-orange',
    variants[variant],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? 'primary'
  const fullWidth = props.fullWidth ?? false
  const className = props.className ?? ''
  const classes = buildClassName(variant, fullWidth, className)

  if (props.mode === 'scroll-to-plans') {
    const {
      children,
      trackAs = 'HeroCTASelected',
      onClick,
      mode: _mode,
      variant: _variant,
      className: _className,
      fullWidth: _fullWidth,
      ...rest
    } = props

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

  if (props.mode === 'action') {
    const {
      children,
      trackAs,
      onClick,
      mode: _mode,
      variant: _variant,
      className: _className,
      fullWidth: _fullWidth,
      ...rest
    } = props

    return (
      <button
        type="button"
        className={classes}
        onClick={(e) => {
          if (trackAs) trackEvent(trackAs)
          onClick?.(e)
        }}
        {...rest}
      >
        {children}
      </button>
    )
  }

  const {
    children,
    plan,
    position,
    trackAs,
    onClick,
    mode: _mode,
    variant: _variant,
    className: _className,
    fullWidth: _fullWidth,
    ...rest
  } = props

  const href = buildCheckoutUrl(plan, position)
  const configured = isCheckoutConfigured(plan)
  const eventName: TrackEventName =
    trackAs ||
    (plan === 'premium' ? 'PremiumSelected' : 'CheckoutClicked')

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    trackEvent(eventName, { selected_plan: plan, cta_position: position })
    trackEvent('CheckoutClicked', {
      selected_plan: plan,
      cta_position: position,
    })
    if (!configured) {
      e.preventDefault()
      if (import.meta.env.DEV) {
        alert(`Checkout ${plan} não configurado em offerConfig.ts`)
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
