import { offerConfig, type HeadlineVariant, type OfferVariant } from '@/config/offerConfig'

const HEADLINE_KEY = 'av_headline_variant'
const VARIANTS: HeadlineVariant[] = ['A', 'B', 'C']

export function getHeadlineVariant(): HeadlineVariant {
  if (typeof window === 'undefined') return 'A'
  const force = offerConfig.FORCE_HEADLINE_VARIANT
  if (force && VARIANTS.includes(force)) {
    localStorage.setItem(HEADLINE_KEY, force)
    return force
  }
  const stored = localStorage.getItem(HEADLINE_KEY) as HeadlineVariant | null
  if (stored && VARIANTS.includes(stored)) return stored
  localStorage.setItem(HEADLINE_KEY, 'A')
  return 'A'
}

export function getHeadlineCopy(variant: HeadlineVariant) {
  return offerConfig.HEADLINE_VARIANTS[variant]
}

export function applyUrlOverrides(): {
  headline: HeadlineVariant
  pageVariant: OfferVariant
} {
  if (typeof window === 'undefined') {
    return { headline: 'A', pageVariant: offerConfig.OFFER_VARIANT }
  }
  const params = new URLSearchParams(window.location.search)
  const headlineParam = params.get('headline')?.toUpperCase() as
    | HeadlineVariant
    | undefined
  if (headlineParam && VARIANTS.includes(headlineParam)) {
    localStorage.setItem(HEADLINE_KEY, headlineParam)
  }
  return { headline: getHeadlineVariant(), pageVariant: offerConfig.OFFER_VARIANT }
}
