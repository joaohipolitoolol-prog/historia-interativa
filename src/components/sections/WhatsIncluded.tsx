import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

const included = [
  `${offerConfig.NUMBER_OF_ACTIVITIES} atividades de História`,
  'Materiais em PDF',
  'Atividades para imprimir',
  'Recursos para projetar',
  'Exercícios individuais',
  'Atividades em grupo',
  'Linhas do tempo',
  'Mapas históricos',
  'Jogos e dinâmicas',
  'Atividades de revisão',
  'Organização por tema',
  'Organização por série ou etapa',
  'Indicações relacionadas à BNCC',
  'Acesso pelo celular ou computador',
  'Pagamento único',
  'Sem mensalidade',
]

type WhatsIncludedProps = {
  ctaLabel: string
  showCta?: boolean
}

export function WhatsIncluded({
  ctaLabel,
  showCta = true,
}: WhatsIncludedProps) {
  return (
    <Section id="incluido" tone="cool">
      <SectionTitle>Tudo organizado em um único acesso</SectionTitle>
      <SectionLead>
        <span className="font-bold text-navy">{offerConfig.PRODUCT_NAME}</span>
        {' — '}
        uma biblioteca digital com {offerConfig.NUMBER_OF_ACTIVITIES}{' '}
        atividades para diferentes temas, turmas e momentos da aula.
      </SectionLead>

      <div className="mt-8 rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-[var(--shadow-soft)]">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-orange">
              Produto principal
            </p>
            <h3 className="mt-1 text-[24px] sm:text-[28px] font-extrabold text-navy">
              {offerConfig.PRODUCT_NAME}
            </h3>
          </div>
          <p className="rounded-full bg-green/10 px-4 py-2 text-[14px] font-bold text-green">
            {offerConfig.NUMBER_OF_ACTIVITIES} atividades
          </p>
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {included.map((item) => (
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

        {showCta ? (
          <div className="mt-8">
            <Button position="after_included">{ctaLabel}</Button>
          </div>
        ) : null}
      </div>
    </Section>
  )
}
