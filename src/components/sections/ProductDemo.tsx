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

  return (
    <Section id="previas" tone="white" compact>
      <div ref={ref}>
        <div className="section-intro">
          <SectionTitle centered>
            Veja o que você poderá usar nas suas aulas
          </SectionTitle>
          <SectionLead centered>
            Prévia dos materiais — toque para ampliar.
          </SectionLead>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {offerConfig.PRODUCT_PREVIEW_IMAGES.map((image) => (
            <button
              key={image.caption}
              type="button"
              onClick={() =>
                setActive({
                  src: image.src,
                  alt: image.alt,
                  caption: image.caption,
                })
              }
              className="group text-left"
              aria-label={`Ampliar: ${image.caption}`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-cool">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={480}
                  height={360}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-2 text-[15px] font-semibold text-navy">
                {image.caption}
              </p>
            </button>
          ))}
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
