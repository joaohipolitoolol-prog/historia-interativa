import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

const included = [
  `${offerConfig.NUMBER_OF_ACTIVITIES} atividades`,
  'PDFs para imprimir',
  'Recursos para projetar',
  'Fundamental e Médio',
  'Organização por tema',
  'Organização com base na BNCC',
  'Acesso digital',
  `Garantia de ${offerConfig.GUARANTEE_DAYS} dias`,
]

export function WhatsIncluded() {
  return (
    <Section id="incluido" tone="cool" compact>
      <div className="section-intro">
        <SectionTitle centered>
          O Plano Essencial já entrega as mais de 500 atividades
        </SectionTitle>
        <SectionLead centered>
          Por {offerConfig.ENTRY_PRICE}, você recebe o acervo principal com
          materiais prontos para imprimir ou projetar.
        </SectionLead>
      </div>

      <div className="mx-auto mt-8 max-w-3xl rounded-[24px] border border-border bg-white p-6 sm:p-8 shadow-[var(--shadow-soft)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-orange">
              Plano Essencial
            </p>
            <h3 className="mt-1 text-[22px] font-extrabold text-navy">
              Biblioteca completa de atividades
            </h3>
          </div>
          <p className="rounded-full bg-green/10 px-4 py-2 text-[14px] font-bold text-green">
            {offerConfig.ENTRY_PRICE_FULL}
          </p>
        </div>

        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {included.map((item) => (
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

        <p className="mt-5 text-[14px] text-muted">
          O Plano Essencial não é uma amostra. Ele entrega as mais de{' '}
          {offerConfig.NUMBER_OF_ACTIVITIES} atividades anunciadas.
        </p>

        <div className="mt-6">
          <Button mode="scroll-to-plans" fullWidth className="sm:w-auto">
            VER PLANOS
          </Button>
        </div>
      </div>
    </Section>
  )
}
