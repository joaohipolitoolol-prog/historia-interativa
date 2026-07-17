import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { useInViewTrack } from '@/hooks/useInViewTrack'

const previewCovers = [
  { src: '/images/preview-06.webp', label: '100 avaliações' },
  { src: '/images/preview-03.webp', label: 'Planos de aula' },
  { src: '/images/preview-02.webp', label: 'Planejamento anual' },
  { src: '/images/preview-05.webp', label: 'Mapas Premium' },
  { src: '/images/preview-01.webp', label: 'Linhas do tempo' },
  { src: '/images/preview-04.webp', label: 'Guia participativo' },
]

export function PremiumExtras() {
  const ref = useInViewTrack('PremiumBonusesViewed')

  return (
    <Section id="premium-extras" tone="navy" compact>
      <div ref={ref}>
        <div className="section-intro">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-orange-light text-center">
            Exclusivo do Premium
          </p>
          <SectionTitle centered className="!text-white !text-[24px] sm:!text-[32px]">
            Quer planejar e avaliar também?
          </SectionTitle>
          <SectionLead centered className="!text-white/70 !text-[14px] sm:!text-[16px]">
            Leve o sistema completo: avaliações, planos, mapas e linha do tempo.
          </SectionLead>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
          {previewCovers.map((item) => (
            <div
              key={item.label}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.label}
                  width={480}
                  height={360}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="px-2.5 py-2 text-center text-[12px] sm:text-[13px] font-semibold text-white/90">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {offerConfig.PREMIUM_FUTURE_UPDATES ? (
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[12px] text-white/80">
              Atualizações futuras do Premium
            </span>
          ) : null}
          {offerConfig.PREMIUM_LIFETIME_ACCESS ? (
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[12px] text-white/80">
              Acesso permanente ao conteúdo
            </span>
          ) : null}
        </div>
      </div>
    </Section>
  )
}
