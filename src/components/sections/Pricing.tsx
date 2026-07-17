import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { useInViewTrack } from '@/hooks/useInViewTrack'

export function Pricing() {
  const ref = useInViewTrack('PlansViewed')

  return (
    <Section id="planos" tone="cream" compact>
      <div ref={ref} className="section-intro">
        <SectionTitle centered>
          Escolha o acesso que faz mais sentido para você
        </SectionTitle>
        <SectionLead centered>
          O Essencial entrega as {offerConfig.NUMBER_OF_ACTIVITIES} atividades. O
          Premium adiciona planejamento e avaliações.
        </SectionLead>
      </div>

      <div className="mt-7 grid gap-5 max-w-4xl mx-auto lg:grid-cols-2 items-stretch">
        <article className="flex flex-col rounded-[24px] border border-border bg-white p-5 sm:p-6 shadow-[var(--shadow-soft)]">
          <p className="inline-flex w-fit rounded-full bg-cool px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy">
            Acesso Essencial
          </p>
          <h3 className="mt-3 text-[20px] sm:text-[22px] font-extrabold text-navy">
            {offerConfig.PRODUCT_NAME} Essencial
          </h3>
          <p className="mt-1.5 text-[15px] text-muted">
            As mais de 500 atividades prontas para imprimir ou projetar.
          </p>

          <div className="mt-4">
            <p className="text-[40px] font-extrabold leading-none text-navy font-[family-name:var(--font-display)]">
              {offerConfig.ESSENTIAL_PRICE}
            </p>
            <p className="mt-1.5 text-[15px] font-semibold">Pagamento único</p>
          </div>

          <ul className="mt-4 space-y-2 flex-1">
            {offerConfig.ESSENTIAL_CARD_FEATURES.map((item) => (
              <li key={item} className="flex gap-2 text-[15px] text-ink">
                <span aria-hidden="true" className="text-green font-bold">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <Button
              plan="essential"
              position="pricing_essential"
              fullWidth
              className="!text-[14px] sm:!text-[15px] !py-3"
            >
              QUERO AS 500+ ATIVIDADES POR {offerConfig.ENTRY_PRICE}
            </Button>
          </div>
        </article>

        <article className="relative flex flex-col rounded-[24px] border-2 border-orange bg-gradient-to-b from-white to-orange-soft/40 p-5 sm:p-6 shadow-[var(--shadow-lift)]">
          <p className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex rounded-full bg-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-[var(--shadow-cta)]">
            Mais completo
          </p>

          <h3 className="mt-3 text-[20px] sm:text-[22px] font-extrabold text-navy">
            {offerConfig.PRODUCT_NAME} Premium
          </h3>
          <p className="mt-1.5 text-[15px] text-muted">
            Atividades, avaliações, planos de aula e planejamento em um único
            acesso.
          </p>

          <div className="mt-4">
            <p className="text-[40px] font-extrabold leading-none text-navy font-[family-name:var(--font-display)]">
              {offerConfig.PREMIUM_PRICE}
            </p>
            <p className="mt-2 inline-flex rounded-full bg-orange px-3.5 py-2 text-[15px] sm:text-[16px] font-extrabold text-white">
              Apenas {offerConfig.PRICE_DIFFERENCE} a mais que o Essencial
            </p>
            <p className="mt-1.5 text-[15px] font-semibold">Pagamento único</p>
          </div>

          <ul className="mt-4 space-y-2 flex-1">
            {offerConfig.PREMIUM_CARD_FEATURES.map((item) => (
              <li key={item} className="flex gap-2 text-[15px] text-ink">
                <span aria-hidden="true" className="text-green font-bold">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <Button
              plan="premium"
              position="pricing_premium"
              fullWidth
              className="!text-[14px] sm:!text-[15px] !py-3"
            >
              QUERO O SISTEMA COMPLETO POR {offerConfig.PREMIUM_PRICE}
            </Button>
          </div>
        </article>
      </div>

      <div className="mx-auto mt-6 max-w-xl space-y-2">
        <p className="text-center text-[14px] font-bold text-navy">
          Comparação rápida
        </p>
        {offerConfig.COMPACT_COMPARISON.map((row) => (
          <div
            key={row.label}
            className="rounded-xl border border-border bg-white px-4 py-3 flex items-center justify-between gap-3"
          >
            <span className="text-[14px] font-medium text-ink">{row.label}</span>
            <span className="shrink-0 text-[13px] font-semibold">
              <span className={row.essential ? 'text-green' : 'text-muted'}>
                Ess. {row.essential ? '✓' : '—'}
              </span>
              <span className="text-muted"> · </span>
              <span className={row.premium ? 'text-green' : 'text-muted'}>
                Prem. {row.premium ? '✓' : '—'}
              </span>
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}
