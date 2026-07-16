import { useState } from 'react'
import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { Lightbox } from '@/components/ui/Lightbox'
import { useInViewTrack } from '@/hooks/useInViewTrack'

export function ProductDemo() {
  const ref = useInViewTrack('ProductPreviewViewed')
  const [active, setActive] = useState<{
    src: string
    alt: string
    caption: string
  } | null>(null)

  const images = offerConfig.PRODUCT_PREVIEW_IMAGES.filter((i) => !i.placeholder)

  return (
    <Section id="previas" tone="white" compact>
      <div ref={ref}>
        <div className="section-intro">
          <SectionTitle centered>
            Veja o que você poderá usar nas suas aulas
          </SectionTitle>
          <SectionLead centered>
            Prévia dos materiais da biblioteca — prontos para imprimir ou
            projetar.
          </SectionLead>
        </div>

        <div className="mt-8 overflow-hidden rounded-[24px] border border-border shadow-[var(--shadow-lift)]">
          <img
            src={offerConfig.PREVIEWS_GRID_IMAGE}
            alt="Composição com prévias de atividades, mapas, linhas do tempo e exercícios"
            width={1400}
            height={788}
            loading="lazy"
            decoding="async"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div className="mt-6 -mx-5 px-5 overflow-x-auto no-scrollbar sm:mx-0 sm:px-0 sm:overflow-visible">
          <ul className="flex gap-3 sm:grid sm:grid-cols-3 lg:grid-cols-6 min-w-max sm:min-w-0">
            {images.map((image) => (
              <li key={image.caption} className="w-[140px] sm:w-auto shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setActive({
                      src: image.src,
                      alt: image.alt,
                      caption: image.caption,
                    })
                  }
                  className="group w-full text-left"
                  aria-label={`Ampliar: ${image.caption}`}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border bg-cool">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={320}
                      height={240}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-2 text-[12px] sm:text-[13px] font-semibold text-navy leading-snug">
                    {image.caption}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <Lightbox
          open={Boolean(active)}
          src={active?.src || ''}
          alt={active?.alt || ''}
          caption={active?.caption}
          onClose={() => setActive(null)}
        />
      </div>
    </Section>
  )
}
