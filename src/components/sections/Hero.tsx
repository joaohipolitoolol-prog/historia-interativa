import { useEffect, useRef, type ImgHTMLAttributes } from 'react'
import { offerConfig } from '@/config/offerConfig'
import { Button } from '@/components/ui/Button'
import { trackEvent } from '@/lib/tracking'

type HeroProps = {
  headline: {
    before: string
    highlight: string
    after: string
  }
}

const benefits = [
  `${offerConfig.NUMBER_OF_ACTIVITIES} atividades`,
  'Materiais prontos para imprimir',
  'Recursos para projetar',
  'Acesso pelo celular ou computador',
]

export function Hero({ headline }: HeroProps) {
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    trackEvent('HeroViewed', {}, { once: true })

    const el = ctaRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent('PrimaryCTAViewed', { cta_position: 'hero' }, { once: true })
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" className="relative overflow-hidden bg-warm">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 0%, rgba(255,90,31,0.12), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(255,200,61,0.18), transparent 50%)',
        }}
      />

      <div className="container-page relative py-8 sm:py-12 md:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="fade-up order-1">
            <p className="inline-flex items-center rounded-full border border-orange/25 bg-white px-3.5 py-1.5 text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.1em] text-orange">
              SISTEMA AULA PRONTA • {offerConfig.BNCC_CLAIM.toUpperCase()}
            </p>

            <h1 className="mt-4 sm:mt-5 text-[34px] leading-[1.12] sm:text-[44px] md:text-[52px] font-extrabold text-navy text-balance">
              {headline.before}
              {headline.highlight ? (
                <span className="relative inline-block text-orange">
                  {headline.highlight}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-yellow/70 -z-10"
                  />
                </span>
              ) : null}
              {headline.after}
            </h1>

            <p className="mt-4 sm:mt-5 max-w-xl text-[16px] sm:text-[18px] leading-relaxed text-muted">
              Tenha acesso a {offerConfig.NUMBER_OF_ACTIVITIES} atividades
              organizadas e prontas para imprimir ou projetar. Escolha o tema,
              abra o material e aplique com sua turma.
            </p>

            <div className="mt-5 inline-flex flex-col rounded-2xl border border-border bg-white px-5 py-4 shadow-[var(--shadow-soft)]">
              <p className="text-[13px] font-semibold text-muted">
                Plano Essencial a partir de
              </p>
              <p className="text-[40px] sm:text-[44px] font-extrabold leading-none text-navy font-[family-name:var(--font-display)]">
                {offerConfig.ENTRY_PRICE_FULL}
              </p>
              <p className="mt-1 text-[14px] text-muted">Pagamento único.</p>
            </div>

            <div className="mt-6 lg:hidden">
              <HeroProductImage priority />
            </div>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[15px] sm:text-[16px] text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green text-white text-[12px] font-bold"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div ref={ctaRef} className="mt-7 sm:mt-8">
              <Button mode="scroll-to-plans" className="w-full sm:w-auto min-w-[280px]">
                QUERO ACESSAR A PARTIR DE {offerConfig.ENTRY_PRICE}
              </Button>
              <p className="mt-3 text-[14px] sm:text-[15px] text-muted">
                Escolha entre o Plano Essencial e o Premium • Garantia de{' '}
                {offerConfig.GUARANTEE_DAYS} dias
              </p>
            </div>
          </div>

          <div className="relative order-2 hidden lg:block">
            <HeroProductImage />
            <p className="mt-4 text-center text-[15px] font-medium text-muted">
              Mais de {offerConfig.NUMBER_OF_ACTIVITIES} materiais no Plano
              Essencial.
            </p>
          </div>
        </div>

        <p className="mt-4 text-center text-[14px] font-medium text-muted lg:hidden">
          Mais de {offerConfig.NUMBER_OF_ACTIVITIES} materiais no Plano
          Essencial.
        </p>
      </div>
    </section>
  )
}

function HeroProductImage({ priority = false }: { priority?: boolean }) {
  return (
    <div className="relative mx-auto max-w-lg lg:max-w-none">
      <div className="overflow-hidden rounded-[24px] sm:rounded-[28px] border border-border bg-white shadow-[var(--shadow-soft)]">
        <img
          src={offerConfig.PRODUCT_IMAGE}
          alt={`${offerConfig.PRODUCT_NAME}: materiais impressos, mapas, linhas do tempo e acesso pelo celular`}
          width={1200}
          height={800}
          decoding="async"
          {...(priority
            ? ({ fetchPriority: 'high' } as ImgHTMLAttributes<HTMLImageElement>)
            : { loading: 'lazy' as const })}
          className="aspect-[3/2] w-full object-cover"
        />
      </div>

      <div className="absolute -bottom-3 left-3 right-3 sm:left-auto sm:-right-2 sm:bottom-4 sm:max-w-[200px] rounded-2xl border border-border bg-white p-3 shadow-[var(--shadow-soft)]">
        <p className="text-[11px] font-bold uppercase tracking-wide text-orange">
          {offerConfig.PRODUCT_MECHANISM}
        </p>
        <p className="mt-1 text-[13px] font-semibold text-navy leading-snug">
          Escolha o tema → imprima ou projete → aplique
        </p>
      </div>
    </div>
  )
}
