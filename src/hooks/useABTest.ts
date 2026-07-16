import { useMemo, useState, useEffect } from 'react'
import {
  applyUrlOverrides,
  getHeadlineCopy,
} from '@/lib/abTest'
import type { HeadlineVariant, OfferVariant } from '@/config/offerConfig'
import { trackEvent } from '@/lib/tracking'

export function useABTest() {
  const [headlineVariant, setHeadlineVariant] = useState<HeadlineVariant>('A')
  const [pageVariant, setPageVariant] = useState<OfferVariant>('two_plans')
  const [planOrder, setPlanOrder] = useState<'essential_first' | 'premium_first'>(
    'essential_first',
  )
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const result = applyUrlOverrides()
    setHeadlineVariant(result.headline)
    setPageVariant(result.pageVariant)
    setPlanOrder(result.planOrder)
    setReady(true)

    trackEvent('PageViewed', {
      headline_variant: result.headline,
      page_variant: result.pageVariant,
      plan_order: result.planOrder,
    })
  }, [])

  const headline = useMemo(
    () => getHeadlineCopy(headlineVariant),
    [headlineVariant],
  )

  return {
    ready,
    headlineVariant,
    pageVariant,
    planOrder,
    headline,
  }
}
