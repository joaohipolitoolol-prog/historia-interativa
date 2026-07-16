import { useState } from 'react'
import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { Lightbox } from '@/components/ui/Lightbox'
import { Button } from '@/components/ui/Button'
import { useInViewTrack } from '@/hooks/useInViewTrack'

export function ProductDemo() {
  const ref = useInViewTrack('ProductPreviewViewed')
  const [active, setActive] = useState<{
    src: string
    alt: string
    caption: string
  } | null>(null)

  const images = offerConfig.PRODUCT_PREVIEW_IMAGES.filter(
    (image) => !image.placeholder,
  )

  return (
    <Section id="previas" tone="white">
      <div ref={ref}>
        <SectionTitle>
          Veja o que você poderá utilizar nas suas aulas
        </SectionTitle>
        <SectionLead>
          Exemplos do tipo de atividade disponível na biblioteca — prontos para
          imprimir ou projetar.
        </SectionLead>

        <div className="mt-8 -mx-5 px-5 overflow-x-auto no-scrollbar sm:mx-0 sm:px-0 sm:overflow-visible">
          <ul className="flex gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 min-w-max sm:min-w-0">
            {images.map((image) => (
              <li key={image.caption} className="w-[260px] sm:w-auto shrink-0">
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
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-cool relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={640}
                      height={480}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <p className="mt-3 text-[15px] font-semibold text-navy">
                    {image.caption}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <Button mode="scroll-to-plans">
            QUERO ACESSAR A PARTIR DE {offerConfig.ENTRY_PRICE}
          </Button>
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
