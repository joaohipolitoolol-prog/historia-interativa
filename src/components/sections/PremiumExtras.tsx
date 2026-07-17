import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { useInViewTrack } from '@/hooks/useInViewTrack'

export function PremiumExtras() {
  const ref = useInViewTrack('PremiumBonusesViewed')

  return (
    <Section id="premium-extras" tone="navy" compact>
      <div ref={ref}>
        <div className="section-intro">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-orange-light text-center">
            Exclusivo do Premium
          </p>
          <SectionTitle centered className="!text-white">
            Quer também planejar, avaliar e organizar? Leve o sistema completo
          </SectionTitle>
          <SectionLead centered className="!text-white/70">
            Além das atividades: avaliações, planos de aula, planejamento e
            materiais visuais extras.
          </SectionLead>
        </div>

        <div className="mt-7 overflow-hidden rounded-[24px] border border-white/10 shadow-[var(--shadow-lift)]">
          <img
            src={offerConfig.PREMIUM_IMAGE}
            alt="Extras Premium do Aula Viva História"
            width={1400}
            height={788}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {offerConfig.PREMIUM_BONUSES.map((b) => (
            <div
              key={b.name}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
            >
              <p className="text-[15px] font-bold text-white">{b.name}</p>
              <p className="mt-1 text-[13px] text-white/65">{b.description}</p>
            </div>
          ))}
          {offerConfig.PREMIUM_FUTURE_UPDATES ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-[15px] font-bold text-white">
                Atualizações futuras
              </p>
              <p className="mt-1 text-[13px] text-white/65">
                Do acervo Premium, quando liberadas.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  )
}
