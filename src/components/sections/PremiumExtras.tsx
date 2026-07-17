import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { useInViewTrack } from '@/hooks/useInViewTrack'

const previewTiles = [
  {
    src: '/images/preview-02.webp',
    label: 'Linhas do tempo',
  },
  {
    src: '/images/preview-05.webp',
    label: 'Mapas históricos',
  },
  {
    src: '/images/preview-06.webp',
    label: 'Avaliações',
  },
  {
    src: '/images/preview-04.webp',
    label: 'Material para projetar',
  },
]

export function PremiumExtras() {
  const ref = useInViewTrack('PremiumBonusesViewed')

  return (
    <Section id="premium-extras" tone="navy" compact>
      <div ref={ref}>
        <div className="section-intro">
          <p className="mb-2 inline-flex mx-auto rounded-full bg-orange px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
            Exclusivo do Premium
          </p>
          <SectionTitle centered className="!text-white mt-3">
            Quer também planejar e avaliar? Leve o sistema completo
          </SectionTitle>
          <SectionLead centered className="!text-white/70">
            Além das {offerConfig.NUMBER_OF_ACTIVITIES} atividades: avaliações,
            planos de aula, planejamento e materiais visuais.
          </SectionLead>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3 max-w-3xl mx-auto">
          {previewTiles.map((tile) => (
            <figure
              key={tile.label}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src={tile.src}
                alt={tile.label}
                width={480}
                height={360}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="px-3 py-2 text-[13px] font-semibold text-white/90">
                {tile.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {offerConfig.PREMIUM_BONUSES.map((b) => (
            <div
              key={b.name}
              className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-3"
            >
              <p className="text-[14px] font-bold text-white">{b.name}</p>
              <p className="mt-0.5 text-[12px] text-white/60">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
