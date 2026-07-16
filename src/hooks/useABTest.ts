import { useMemo, useState, useEffect } from 'react'
import {
  applyUrlOverrides,
  getCtaLabel,
  getHeadlineCopy,
} from '@/lib/abTest'
import type { CtaVariant, HeadlineVariant } from '@/config/offerConfig'
import { trackEvent } from '@/lib/tracking'

export function useABTest() {
  const [headlineVariant, setHeadlineVariant] = useState<HeadlineVariant>('A')
  const [ctaVariant, setCtaVariant] = useState<CtaVariant>('A')
  const [pageVariant, setPageVariant] = useState('single_offer')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const result = applyUrlOverrides()
    setHeadlineVariant(result.headline)
    setCtaVariant(result.cta)
    setPageVariant(result.pageVariant)
    setReady(true)

    trackEvent('PageViewed', {
      headline_variant: result.headline,
      cta_variant: result.cta,
      page_variant: result.pageVariant,
    })
  }, [])

  const headline = useMemo(
    () => getHeadlineCopy(headlineVariant),
    [headlineVariant],
  )
  const ctaLabel = useMemo(() => getCtaLabel(ctaVariant), [ctaVariant])

  return {
    ready,
    headlineVariant,
    ctaVariant,
    pageVariant,
    headline,
    ctaLabel,
  }
}
