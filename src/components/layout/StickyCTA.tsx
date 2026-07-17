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
    return () => window.removeEventListener('scroll', update)
  }, [])

  if (!offerConfig.SHOW_STICKY_CTA || dismissed || !visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 backdrop-blur-md shadow-[0_-8px_30px_rgba(23,32,51,0.08)]">
      <div className="container-page flex items-center gap-2 py-2.5 sm:gap-3 sm:py-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[14px] font-semibold text-navy">
            A partir de {offerConfig.ENTRY_PRICE}
          </p>
          <p className="truncate text-[12px] text-muted sm:text-[13px]">
            Essencial ou Premium
          </p>
        </div>
        <Button
          mode="scroll-to-plans"
          trackAs="StickyPlanSelectorClicked"
          className="shrink-0 !px-3.5 !py-2.5 text-[13px] sm:!px-4 sm:!py-3 sm:text-[14px]"
        >
          ESCOLHER
        </Button>
        <button
          type="button"
          aria-label="Fechar"
          onClick={() => setDismissed(true)}
          className="shrink-0 rounded-lg p-2 text-muted hover:bg-cream text-[18px] leading-none"
        >
          ×
        </button>
      </div>
    </div>
  )
}
