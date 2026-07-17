import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { useInViewTrack } from '@/hooks/useInViewTrack'

export function PremiumExtras() {
  const ref = useInViewTrack('PremiumViewed')

  return (
    <Section id="premium-extras" tone="navy" compact>
      <div ref={ref}>
        <div className="section-intro">
          <p className="mb-2 inline-flex mx-auto rounded-full bg-orange px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
            Sistema completo
          </p>
          <SectionTitle centered className="!text-white mt-3">
            Tudo para preparar, aplicar e avaliar suas aulas
          </SectionTitle>
          <SectionLead centered className="!text-white/70">
            O Premium inclui as {offerConfig.NUMBER_OF_ACTIVITIES} atividades e
            adiciona materiais de planejamento, avaliação e organização.
          </SectionLead>
        </div>

        <ul className="mt-6 mx-auto max-w-2xl grid gap-2.5 sm:grid-cols-2">
          {offerConfig.PREMIUM_SECTION_FEATURES.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white"
            >
              <span aria-hidden="true" className="mt-0.5 text-orange-light font-bold">
                ✓
              </span>
              {item}
            </li>
          ))}
          {offerConfig.PREMIUM_FUTURE_UPDATES ? (
            <li className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white sm:col-span-2">
              <span aria-hidden="true" className="mt-0.5 text-orange-light font-bold">
                ✓
              </span>
              Atualizações futuras do acervo Premium
            </li>
          ) : null}
        </ul>
      </div>
    </Section>
  )
}
