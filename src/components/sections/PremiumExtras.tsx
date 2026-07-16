import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLabel,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { useInViewTrack } from '@/hooks/useInViewTrack'

export function PremiumExtras() {
  const ref = useInViewTrack('PremiumBonusesViewed')

  return (
    <Section id="premium-extras" tone="white">
      <div ref={ref}>
        <SectionLabel>PARA QUEM QUER O SISTEMA COMPLETO</SectionLabel>
        <SectionTitle>
          Além das atividades, você pode levar também os materiais que facilitam
          planejamento e avaliação
        </SectionTitle>
        <SectionLead>
          O Plano Premium inclui tudo do Essencial e adiciona cinco coleções
          complementares.
        </SectionLead>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {offerConfig.PREMIUM_BONUSES.map((bonus, index) => (
            <article
              key={bonus.name}
              className="rounded-2xl border border-border bg-warm p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-[13px] font-bold text-orange">
                  Extra {index + 1}
                </p>
                <span className="shrink-0 rounded-full bg-orange/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-orange">
                  Exclusivo do Premium
                </span>
              </div>
              <h3 className="mt-3 text-[18px] font-extrabold text-navy">
                {bonus.name}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {bonus.description}
              </p>
              <p className="mt-3 text-[13px] font-semibold text-green">
                Incluído no Plano Premium
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
