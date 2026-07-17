import { offerConfig } from '@/config/offerConfig'

export type TrackEventName =
  | 'PageViewed'
  | 'HeroViewed'
  | 'HeroCTASelected'
  | 'PrimaryCTAViewed'
  | 'PrimaryCTAClicked'
  | 'MechanismViewed'
  | 'ProductPreviewViewed'
  | 'PremiumBonusesViewed'
  | 'PlansViewed'
  | 'EssentialSelected'
  | 'PlusModalViewed'
  | 'PlusAccepted'
  | 'PlusDeclined'
  | 'PremiumSelected'
  | 'CheckoutClicked'
  | 'EssentialCheckoutClicked'
  | 'PremiumCheckoutClicked'
  | 'FAQOpened'
  | 'GuaranteeViewed'
  | 'StickyCTAViewed'
  | 'StickyPlanSelectorClicked'
  | 'SupportClicked'
  | 'Page75Viewed'
  | 'PageCompleted'

type TrackProperties = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

let analyticsInitialized = false
const firedOnce = new Set<string>()

export function initAnalytics(): void {
  if (analyticsInitialized || typeof window === 'undefined') return
  analyticsInitialized = true

  if (offerConfig.META_PIXEL_ID) loadMetaPixel(offerConfig.META_PIXEL_ID)
  if (offerConfig.GA_MEASUREMENT_ID)
    loadGoogleAnalytics(offerConfig.GA_MEASUREMENT_ID)
}

function loadMetaPixel(pixelId: string): void {
  if (window.fbq) return
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)

  type FbqStub = ((...args: unknown[]) => void) & {
    queue: unknown[]
    push: unknown[]
    loaded: boolean
    version: string
    callMethod?: (...args: unknown[]) => void
  }

  const stub = ((...args: unknown[]) => {
    const fn = stub as FbqStub
    if (fn.callMethod) fn.callMethod(...args)
    else fn.queue.push(args)
  }) as FbqStub

  stub.queue = []
  stub.push = stub.queue
  stub.loaded = true
  stub.version = '2.0'
  window.fbq = stub
  window.fbq('init', pixelId)
  window.fbq('track', 'PageView')
}

function loadGoogleAnalytics(measurementId: string): void {
  if (document.getElementById('ga-script')) return
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', measurementId, { send_page_view: true })
  const script = document.createElement('script')
  script.id = 'ga-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)
}

export function trackEvent(
  eventName: TrackEventName,
  properties: TrackProperties = {},
  options: { once?: boolean; onceKey?: string } = {},
): void {
  if (options.once) {
    const key = options.onceKey || eventName
    if (firedOnce.has(key)) return
    firedOnce.add(key)
  }

  const payload = {
    ...properties,
    product: offerConfig.PRODUCT_NAME,
    brand: offerConfig.BRAND_NAME,
    page_variant: offerConfig.OFFER_VARIANT,
    timestamp: Date.now(),
  }

  if (import.meta.env.DEV) console.info(`[track] ${eventName}`, payload)

  try {
    if (window.fbq && offerConfig.META_PIXEL_ID) {
      window.fbq('trackCustom', eventName, payload)
    }
  } catch {
    /* silent */
  }

  try {
    if (window.gtag && offerConfig.GA_MEASUREMENT_ID) {
      window.gtag('event', eventName, payload)
    }
  } catch {
    /* silent */
  }
}
