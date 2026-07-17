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
      const faq = document.getElementById('faq')
      const pastHero = hero
        ? hero.getBoundingClientRect().bottom < 8
        : window.scrollY > 480
      const nearFaq = faq ? faq.getBoundingClientRect().top < window.innerHeight : false
      setVisible(pastHero && !nearFaq)
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
            {offerConfig.NUMBER_OF_ACTIVITIES} atividades a partir de{' '}
            {offerConfig.ENTRY_PRICE}
          </p>
        </div>
        <Button
          mode="scroll-to-plans"
          trackAs="StickyCTAClicked"
          className="shrink-0 !px-4 !py-2.5 text-[14px]"
        >
          VER PLANOS
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
