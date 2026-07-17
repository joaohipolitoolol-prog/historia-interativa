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
    <Section id="planos" tone="cream">
      <div ref={ref} className="section-intro">
        <SectionTitle centered>
          Escolha o acesso que faz mais sentido para você
        </SectionTitle>
        <SectionLead centered>
          Essencial pelo menor preço. Premium com o sistema completo.
        </SectionLead>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2 max-w-5xl mx-auto items-stretch">
        <article className="flex flex-col rounded-[28px] border border-border bg-white p-6 sm:p-8 shadow-[var(--shadow-soft)]">
          <p className="inline-flex w-fit rounded-full bg-cool px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy">
            Essencial
          </p>
          <h3 className="mt-4 text-[24px] font-extrabold text-navy">
            {offerConfig.PRODUCT_NAME} Essencial
          </h3>
          <p className="mt-2 text-[15px] text-muted">
            As {offerConfig.NUMBER_OF_ACTIVITIES} atividades prontas.
          </p>

          <div className="mt-5">
            <p className="text-[14px] text-muted">
              De{' '}
              <span className="line-through">
                {offerConfig.ESSENTIAL_REFERENCE_PRICE}
              </span>
            </p>
            <p className="text-[52px] font-extrabold leading-none text-navy font-[family-name:var(--font-display)]">
              {offerConfig.ESSENTIAL_PRICE}
            </p>
            <p className="mt-2 text-[15px] font-semibold">Pagamento único</p>
          </div>

          <ul className="mt-5 space-y-2 flex-1">
            {offerConfig.ESSENTIAL_FEATURES.slice(0, 6).map((item) => (
              <li key={item} className="flex gap-2 text-[14px] text-ink">
                <span aria-hidden="true" className="text-green font-bold">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <Button
              mode="action"
              trackAs="EssentialSelected"
              fullWidth
              onClick={onEssentialClick}
            >
              QUERO O ESSENCIAL POR {offerConfig.ENTRY_PRICE}
            </Button>
          </div>
        </article>

        <article className="relative flex flex-col rounded-[28px] border-[3px] border-orange bg-gradient-to-b from-white to-orange-soft/50 p-6 sm:p-8 shadow-[var(--shadow-lift)]">
          <p className="absolute -top-3 left-6 inline-flex rounded-full bg-orange px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-wide text-white shadow-[var(--shadow-cta)]">
            Mais completo
          </p>

          <h3 className="mt-4 text-[24px] font-extrabold text-navy">
            {offerConfig.PRODUCT_NAME} Premium
          </h3>
          <p className="mt-2 text-[15px] text-muted">
            Atividades, avaliações, planos de aula, planejamento e todos os
            extras.
          </p>

          <div className="mt-5">
            <p className="text-[14px] text-muted">
              De{' '}
              <span className="line-through">
                {offerConfig.PREMIUM_REFERENCE_PRICE}
              </span>
            </p>
            <p className="text-[52px] font-extrabold leading-none text-navy font-[family-name:var(--font-display)]">
              {offerConfig.PREMIUM_PRICE}
            </p>
            <p className="mt-3 inline-flex rounded-xl bg-orange px-4 py-2.5 text-[15px] font-extrabold text-white">
              Por apenas {offerConfig.PREMIUM_VS_ESSENTIAL_DIFF} a mais que o
              Essencial
            </p>
            <p className="mt-2 text-[15px] font-semibold">Pagamento único</p>
          </div>

          <ul className="mt-5 space-y-2 flex-1">
            {offerConfig.PREMIUM_FEATURES.map((item) => (
              <li key={item} className="flex gap-2 text-[14px] text-ink">
                <span aria-hidden="true" className="text-green font-bold">
                  ✓
                </span>
                {item}
              </li>
            ))}
            {offerConfig.PREMIUM_FUTURE_UPDATES ? (
              <li className="flex gap-2 text-[14px] text-ink">
                <span aria-hidden="true" className="text-green font-bold">
                  ✓
                </span>
                Atualizações futuras do acervo Premium
              </li>
            ) : null}
            {offerConfig.PREMIUM_LIFETIME_ACCESS ? (
              <li className="flex gap-2 text-[14px] text-ink">
                <span aria-hidden="true" className="text-green font-bold">
                  ✓
                </span>
                Acesso permanente ao conteúdo adquirido
              </li>
            ) : null}
            <li className="flex gap-2 text-[14px] text-ink">
              <span aria-hidden="true" className="text-green font-bold">
                ✓
              </span>
              Garantia de {offerConfig.GUARANTEE_DAYS} dias
            </li>
          </ul>

          <div className="mt-7">
            <Button plan="premium" position="pricing_premium" fullWidth>
              QUERO O PREMIUM POR {offerConfig.PREMIUM_PRICE}
            </Button>
          </div>
        </article>
      </div>

      <div className="mx-auto mt-8 max-w-2xl rounded-[20px] border border-border bg-white p-5 shadow-[var(--shadow-soft)]">
        <p className="text-[14px] font-bold text-navy mb-3">Comparação rápida</p>
        <ul className="space-y-2.5">
          {offerConfig.COMPACT_COMPARISON.map((row) => (
            <li
              key={row.label}
              className="flex items-center justify-between gap-3 text-[14px] border-b border-border/70 pb-2 last:border-0 last:pb-0"
            >
              <span className="font-medium text-ink">{row.label}</span>
              <span className="shrink-0 text-[12px] font-semibold text-muted">
                <span className={row.essential ? 'text-green' : 'text-muted'}>
                  Ess. {row.essential ? '✓' : '—'}
                </span>
                {' · '}
                <span className={row.premium ? 'text-green' : 'text-muted'}>
                  Prem. {row.premium ? '✓' : '—'}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
