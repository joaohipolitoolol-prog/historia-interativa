import { useEffect, useState } from 'react'
import { useABTest } from '@/hooks/useABTest'
import { initAnalytics, trackEvent } from '@/lib/tracking'

import { OfferBar } from '@/components/layout/OfferBar'
import { Footer } from '@/components/layout/Footer'
import { StickyCTA } from '@/components/layout/StickyCTA'
import { PlusModal } from '@/components/ui/PlusModal'

import { Hero } from '@/components/sections/Hero'
import { ProblemMechanism } from '@/components/sections/ProblemMechanism'
import { ProductDemo } from '@/components/sections/ProductDemo'
import { WhatsIncluded } from '@/components/sections/WhatsIncluded'
import { PremiumExtras } from '@/components/sections/PremiumExtras'
import { Pricing } from '@/components/sections/Pricing'
import { Guarantee } from '@/components/sections/Guarantee'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'

export function LandingPage() {
  const { ready, headline } = useABTest()
  const [plusOpen, setPlusOpen] = useState(false)

  useEffect(() => {
    initAnalytics()
    let reached75 = false
    let completed = false

    const onScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      const progress = window.scrollY / docHeight
      if (progress >= 0.75 && !reached75) {
        reached75 = true
        trackEvent('Page75Viewed', {}, { once: true })
      }
      if (progress >= 0.95 && !completed) {
        completed = true
        trackEvent('PageCompleted', {}, { once: true })
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!ready) {
    return (
      <div className="min-h-screen bg-cream" aria-busy="true">
        <OfferBar />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream pb-24">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-bold"
      >
        Ir para o conteúdo
      </a>

      <OfferBar />

      <main>
        <Hero headline={headline} />
        <ProblemMechanism />
        <ProductDemo />
        <WhatsIncluded />
        <PremiumExtras />
        <Pricing onEssentialClick={() => setPlusOpen(true)} />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <StickyCTA />
      <PlusModal open={plusOpen} onClose={() => setPlusOpen(false)} />
    </div>
  )
}
