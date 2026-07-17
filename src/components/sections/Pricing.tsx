import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { useInViewTrack } from '@/hooks/useInViewTrack'

type PricingProps = {
  onEssentialClick: () => void
}

export function Pricing({ onEssentialClick }: PricingProps) {
  const ref = useInViewTrack('PlansViewed')

  return (
    <Section id="planos" tone="cream" compact>
      <div ref={ref} className="section-intro">
        <SectionTitle centered>Escolha seu acesso</SectionTitle>
        <SectionLead centered>
          Essencial pelo menor preço. Premium com o sistema completo.
        </SectionLead>
      </div>

      <div className="mt-6 mx-auto grid max-w-xl gap-4 lg:max-w-4xl lg:grid-cols-2 lg:items-stretch">
        <article className="flex flex-col rounded-3xl border border-border bg-white p-5 sm:p-6 shadow-[var(--shadow-soft)]">
          <p className="inline-flex w-fit rounded-full bg-cool px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-navy">
            Essencial
          </p>
          <h3 className="mt-3 text-[20px] font-extrabold text-navy">
            {offerConfig.PRODUCT_NAME} Essencial
          </h3>
          <p className="mt-1 text-[14px] text-muted">
            As {offerConfig.NUMBER_OF_ACTIVITIES} atividades prontas.
          </p>

          <div className="mt-4">
            <p className="text-[13px] text-muted">
              De{' '}
              <span className="line-through">
                {offerConfig.ESSENTIAL_REFERENCE_PRICE}
              </span>
            </p>
            <p className="text-[40px] font-extrabold leading-none text-navy font-[family-name:var(--font-display)]">
              {offerConfig.ESSENTIAL_PRICE}
            </p>
            <p className="mt-1.5 text-[13px] font-semibold text-ink">
              Pagamento único
            </p>
          </div>

          <ul className="mt-4 space-y-1.5 flex-1">
            {offerConfig.ESSENTIAL_FEATURES.slice(0, 5).map((item) => (
              <li key={item} className="flex gap-2 text-[13px] sm:text-[14px] text-ink">
                <span aria-hidden="true" className="text-green font-bold">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <Button
              mode="action"
              trackAs="EssentialSelected"
              fullWidth
              className="!py-3 !text-[15px]"
              onClick={onEssentialClick}
            >
              QUERO O ESSENCIAL · {offerConfig.ENTRY_PRICE}
            </Button>
          </div>
        </article>

        <article className="relative flex flex-col rounded-3xl border-[2.5px] border-orange bg-gradient-to-b from-white to-orange-soft/40 p-5 sm:p-6 shadow-[var(--shadow-lift)]">
          <p className="absolute -top-2.5 left-1/2 -translate-x-1/2 inline-flex rounded-full bg-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-[var(--shadow-cta)]">
            Mais completo
          </p>

          <h3 className="mt-3 text-[20px] font-extrabold text-navy">
            {offerConfig.PRODUCT_NAME} Premium
          </h3>
          <p className="mt-1 text-[14px] text-muted">
            Atividades + avaliações, planos e extras.
          </p>

          <div className="mt-4">
            <p className="text-[13px] text-muted">
              De{' '}
              <span className="line-through">
                {offerConfig.PREMIUM_REFERENCE_PRICE}
              </span>
            </p>
            <p className="text-[40px] font-extrabold leading-none text-navy font-[family-name:var(--font-display)]">
              {offerConfig.PREMIUM_PRICE}
            </p>
            <p className="mt-2 text-[13px] font-bold text-orange">
              + {offerConfig.PREMIUM_VS_ESSENTIAL_DIFF} vs Essencial
            </p>
            <p className="mt-1 text-[13px] font-semibold text-ink">
              Pagamento único
            </p>
          </div>

          <ul className="mt-4 space-y-1.5 flex-1">
            {offerConfig.PREMIUM_FEATURES.slice(0, 6).map((item) => (
              <li key={item} className="flex gap-2 text-[13px] sm:text-[14px] text-ink">
                <span aria-hidden="true" className="text-green font-bold">
                  ✓
                </span>
                {item}
              </li>
            ))}
            <li className="flex gap-2 text-[13px] sm:text-[14px] text-ink">
              <span aria-hidden="true" className="text-green font-bold">
                ✓
              </span>
              Garantia de {offerConfig.GUARANTEE_DAYS} dias
            </li>
          </ul>

          <div className="mt-5 text-center">
            <Button
              plan="premium"
              position="pricing_premium"
              fullWidth
              className="!py-3 !text-[15px]"
            >
              QUERO O PREMIUM · {offerConfig.PREMIUM_PRICE}
            </Button>
          </div>
        </article>
      </div>

      <div className="mx-auto mt-5 max-w-xl rounded-2xl border border-border bg-white p-4 shadow-[var(--shadow-soft)]">
        <p className="text-[13px] font-bold text-navy mb-2.5 text-center">
          Comparação rápida
        </p>
        <ul className="space-y-2">
          {offerConfig.COMPACT_COMPARISON.map((row) => (
            <li
              key={row.label}
              className="flex items-center justify-between gap-2 text-[13px] border-b border-border/60 pb-2 last:border-0 last:pb-0"
            >
              <span className="font-medium text-ink">{row.label}</span>
              <span className="shrink-0 text-[12px] font-semibold text-muted">
                <span className={row.essential ? 'text-green' : 'text-muted/50'}>
                  E {row.essential ? '✓' : '—'}
                </span>
                <span className="mx-1.5 text-border">|</span>
                <span className={row.premium ? 'text-green' : 'text-muted/50'}>
                  P {row.premium ? '✓' : '—'}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
