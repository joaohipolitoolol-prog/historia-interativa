import { useEffect, useRef, type ImgHTMLAttributes } from 'react'
import { offerConfig } from '@/config/offerConfig'
import { BrandLogo } from '@/components/ui/BrandLogo'
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
    <section id="hero" className="relative overflow-x-clip bg-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(255,90,31,0.14), transparent 55%)',
        }}
      />

      <div className="container-page relative py-9 sm:py-12 md:py-14">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <BrandLogo className="h-10 w-auto sm:h-11" />

          <p className="mt-6 max-w-[95%] rounded-full border border-orange/25 bg-white px-3.5 py-1.5 text-[12px] sm:text-[13px] font-bold text-orange">
            {offerConfig.PRODUCT_MECHANISM} • {offerConfig.BNCC_CLAIM}
          </p>

          <h1 className="mt-6 w-full text-[28px] leading-[1.12] sm:text-[42px] md:text-[48px] font-extrabold text-navy text-balance">
            {headline.before}
            {headline.highlight ? (
              <span className="relative inline text-orange">
                {headline.highlight}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-0.5 left-0 h-2 w-full rounded-full bg-yellow/70 -z-10"
                />
              </span>
            ) : null}
            {headline.after}
          </h1>

          <p className="mt-5 w-full max-w-xl text-[16px] sm:text-[18px] font-semibold leading-relaxed text-navy">
            Receba mais de 500 atividades prontas para imprimir ou projetar por
            apenas {offerConfig.ENTRY_PRICE}.
          </p>
          <p className="mt-2 w-full max-w-lg text-[15px] sm:text-[16px] leading-relaxed text-muted">
            Escolha o tema, abra o material e aplique com sua turma.
          </p>

          <div className="mt-5 inline-flex flex-col items-center rounded-2xl border border-border bg-white px-5 py-3.5 shadow-[var(--shadow-soft)]">
            <p className="text-[13px] font-semibold text-muted">A partir de</p>
            <p className="text-[36px] font-extrabold leading-none text-navy font-[family-name:var(--font-display)]">
              {offerConfig.ENTRY_PRICE_FULL}
            </p>
            <p className="mt-1 text-[14px] text-muted">Pagamento único</p>
          </div>

          <div ref={ctaRef} className="mt-6 w-full max-w-sm">
            <Button mode="scroll-to-plans" className="w-full">
              QUERO ACESSAR AS 500+ ATIVIDADES
            </Button>
            <p className="mt-2.5 text-[13px] text-muted">
              Escolha entre Essencial e Premium • Garantia de{' '}
              {offerConfig.GUARANTEE_DAYS} dias
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 w-full max-w-4xl sm:mt-10">
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-lift)] sm:rounded-[24px]">
            <img
              src={offerConfig.PRODUCT_IMAGE}
              alt={`${offerConfig.PRODUCT_NAME}: acervo de atividades prontas`}
              width={1400}
              height={788}
              decoding="async"
              {...({ fetchPriority: 'high' } as ImgHTMLAttributes<HTMLImageElement>)}
              className="aspect-[4/3] w-full object-cover object-center sm:aspect-[16/9]"
            />
          </div>
        </div>

        <ul className="mx-auto mt-6 grid w-full max-w-2xl grid-cols-2 gap-2 sm:gap-2.5">
          {benefits.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2.5 text-[14px] sm:text-[15px] font-medium text-ink"
            >
              <span
                aria-hidden="true"
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green text-white text-[10px] font-bold"
              >
                ✓
              </span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
