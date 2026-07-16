import { useEffect } from 'react'

type LightboxProps = {
  open: boolean
  src: string
  alt: string
  caption?: string
  onClose: () => void
}

export function Lightbox({ open, src, alt, caption, onClose }: LightboxProps) {
  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={caption || alt}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/85 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar visualização"
        className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
      >
        Fechar
      </button>
      <figure
        className="max-h-[90vh] max-w-4xl overflow-auto rounded-2xl bg-white p-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-h-[75vh] w-auto rounded-xl object-contain mx-auto"
        />
        {caption ? (
          <figcaption className="mt-3 text-center text-[15px] text-muted">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </div>
  )
}
