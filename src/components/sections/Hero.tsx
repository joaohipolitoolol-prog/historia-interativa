import { useEffect, useRef, type ImgHTMLAttributes } from 'react'
import { offerConfig } from '@/config/offerConfig'
import { Button } from '@/components/ui/Button'
import { trackEvent } from '@/lib/tracking'

type HeroProps = {
  headline: { before: string; highlight: string; after: string }
}

const benefits = [
  `${offerConfig.NUMBER_OF_ACTIVITIES} atividades`,
  'Fundamental e Médio',
  'PDFs prontos para uso',
  'Acesso imediato',
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
    <section id="hero" className="relative overflow-hidden bg-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 50% -10%, rgba(255,90,31,0.16), transparent 55%)',
        }}
      />

      <div className="container-page relative py-10 sm:py-12 md:py-14">
        <div className="mx-auto max-w-3xl text-center fade-up">
          <img
            src={offerConfig.LOGO_HORIZONTAL}
            alt={offerConfig.PRODUCT_NAME}
            width={220}
            height={44}
            className="mx-auto h-10 w-auto sm:h-11"
          />

          <p className="mt-5 inline-flex items-center rounded-full border border-orange/20 bg-white px-3.5 py-1.5 text-[12px] sm:text-[13px] font-bold text-orange">
            {offerConfig.PRODUCT_MECHANISM} • {offerConfig.BNCC_CLAIM}
          </p>

          <h1 className="mt-5 text-[34px] leading-[1.08] sm:text-[44px] md:text-[52px] font-extrabold text-navy text-balance">
            {headline.before}
            {headline.highlight ? (
              <span className="relative inline-block text-orange">
                {headline.highlight}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-2.5 w-full rounded-full bg-yellow/75 -z-10"
                />
              </span>
            ) : null}
            {headline.after}
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-[16px] sm:text-[18px] leading-relaxed text-muted">
            Tenha acesso a {offerConfig.NUMBER_OF_ACTIVITIES} atividades prontas
            para imprimir ou projetar. Escolha o tema, abra o material e aplique
            com sua turma.
          </p>

          <div className="mx-auto mt-5 inline-flex flex-col items-center rounded-2xl border border-border bg-white px-6 py-4 shadow-[var(--shadow-soft)]">
            <p className="text-[13px] font-semibold text-muted">A partir de</p>
            <p className="text-[44px] font-extrabold leading-none text-navy font-[family-name:var(--font-display)]">
              {offerConfig.ENTRY_PRICE_FULL}
            </p>
            <p className="mt-1 text-[14px] text-muted">Pagamento único</p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <div className="overflow-hidden rounded-[24px] border border-border bg-white shadow-[var(--shadow-lift)]">
            <img
              src={offerConfig.PRODUCT_IMAGE}
              alt={`${offerConfig.PRODUCT_NAME}: acervo de atividades, mapas e biblioteca digital`}
              width={1400}
              height={788}
              decoding="async"
              {...({ fetchPriority: 'high' } as ImgHTMLAttributes<HTMLImageElement>)}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>

        <ul className="mx-auto mt-7 grid max-w-2xl gap-2 sm:grid-cols-2">
          {benefits.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-3 text-[15px] font-medium text-ink"
            >
              <span
                aria-hidden="true"
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green text-white text-[11px] font-bold"
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div ref={ctaRef} className="mt-7 text-center">
          <Button mode="scroll-to-plans" className="w-full sm:w-auto min-w-[280px]">
            QUERO ESCOLHER MEU ACESSO
          </Button>
          <p className="mt-3 text-[14px] text-muted">
            Escolha entre Essencial e Premium • Garantia de{' '}
            {offerConfig.GUARANTEE_DAYS} dias
          </p>
        </div>
      </div>
    </section>
  )
}
