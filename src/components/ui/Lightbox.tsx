import { useEffect, useRef } from 'react'

export type LightboxImage = {
  src: string
  alt: string
  caption: string
}

type LightboxProps = {
  open: boolean
  images: readonly LightboxImage[]
  index: number
  onClose: () => void
  onChangeIndex: (index: number) => void
}

export function Lightbox({
  open,
  images,
  index,
  onClose,
  onChangeIndex,
}: LightboxProps) {
  const touchStartX = useRef<number | null>(null)
  const current = images[index]

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChangeIndex((index + 1) % images.length)
      if (e.key === 'ArrowLeft')
        onChangeIndex((index - 1 + images.length) % images.length)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, index, images.length, onClose, onChangeIndex])

  if (!open || !current) return null

  const prev = () => onChangeIndex((index - 1 + images.length) % images.length)
  const next = () => onChangeIndex((index + 1) % images.length)

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.caption}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/90 p-3 sm:p-6"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-3 top-3 z-10 rounded-full bg-white/15 px-3 py-2 text-[15px] font-bold text-white hover:bg-white/25"
      >
        ✕
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          prev()
        }}
        aria-label="Imagem anterior"
        className="absolute left-2 sm:left-4 z-10 hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white text-[22px] hover:bg-white/25"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          next()
        }}
        aria-label="Próxima imagem"
        className="absolute right-2 sm:right-4 z-10 hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white text-[22px] hover:bg-white/25"
      >
        ›
      </button>

      <figure
        className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white p-3 sm:p-4"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => {
          touchStartX.current = e.changedTouches[0]?.clientX ?? null
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current == null) return
          const delta = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current
          if (delta > 50) prev()
          if (delta < -50) next()
          touchStartX.current = null
        }}
      >
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[72vh] w-full rounded-xl object-contain"
        />
        <figcaption className="mt-3 flex items-center justify-between gap-3 text-[15px] text-muted">
          <span className="font-semibold text-navy">{current.caption}</span>
          <span className="shrink-0 text-[13px]">
            {index + 1}/{images.length}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}
