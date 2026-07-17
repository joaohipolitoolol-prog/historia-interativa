import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'

const items = offerConfig.ESSENTIAL_FEATURES.slice(0, 8)

export function WhatsIncluded() {
  return (
    <Section id="incluido" tone="cream" compact>
      <div className="section-intro">
        <SectionTitle centered>
          Mais de 500 atividades pelo menor preço da oferta
        </SectionTitle>
        <SectionLead centered>
          O Essencial entrega todo o acervo principal anunciado por{' '}
          {offerConfig.ENTRY_PRICE}.
        </SectionLead>
      </div>

      <div className="mx-auto mt-7 max-w-2xl rounded-[24px] border border-border bg-white p-6 shadow-[var(--shadow-soft)]">
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[15px] text-ink">
              <span aria-hidden="true" className="mt-0.5 text-green font-bold">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[14px] text-muted">
          O Essencial não é uma amostra. Você recebe as{' '}
          {offerConfig.NUMBER_OF_ACTIVITIES} atividades anunciadas.
        </p>
      </div>
    </Section>
  )
}
