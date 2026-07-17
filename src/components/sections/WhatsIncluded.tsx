import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { useInViewTrack } from '@/hooks/useInViewTrack'

export function WhatsIncluded() {
  const ref = useInViewTrack('EssentialViewed')

  return (
    <Section id="incluido" tone="cream" compact>
      <div ref={ref} className="section-intro">
        <SectionTitle centered>
          O Essencial já entrega as {offerConfig.NUMBER_OF_ACTIVITIES} atividades
        </SectionTitle>
        <SectionLead centered>
          Escolha o tema, abra o material e aplique com sua turma por apenas{' '}
          {offerConfig.ENTRY_PRICE}.
        </SectionLead>
      </div>

      <div className="mx-auto mt-6 max-w-2xl rounded-[24px] border border-border bg-white p-5 sm:p-6 shadow-[var(--shadow-soft)]">
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {offerConfig.ESSENTIAL_SECTION_FEATURES.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[15px] text-ink">
              <span aria-hidden="true" className="mt-0.5 text-green font-bold">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[15px] font-semibold text-navy">
          O Essencial não é uma amostra. Você recebe as mais de 500 atividades
          anunciadas.
        </p>
      </div>
    </Section>
  )
}
