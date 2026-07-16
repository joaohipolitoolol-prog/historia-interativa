import { useEffect } from 'react'
import { useABTest } from '@/hooks/useABTest'
import { initAnalytics, trackEvent } from '@/lib/tracking'

import { OfferBar } from '@/components/layout/OfferBar'
import { Footer } from '@/components/layout/Footer'
import { StickyCTA } from '@/components/layout/StickyCTA'

import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Mechanism } from '@/components/sections/Mechanism'
import { ProductDemo } from '@/components/sections/ProductDemo'
import { WhatsIncluded } from '@/components/sections/WhatsIncluded'
import { PremiumExtras } from '@/components/sections/PremiumExtras'
import { PlanComparison } from '@/components/sections/PlanComparison'
import { Pricing } from '@/components/sections/Pricing'
import { Guarantee } from '@/components/sections/Guarantee'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Author } from '@/components/sections/Author'

export function LandingPage() {
  const { ready, headline, planOrder } = useABTest()

  useEffect(() => {
    initAnalytics()

    let reached75 = false
    let completed = false

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      const progress = scrollTop / docHeight

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
      <div className="min-h-screen bg-warm" aria-busy="true">
        <OfferBar />
        <div className="container-page py-20">
          <div className="h-8 w-48 animate-pulse rounded bg-border" />
          <div className="mt-4 h-12 w-full max-w-xl animate-pulse rounded bg-border" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-warm pb-24">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-navy"
      >
        Ir para o conteúdo
      </a>

      <OfferBar />

      <main>
        <Hero headline={headline} />
        <Problem />
        <Mechanism />
        <ProductDemo />
        <WhatsIncluded />
        <PremiumExtras />
        <PlanComparison />
        <Pricing planOrder={planOrder} />
        <Guarantee />
        <Author />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  )
}
