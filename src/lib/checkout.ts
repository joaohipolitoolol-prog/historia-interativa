import { offerConfig } from '@/config/offerConfig'

export type CtaPosition =
  | 'hero'
  | 'after_mechanism'
  | 'after_previews'
  | 'offer'
  | 'sticky'
  | 'final'
  | 'after_included'
  | 'plan'

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

/**
 * Monta a URL de checkout preservando UTMs e adicionando metadados de conversão.
 */
export function buildCheckoutUrl(
  position: CtaPosition,
  overrideUrl?: string,
): string {
  const base = overrideUrl || offerConfig.CHECKOUT_URL

  if (!base) {
    if (import.meta.env.DEV) {
      console.warn(
        `[checkout] CHECKOUT_URL não configurado. Posição do CTA: ${position}`,
      )
    }
    return '#checkout-nao-configurado'
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
      current.get('page_variant') ||
      offerConfig.OFFER_VARIANT ||
      'single_offer'

    url.searchParams.set('page_variant', pageVariant)
    url.searchParams.set('cta_position', position)
    url.searchParams.set('device_type', getDeviceType())

    return url.toString()
  } catch {
    // URL relativa ou malformada: anexar query string manualmente
    const current = getCurrentSearchParams()
    const params = new URLSearchParams()

    for (const key of UTM_KEYS) {
      const value = current.get(key)
      if (value) params.set(key, value)
    }

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

export function isCheckoutConfigured(overrideUrl?: string): boolean {
  return Boolean(overrideUrl || offerConfig.CHECKOUT_URL)
}
