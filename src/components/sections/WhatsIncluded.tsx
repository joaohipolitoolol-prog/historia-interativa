import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

const included = [
  `Mais de ${offerConfig.NUMBER_OF_ACTIVITIES} atividades`,
  'Conteúdos de diferentes períodos históricos',
  'Materiais para Ensino Fundamental e Médio',
  'Atividades individuais',
  'Atividades em grupo',
  'Recursos visuais',
  'Materiais para imprimir',
  'Materiais para projetar',
  'Organização por tema',
  'Organização com base na BNCC',
  'Acesso digital',
  `Garantia de ${offerConfig.GUARANTEE_DAYS} dias`,
]

export function WhatsIncluded() {
  return (
    <Section id="incluido" tone="cool">
      <SectionTitle>
        O Plano Essencial já entrega a biblioteca completa de atividades
      </SectionTitle>
      <SectionLead>
        Por {offerConfig.ENTRY_PRICE}, você recebe o acervo principal com mais
        de {offerConfig.NUMBER_OF_ACTIVITIES} atividades de História.
      </SectionLead>

      <div className="mt-8 rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-[var(--shadow-soft)]">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-orange">
              Núcleo da oferta
            </p>
            <h3 className="mt-1 text-[24px] sm:text-[28px] font-extrabold text-navy">
              {offerConfig.PRODUCT_NAME} Essencial
            </h3>
          </div>
          <p className="rounded-full bg-green/10 px-4 py-2 text-[14px] font-bold text-green">
            A partir de {offerConfig.ENTRY_PRICE}
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

        <p className="mt-6 rounded-xl border border-border bg-warm px-4 py-3 text-[15px] text-muted">
          O Plano Essencial não é uma amostra. Ele entrega as mais de{' '}
          {offerConfig.NUMBER_OF_ACTIVITIES} atividades anunciadas.
        </p>

        <div className="mt-8">
          <Button mode="scroll-to-plans">
            VER PLANOS A PARTIR DE {offerConfig.ENTRY_PRICE}
          </Button>
        </div>
      </div>
    </Section>
  )
}
