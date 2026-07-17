import { offerConfig, type PlanId } from '@/config/offerConfig'

export type CtaPosition =
  | 'hero'
  | 'pricing_essential'
  | 'pricing_premium'
  | 'plus_modal_accept'
  | 'plus_modal_decline'
  | 'sticky'
  | 'final'
  | 'after_preview'
  | 'after_essential'

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
  'gclid',
] as const

function getDeviceType(): string {
  if (typeof window === 'undefined') return 'unknown'
  const w = window.innerWidth
  if (w < 768) return 'mobile'
  if (w < 1024) return 'tablet'
  return 'desktop'
}

function getCurrentSearchParams(): URLSearchParams {
  if (typeof window === 'undefined') return new URLSearchParams()
  return new URLSearchParams(window.location.search)
}

function getCheckoutBase(plan: PlanId): string {
  if (plan === 'essential') return offerConfig.ESSENTIAL_CHECKOUT_URL
  if (plan === 'plus') return offerConfig.PLUS_CHECKOUT_URL
  return offerConfig.PREMIUM_CHECKOUT_URL
}

export function buildCheckoutUrl(plan: PlanId, position: CtaPosition): string {
  const base = getCheckoutBase(plan)

  if (!base) {
    if (import.meta.env.DEV) {
      console.warn(`[checkout] Checkout "${plan}" não configurado (${position})`)
    }
    return `#checkout-${plan}-nao-configurado`
  }

  try {
    const url = new URL(base)
    const current = getCurrentSearchParams()

    for (const key of UTM_KEYS) {
      const value = current.get(key)
      if (value && !url.searchParams.has(key)) {
        url.searchParams.set(key, value)
      }
    }

    url.searchParams.set('selected_plan', plan)
    url.searchParams.set(
      'page_variant',
      current.get('page_variant') || offerConfig.OFFER_VARIANT,
    )
    url.searchParams.set('cta_position', position)
    url.searchParams.set('device_type', getDeviceType())

    return url.toString()
  } catch {
    const current = getCurrentSearchParams()
    const params = new URLSearchParams()
    for (const key of UTM_KEYS) {
      const value = current.get(key)
      if (value) params.set(key, value)
    }
    params.set('selected_plan', plan)
    params.set(
      'page_variant',
      current.get('page_variant') || offerConfig.OFFER_VARIANT,
    )
    params.set('cta_position', position)
    params.set('device_type', getDeviceType())
    const separator = base.includes('?') ? '&' : '?'
    return `${base}${separator}${params.toString()}`
  }
}

export function isCheckoutConfigured(plan: PlanId): boolean {
  return Boolean(getCheckoutBase(plan))
}

export function scrollToPlans(): void {
  document.getElementById('planos')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export function openCheckout(plan: PlanId, position: CtaPosition): void {
  const href = buildCheckoutUrl(plan, position)
  if (!isCheckoutConfigured(plan)) {
    if (import.meta.env.DEV) {
      alert(
        `Checkout do plano ${plan} ainda não configurado.\n\nConfigure em src/config/offerConfig.ts`,
      )
    }
    return
  }
  window.location.href = href
}
