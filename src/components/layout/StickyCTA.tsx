import { useEffect, useRef, useState } from 'react'
import { offerConfig } from '@/config/offerConfig'
import { Button } from '@/components/ui/Button'
import { trackEvent } from '@/lib/tracking'

export function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const trackedRef = useRef(false)

  useEffect(() => {
    if (!offerConfig.SHOW_STICKY_CTA) return undefined

    const update = () => {
      const hero = document.getElementById('hero')
      const pastHero = hero
        ? hero.getBoundingClientRect().bottom < 8
        : window.scrollY > 480

      setVisible(pastHero)

      if (pastHero && !trackedRef.current) {
        trackedRef.current = true
        trackEvent('StickyCTAViewed', {}, { once: true })
      }
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  if (!offerConfig.SHOW_STICKY_CTA || dismissed || !visible) {
    return null
  }

  return (
    <div
      data-sticky-cta="true"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white/95 backdrop-blur-md shadow-[0_-8px_30px_rgba(32,26,23,0.08)]"
    >
      <div className="container-page flex items-center gap-3 py-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold text-navy">
            A partir de {offerConfig.ENTRY_PRICE}
          </p>
          <p className="truncate text-[12px] text-muted">
            Essencial ou Premium
          </p>
        </div>

        <Button
          mode="scroll-to-plans"
          className="shrink-0 !px-4 !py-3 text-[14px]"
        >
          ESCOLHER MEU PLANO
        </Button>

        <button
          type="button"
          aria-label="Fechar barra de compra"
          onClick={() => setDismissed(true)}
          className="shrink-0 rounded-lg p-2 text-muted hover:bg-warm hover:text-navy"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            ×
          </span>
        </button>
      </div>
    </div>
  )
}
