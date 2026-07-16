import { offerConfig, type HeadlineVariant, type OfferVariant } from '@/config/offerConfig'

const HEADLINE_KEY = 'hi_headline_variant'
const PLAN_ORDER_KEY = 'hi_plan_order'
const VARIANTS: HeadlineVariant[] = ['A', 'B', 'C']
const OFFER_VARIANTS: OfferVariant[] = [
  'two_plans',
  'single_essential',
  'single_premium',
  'short_two_plans',
  'long_two_plans',
]

function pickRandomHeadline(): HeadlineVariant {
  return VARIANTS[Math.floor(Math.random() * VARIANTS.length)]
}

export function getHeadlineVariant(): HeadlineVariant {
  if (typeof window === 'undefined') return 'A'

  const force = offerConfig.FORCE_HEADLINE_VARIANT
  if (force && VARIANTS.includes(force)) {
    localStorage.setItem(HEADLINE_KEY, force)
    return force
  }

  const stored = localStorage.getItem(HEADLINE_KEY) as HeadlineVariant | null
  if (stored && VARIANTS.includes(stored)) return stored

  // Default estável: A (do zero). B/C só via URL ou force.
  localStorage.setItem(HEADLINE_KEY, 'A')
  return 'A'
}

export function getHeadlineCopy(variant: HeadlineVariant) {
  return offerConfig.HEADLINE_VARIANTS[variant]
}

export function getPlanOrder(): 'essential_first' | 'premium_first' {
  if (typeof window === 'undefined') return offerConfig.PLAN_ORDER

  const stored = localStorage.getItem(PLAN_ORDER_KEY) as
    | 'essential_first'
    | 'premium_first'
    | null
  if (stored === 'essential_first' || stored === 'premium_first') return stored

  localStorage.setItem(PLAN_ORDER_KEY, offerConfig.PLAN_ORDER)
  return offerConfig.PLAN_ORDER
}

export function applyUrlOverrides(): {
  headline: HeadlineVariant
  pageVariant: OfferVariant
  planOrder: 'essential_first' | 'premium_first'
} {
  if (typeof window === 'undefined') {
    return {
      headline: 'A',
      pageVariant: offerConfig.OFFER_VARIANT,
      planOrder: offerConfig.PLAN_ORDER,
    }
  }

  const params = new URLSearchParams(window.location.search)

  const headlineParam = params.get('headline')?.toUpperCase() as
    | HeadlineVariant
    | undefined
  if (headlineParam && VARIANTS.includes(headlineParam)) {
    localStorage.setItem(HEADLINE_KEY, headlineParam)
  }

  const orderParam = params.get('plan_order')
  if (orderParam === 'essential_first' || orderParam === 'premium_first') {
    localStorage.setItem(PLAN_ORDER_KEY, orderParam)
  }

  const pageParam = params.get('page_variant') as OfferVariant | null
  const pageVariant =
    pageParam && OFFER_VARIANTS.includes(pageParam)
      ? pageParam
      : offerConfig.OFFER_VARIANT

  return {
    headline: getHeadlineVariant(),
    pageVariant,
    planOrder: getPlanOrder(),
  }
}

// Mantido para evitar quebra se algum import antigo restar
export function getCtaLabel(): string {
  return `QUERO ACESSAR A PARTIR DE ${offerConfig.ENTRY_PRICE}`
}

void pickRandomHeadline
