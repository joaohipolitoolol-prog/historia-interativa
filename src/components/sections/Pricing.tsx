import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLabel,
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
      <div ref={ref} className="text-center max-w-3xl mx-auto">
        <SectionLabel>ESCOLHA SEU ACESSO</SectionLabel>
        <SectionTitle>
          Escolha o acesso que faz mais sentido para você
        </SectionTitle>
        <SectionLead className="mx-auto">
          O Essencial entrega as {offerConfig.NUMBER_OF_ACTIVITIES} atividades.
          O Premium adiciona planejamento, avaliações e materiais extras.
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
      className="flex flex-col rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-[var(--shadow-soft)]"
    >
      <p className="inline-flex w-fit rounded-full bg-cool px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy">
        Acesso essencial
      </p>
      <h3 className="mt-3 text-[24px] font-extrabold text-navy">
        {offerConfig.PRODUCT_NAME} {offerConfig.ESSENTIAL_PLAN_NAME}
      </h3>
      <p className="mt-2 text-[15px] text-muted">
        A biblioteca principal com mais de {offerConfig.NUMBER_OF_ACTIVITIES}{' '}
        atividades de História.
      </p>

      <div className="mt-5">
        <p className="text-[14px] text-muted">
          De{' '}
          <span className="line-through">
            {offerConfig.ESSENTIAL_ORIGINAL_PRICE}
          </span>
        </p>
        <p className="text-[48px] font-extrabold leading-none text-navy font-[family-name:var(--font-display)]">
          {offerConfig.ESSENTIAL_PRICE}
        </p>
        <p className="mt-2 text-[15px] font-semibold text-ink">Pagamento único.</p>
      </div>

      <ul className="mt-6 space-y-2.5 flex-1">
        {offerConfig.ESSENTIAL_FEATURES.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-[15px] text-ink"
          >
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
          Mais de {offerConfig.NUMBER_OF_ACTIVITIES} atividades • Pagamento único
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
      className="relative flex flex-col rounded-3xl border-2 border-orange bg-white p-6 sm:p-8 shadow-[var(--shadow-soft)] ring-2 ring-orange/15"
    >
      <p className="inline-flex w-fit rounded-full bg-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
        Mais escolhido
      </p>
      <h3 className="mt-3 text-[24px] font-extrabold text-navy">
        {offerConfig.PRODUCT_NAME} {offerConfig.PREMIUM_PLAN_NAME}
      </h3>
      <p className="mt-2 text-[15px] text-muted">
        Tudo do Essencial, mais avaliações, planejamento, planos de aula e
        materiais adicionais.
      </p>

      <div className="mt-5">
        <p className="text-[14px] text-muted">
          De{' '}
          <span className="line-through">
            {offerConfig.PREMIUM_ORIGINAL_PRICE}
          </span>
        </p>
        <p className="text-[48px] font-extrabold leading-none text-navy font-[family-name:var(--font-display)]">
          {offerConfig.PREMIUM_PRICE}
        </p>
        <p className="mt-3 inline-flex rounded-full bg-orange-soft px-3 py-1.5 text-[14px] font-bold text-orange">
          Apenas {offerConfig.PREMIUM_PRICE_DIFFERENCE} a mais que o Essencial.
        </p>
        <p className="mt-2 text-[15px] font-semibold text-ink">Pagamento único.</p>
      </div>

      <ul className="mt-6 space-y-2.5 flex-1">
        {premiumFeatures.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-[15px] text-ink"
          >
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
