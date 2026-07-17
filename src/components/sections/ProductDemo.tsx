import { useState } from 'react'
import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { Lightbox } from '@/components/ui/Lightbox'
import { useInViewTrack } from '@/hooks/useInViewTrack'
import { trackEvent } from '@/lib/tracking'

export function ProductDemo() {
  const ref = useInViewTrack('ProductPreviewViewed')
  const images = offerConfig.PRODUCT_PREVIEW_IMAGES
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const lightboxImages = images.map((img) => ({
    src: img.full,
    alt: img.alt,
    caption: img.caption,
  }))

  return (
    <Section id="previas" tone="white" compact>
      <div ref={ref}>
        <div className="section-intro">
          <SectionTitle centered>
            Veja alguns materiais antes de escolher seu acesso
          </SectionTitle>
          <SectionLead centered>
            Clique em uma imagem para visualizar em tamanho maior.
          </SectionLead>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {images.map((image, i) => (
            <button
              key={image.id}
              type="button"
              onClick={() => {
                setIndex(i)
                setOpen(true)
                trackEvent('ProductPreviewOpened', {
                  preview_name: image.caption,
                })
              }}
              className="group text-left"
              aria-label={`Ampliar: ${image.caption}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-cool shadow-[var(--shadow-soft)]">
                <img
                  src={image.thumb}
                  alt={image.alt}
                  width={480}
                  height={360}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform group-hover:scale-[1.03]"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-2 right-2 rounded-full bg-navy/75 px-2 py-1 text-[12px] text-white"
                >
                  ↗
                </span>
              </div>
              <p className="mt-2 text-[14px] sm:text-[15px] font-semibold text-navy">
                {image.caption}
              </p>
            </button>
          ))}
        </div>

        <Lightbox
          open={open}
          images={lightboxImages}
          index={index}
          onClose={() => setOpen(false)}
          onChangeIndex={setIndex}
        />
      </div>
    </Section>
  )
}
