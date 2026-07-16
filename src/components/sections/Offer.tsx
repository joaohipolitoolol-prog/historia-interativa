import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { useInViewTrack } from '@/hooks/useInViewTrack'

const offerIncludes = [
  `Biblioteca com ${offerConfig.NUMBER_OF_ACTIVITIES} atividades`,
  'Sistema Aula Pronta',
  'PDFs para imprimir ou projetar',
  'Organização por tema',
  'Apoio relacionado à BNCC',
  'Banco de avaliações',
  'Planos de aula',
  'Planejamento',
  'Linhas do tempo e mapas',
  'Guia de aulas participativas',
  `Garantia de ${offerConfig.GUARANTEE_DAYS} dias`,
]

type OfferProps = {
  ctaLabel: string
  pageVariant: string
}

export function Offer({ ctaLabel, pageVariant }: OfferProps) {
  const ref = useInViewTrack('OfferViewed')
  const showTwoPlans = pageVariant === 'two_plans'

  return (
    <Section id="oferta" tone="orange-soft">
      <div ref={ref} className="text-center">
        <p className="inline-flex rounded-full bg-orange px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-white">
          ACESSO COMPLETO
        </p>
        <SectionTitle className="mt-4 mx-auto">
          {offerConfig.PRODUCT_NAME}
        </SectionTitle>
        <SectionLead className="mx-auto">
          {offerConfig.NUMBER_OF_ACTIVITIES} atividades organizadas para você
          parar de preparar cada aula do zero.
        </SectionLead>
      </div>

      {showTwoPlans ? (
        <TwoPlans ctaLabel={ctaLabel} />
      ) : (
        <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-[var(--shadow-soft)]">
          <div className="text-center">
            <p className="text-[15px] text-muted">
              De{' '}
              <span className="line-through">{offerConfig.ORIGINAL_PRICE}</span>
            </p>
            <p className="mt-1 text-[48px] sm:text-[56px] font-extrabold leading-none text-navy font-[family-name:var(--font-display)]">
              {offerConfig.PRODUCT_PRICE}
            </p>
            <p className="mt-3 text-[15px] font-semibold text-ink">
              Pagamento único
            </p>
            <p className="text-[15px] text-muted">Sem mensalidade</p>
            <p className="text-[15px] text-muted">
              Acesso imediato após a confirmação
            </p>
          </div>

          <ul className="mt-8 space-y-3 border-t border-border pt-6">
            {offerIncludes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-ink"
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
            <Button position="offer" fullWidth>
              {ctaLabel}
            </Button>
            <p className="mt-3 text-center text-[14px] text-muted">
              Compra segura • Produto digital • Garantia de{' '}
              {offerConfig.GUARANTEE_DAYS} dias
            </p>
          </div>
        </div>
      )}
    </Section>
  )
}

function TwoPlans({ ctaLabel }: { ctaLabel: string }) {
  return (
    <div className="mt-10 grid gap-4 lg:grid-cols-2 max-w-4xl mx-auto">
      {offerConfig.PLANS.map((plan) => (
        <article
          key={plan.id}
          className={`rounded-3xl border bg-white p-6 sm:p-8 ${
            plan.highlighted
              ? 'border-orange shadow-[var(--shadow-soft)] ring-2 ring-orange/20'
              : 'border-border'
          }`}
        >
          {plan.highlighted ? (
            <p className="mb-3 inline-flex rounded-full bg-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
              Mais completo
            </p>
          ) : null}
          <h3 className="text-[22px] font-extrabold text-navy">{plan.name}</h3>
          <p className="mt-2 text-[14px] text-muted line-through">
            {plan.originalPrice}
          </p>
          <p className="text-[40px] font-extrabold text-navy">{plan.price}</p>
          <ul className="mt-6 space-y-2.5">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-[15px] text-ink"
              >
                <span aria-hidden="true" className="text-green font-bold">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button
              position="plan"
              checkoutUrl={plan.checkoutUrl || undefined}
              fullWidth
            >
              {ctaLabel}
            </Button>
          </div>
        </article>
      ))}
    </div>
  )
}
