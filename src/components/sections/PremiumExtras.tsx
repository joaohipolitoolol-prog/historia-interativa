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
    <Section id="premium-extras" tone="white" compact>
      <div ref={ref}>
        <div className="section-intro">
          <SectionLabel className="text-center">
            Para quem quer o sistema completo
          </SectionLabel>
          <SectionTitle centered>
            Além das atividades, leve também o sistema completo
          </SectionTitle>
          <SectionLead centered>
            O Premium inclui tudo do Essencial e adiciona materiais que ajudam
            no planejamento, avaliação e organização das aulas.
          </SectionLead>
        </div>

        <div className="mt-8 overflow-hidden rounded-[24px] border border-border shadow-[var(--shadow-lift)]">
          <img
            src={offerConfig.PREMIUM_IMAGE}
            alt="Pacote Premium: avaliações, planos de aula, planejamento, mapas e guia"
            width={1400}
            height={788}
            loading="lazy"
            decoding="async"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {offerConfig.PREMIUM_BONUSES.map((bonus) => (
            <article
              key={bonus.name}
              className="rounded-2xl border border-border bg-warm p-5"
            >
              <span className="inline-flex rounded-full bg-orange/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-orange">
                Exclusivo do Premium
              </span>
              <h3 className="mt-3 text-[17px] font-extrabold text-navy">
                {bonus.name}
              </h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
                {bonus.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
