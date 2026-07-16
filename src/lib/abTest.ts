import { offerConfig, type CtaVariant, type HeadlineVariant } from '@/config/offerConfig'

const HEADLINE_KEY = 'hi_headline_variant'
const CTA_KEY = 'hi_cta_variant'
const VARIANTS: Array<'A' | 'B' | 'C'> = ['A', 'B', 'C']

function pickRandom(): 'A' | 'B' | 'C' {
  return VARIANTS[Math.floor(Math.random() * VARIANTS.length)]
}

function readOrAssign(
  storageKey: string,
  force: HeadlineVariant | CtaVariant | null,
): 'A' | 'B' | 'C' {
  if (typeof window === 'undefined') return 'A'

  if (force && VARIANTS.includes(force)) {
    localStorage.setItem(storageKey, force)
    return force
  }

  const stored = localStorage.getItem(storageKey) as 'A' | 'B' | 'C' | null
  if (stored && VARIANTS.includes(stored)) {
    return stored
  }

  const assigned = pickRandom()
  localStorage.setItem(storageKey, assigned)
  return assigned
}

export function getHeadlineVariant(): HeadlineVariant {
  return readOrAssign(HEADLINE_KEY, offerConfig.FORCE_HEADLINE_VARIANT)
}

export function getCtaVariant(): CtaVariant {
  return readOrAssign(CTA_KEY, offerConfig.FORCE_CTA_VARIANT)
}

export function getHeadlineCopy(variant: HeadlineVariant) {
  return offerConfig.HEADLINE_VARIANTS[variant]
}

export function getCtaLabel(variant: CtaVariant): string {
  return offerConfig.CTA_VARIANTS[variant]
}

/** Override via URL: ?headline=A&cta=B&page_variant=short_page */
export function applyUrlOverrides(): {
  headline: HeadlineVariant
  cta: CtaVariant
  pageVariant: string
} {
  if (typeof window === 'undefined') {
    return { headline: 'A', cta: 'A', pageVariant: offerConfig.OFFER_VARIANT }
  }

  const params = new URLSearchParams(window.location.search)

  const headlineParam = params.get('headline')?.toUpperCase() as HeadlineVariant | undefined
  const ctaParam = params.get('cta')?.toUpperCase() as CtaVariant | undefined

  if (headlineParam && VARIANTS.includes(headlineParam)) {
    localStorage.setItem(HEADLINE_KEY, headlineParam)
  }
  if (ctaParam && VARIANTS.includes(ctaParam)) {
    localStorage.setItem(CTA_KEY, ctaParam)
  }

  const pageParam = params.get('page_variant')
  const allowedPages = ['single_offer', 'two_plans', 'short_page', 'long_page']
  const pageVariant =
    pageParam && allowedPages.includes(pageParam)
      ? pageParam
      : offerConfig.OFFER_VARIANT

  return {
    headline: getHeadlineVariant(),
    cta: getCtaVariant(),
    pageVariant,
  }
}
