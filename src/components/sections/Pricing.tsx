import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { useInViewTrack } from '@/hooks/useInViewTrack'

type PricingProps = {
  planOrder: 'essential_first' | 'premium_first'
  variant?: string
}

export function Pricing({ planOrder }: PricingProps) {
  const ref = useInViewTrack('PlansViewed')
  const premiumFirst = planOrder === 'premium_first'

  const essentialCard = <EssentialCard />
  const premiumCard = <PremiumCard />

  return (
    <Section id="planos" tone="orange-soft">
      <div ref={ref} className="section-intro">
        <SectionTitle centered>
          Escolha o acesso que faz mais sentido para você
        </SectionTitle>
        <SectionLead centered>
          Essencial: as {offerConfig.NUMBER_OF_ACTIVITIES} atividades. Premium:
          o sistema completo.
        </SectionLead>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2 max-w-5xl mx-auto items-stretch">
        {premiumFirst ? (
          <>
            {premiumCard}
            {essentialCard}
          </>
        ) : (
          <>
            {essentialCard}
            {premiumCard}
          </>
        )}
      </div>
    </Section>
  )
}

function EssentialCard() {
  const ref = useInViewTrack('EssentialPlanViewed')

  return (
    <article
      ref={ref}
      className="flex flex-col rounded-[28px] border border-border bg-white p-6 sm:p-8 shadow-[var(--shadow-soft)]"
    >
      <p className="inline-flex w-fit rounded-full bg-cool px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy">
        Acesso essencial
      </p>
      <h3 className="mt-4 text-[26px] font-extrabold text-navy">
        {offerConfig.ESSENTIAL_PLAN_NAME}
      </h3>
      <p className="mt-2 text-[15px] text-muted">
        Biblioteca com {offerConfig.NUMBER_OF_ACTIVITIES} atividades de História.
      </p>

      <div className="mt-6">
        <p className="text-[14px] text-muted">
          De{' '}
          <span className="line-through">
            {offerConfig.ESSENTIAL_ORIGINAL_PRICE}
          </span>
        </p>
        <p className="mt-1 text-[56px] font-extrabold leading-none text-navy font-[family-name:var(--font-display)]">
          {offerConfig.ESSENTIAL_PRICE}
        </p>
        <p className="mt-2 text-[15px] font-semibold text-ink">Pagamento único</p>
      </div>

      <ul className="mt-6 space-y-2.5 flex-1">
        {offerConfig.ESSENTIAL_FEATURES.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[15px] text-ink">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green text-white text-[11px] font-bold"
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button plan="essential" position="pricing_essential" fullWidth>
          QUERO O ESSENCIAL POR {offerConfig.ENTRY_PRICE}
        </Button>
        <p className="mt-3 text-center text-[13px] text-muted">
          {offerConfig.NUMBER_OF_ACTIVITIES} atividades • Pagamento único
        </p>
      </div>
    </article>
  )
}

function PremiumCard() {
  const ref = useInViewTrack('PremiumPlanViewed')
  const premiumFeatures = [
    ...offerConfig.PREMIUM_EXTRA_FEATURES,
    ...(offerConfig.PREMIUM_FUTURE_UPDATES
      ? (['Atualizações futuras do pacote Premium'] as const)
      : []),
    ...(offerConfig.PREMIUM_LIFETIME_ACCESS
      ? (['Acesso vitalício ao acervo adquirido'] as const)
      : []),
    `Garantia de ${offerConfig.GUARANTEE_DAYS} dias`,
  ]

  return (
    <article
      ref={ref}
      className="relative flex flex-col rounded-[28px] border-[3px] border-orange bg-gradient-to-b from-white to-orange-soft/40 p-6 sm:p-8 shadow-[var(--shadow-lift)]"
    >
      <div className="absolute -top-3 left-6">
        <p className="inline-flex rounded-full bg-orange px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-wide text-white shadow-[var(--shadow-cta)]">
          Mais escolhido
        </p>
      </div>

      <h3 className="mt-4 text-[26px] font-extrabold text-navy">
        {offerConfig.PREMIUM_PLAN_NAME}
      </h3>
      <p className="mt-2 text-[15px] text-muted">
        Tudo do Essencial + planejamento, avaliações e organização.
      </p>

      <div className="mt-6">
        <p className="text-[14px] text-muted">
          De{' '}
          <span className="line-through">
            {offerConfig.PREMIUM_ORIGINAL_PRICE}
          </span>
        </p>
        <p className="mt-1 text-[56px] font-extrabold leading-none text-navy font-[family-name:var(--font-display)]">
          {offerConfig.PREMIUM_PRICE}
        </p>
        <p className="mt-4 inline-flex rounded-xl bg-orange px-4 py-2.5 text-[15px] sm:text-[16px] font-extrabold text-white shadow-[var(--shadow-cta)]">
          Apenas {offerConfig.PREMIUM_PRICE_DIFFERENCE} a mais que o Essencial
        </p>
        <p className="mt-3 text-[15px] font-semibold text-ink">Pagamento único</p>
      </div>

      <ul className="mt-6 space-y-2.5 flex-1">
        {premiumFeatures.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[15px] text-ink">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green text-white text-[11px] font-bold"
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button plan="premium" position="pricing_premium" fullWidth>
          QUERO O PREMIUM POR {offerConfig.PREMIUM_PRICE}
        </Button>
        <p className="mt-3 text-center text-[13px] text-muted">
          O sistema completo • Pagamento único
        </p>
      </div>
    </article>
  )
}
