import { offerConfig, type PlanId } from '@/config/offerConfig'

export type CtaPosition =
  | 'hero'
  | 'pricing_essential'
  | 'pricing_premium'
  | 'sticky'
  | 'final'

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
  'gclid',
] as const

function getCurrentSearchParams(): URLSearchParams {
  if (typeof window === 'undefined') return new URLSearchParams()
  return new URLSearchParams(window.location.search)
}

function getCheckoutBase(plan: PlanId): string {
  return plan === 'essential'
    ? offerConfig.ESSENTIAL_CHECKOUT_URL
    : offerConfig.PREMIUM_CHECKOUT_URL
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
      if (value && !url.searchParams.has(key)) url.searchParams.set(key, value)
    }
    url.searchParams.set('selected_plan', plan)
    url.searchParams.set('cta_position', position)
    return url.toString()
  } catch {
    const current = getCurrentSearchParams()
    const params = new URLSearchParams()
    for (const key of UTM_KEYS) {
      const value = current.get(key)
      if (value) params.set(key, value)
    }
    params.set('selected_plan', plan)
    params.set('cta_position', position)
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
  if (!isCheckoutConfigured(plan)) {
    if (import.meta.env.DEV) {
      console.warn(
        `[checkout] Configure ${plan === 'essential' ? 'ESSENTIAL' : 'PREMIUM'}_CHECKOUT_URL em offerConfig.ts`,
      )
    }
    return
  }
  window.location.href = buildCheckoutUrl(plan, position)
}

export function buildWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(
    (message || offerConfig.WHATSAPP_MESSAGE).trim(),
  )
  return `https://wa.me/${offerConfig.WHATSAPP_NUMBER}?text=${text}`
}
