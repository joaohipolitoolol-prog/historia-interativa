import { offerConfig } from '@/config/offerConfig'

export type TrackEventName =
  | 'PageViewed'
  | 'HeroViewed'
  | 'PrimaryCTAViewed'
  | 'PrimaryCTAClicked'
  | 'MechanismViewed'
  | 'ProductPreviewViewed'
  | 'BonusViewed'
  | 'OfferViewed'
  | 'CheckoutClicked'
  | 'FAQOpened'
  | 'GuaranteeViewed'
  | 'StickyCTAViewed'
  | 'StickyCTAClicked'
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

/**
 * Carrega Meta Pixel e GA de forma não bloqueante.
 * Não quebra a página se os IDs estiverem vazios.
 */
export function initAnalytics(): void {
  if (analyticsInitialized || typeof window === 'undefined') return
  analyticsInitialized = true

  const { META_PIXEL_ID, GA_MEASUREMENT_ID } = offerConfig

  if (META_PIXEL_ID) {
    loadMetaPixel(META_PIXEL_ID)
  }

  if (GA_MEASUREMENT_ID) {
    loadGoogleAnalytics(GA_MEASUREMENT_ID)
  }
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
    if (fn.callMethod) {
      fn.callMethod(...args)
    } else {
      fn.queue.push(args)
    }
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

/**
 * Dispara eventos personalizados para Meta, GA e console (dev).
 * Nunca dispara Purchase na landing page.
 */
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
    page_variant: offerConfig.OFFER_VARIANT,
  }

  if (import.meta.env.DEV) {
    console.info(`[track] ${eventName}`, payload)
  }

  try {
    if (window.fbq && offerConfig.META_PIXEL_ID) {
      window.fbq('trackCustom', eventName, payload)
    }
  } catch {
    // silencioso
  }

  try {
    if (window.gtag && offerConfig.GA_MEASUREMENT_ID) {
      window.gtag('event', eventName, payload)
    }
  } catch {
    // silencioso
  }
}
