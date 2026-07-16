import { offerConfig, type PlanId } from '@/config/offerConfig'

export type CtaPosition =
  | 'hero'
  | 'after_mechanism'
  | 'after_previews'
  | 'after_included'
  | 'pricing_essential'
  | 'pricing_premium'
  | 'sticky'
  | 'sticky_essential'
  | 'sticky_premium'
  | 'final'
  | 'final_essential'
  | 'final_premium'
  | 'plan_comparison'

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

function getCheckoutBase(plan?: PlanId): string {
  if (plan === 'essential') return offerConfig.ESSENTIAL_CHECKOUT_URL
  if (plan === 'premium') return offerConfig.PREMIUM_CHECKOUT_URL
  return ''
}

/**
 * Monta a URL de checkout do plano escolhido, preservando UTMs.
 */
export function buildCheckoutUrl(
  plan: PlanId,
  position: CtaPosition,
): string {
  const base = getCheckoutBase(plan)

  if (!base) {
    if (import.meta.env.DEV) {
      console.warn(
        `[checkout] Checkout do plano "${plan}" não configurado. Posição: ${position}`,
      )
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

    const pageVariant =
      current.get('page_variant') || offerConfig.OFFER_VARIANT

    url.searchParams.set('selected_plan', plan)
    url.searchParams.set('page_variant', pageVariant)
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
  const el = document.getElementById('planos')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
