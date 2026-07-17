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
  'PDFs prontos',
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

      <div className="container-page relative py-7 sm:py-11 md:py-14">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <BrandLogo />

          <p className="mt-4 max-w-[95%] rounded-full border border-orange/20 bg-white px-3 py-1.5 text-[11px] sm:text-[12px] font-bold leading-snug text-orange">
            {offerConfig.PRODUCT_MECHANISM} · {offerConfig.BNCC_CLAIM}
          </p>

          <h1 className="mt-4 w-full text-[28px] leading-[1.12] sm:text-[42px] md:text-[50px] font-extrabold text-navy text-balance">
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

          <p className="mt-3 w-full max-w-lg text-[15px] sm:text-[17px] leading-relaxed text-muted">
            Tenha acesso a {offerConfig.NUMBER_OF_ACTIVITIES} atividades prontas
            para imprimir ou projetar. Escolha o tema, abra o material e aplique
            com sua turma.
          </p>

          <div ref={ctaRef} className="mt-5 w-full max-w-sm sm:max-w-none">
            <Button mode="scroll-to-plans" className="w-full sm:w-auto sm:min-w-[280px]">
              QUERO ESCOLHER MEU ACESSO
            </Button>
            <p className="mt-2 text-[12px] leading-snug text-muted">
              A partir de {offerConfig.ENTRY_PRICE} · Pagamento único · Garantia{' '}
              {offerConfig.GUARANTEE_DAYS} dias
            </p>
          </div>
        </div>

        <div className="mx-auto mt-6 w-full max-w-4xl sm:mt-9">
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-lift)] sm:rounded-[24px]">
            <img
              src={offerConfig.PRODUCT_IMAGE}
              alt={`${offerConfig.PRODUCT_NAME}: acervo de atividades, mapas e biblioteca digital`}
              width={1400}
              height={788}
              decoding="async"
              {...({ fetchPriority: 'high' } as ImgHTMLAttributes<HTMLImageElement>)}
              className="aspect-[4/3] w-full object-cover object-center sm:aspect-[16/9]"
            />
          </div>
        </div>

        <ul className="mx-auto mt-5 grid w-full max-w-2xl grid-cols-2 gap-2 sm:mt-7 sm:gap-2.5">
          {benefits.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2.5 text-[13px] sm:px-4 sm:py-3 sm:text-[15px] font-medium text-ink"
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
