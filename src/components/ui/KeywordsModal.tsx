import { useEffect, useMemo, useState } from 'react'
import { SEO_KEYWORDS } from '@/data/seoKeywords'

type KeywordsModalProps = {
  open: boolean
  onClose: () => void
}

export function KeywordsModal({ open, onClose }: KeywordsModalProps) {
  const [query, setQuery] = useState('')

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

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return SEO_KEYWORDS
    return SEO_KEYWORDS.filter((k) => k.toLowerCase().includes(q))
  }, [query])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="keywords-modal-title"
      className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-5"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-navy/75 backdrop-blur-[2px]" />
      <div
        className="relative z-10 flex w-full max-w-2xl max-h-[88vh] flex-col overflow-hidden rounded-t-[28px] sm:rounded-[28px] bg-white shadow-[var(--shadow-lift)] animate-sheet-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="shrink-0 border-b border-border px-5 pt-3 pb-4 sm:px-6">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-border sm:hidden" />
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-orange">
                SEO
              </p>
              <h2
                id="keywords-modal-title"
                className="mt-1 text-[20px] font-extrabold text-navy"
              >
                Palavras-chave ({SEO_KEYWORDS.length})
              </h2>
              <p className="mt-1 text-[13px] text-muted">
                Termos relacionados a Aula Viva História e materiais didáticos.
              </p>
            </div>
            <button
              type="button"
              aria-label="Fechar"
              onClick={onClose}
              className="rounded-full p-2 text-muted hover:bg-cream text-[18px] leading-none"
            >
              ×
            </button>
          </div>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar palavra-chave..."
            className="mt-3 w-full rounded-xl border border-border bg-cream px-3.5 py-2.5 text-[14px] text-navy outline-none focus:border-orange"
          />
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4 sm:px-6">
          <ul className="flex flex-wrap gap-2">
            {filtered.map((keyword) => (
              <li
                key={keyword}
                className="rounded-full border border-border bg-cream px-3 py-1.5 text-[13px] text-navy"
              >
                {keyword}
              </li>
            ))}
          </ul>
          {filtered.length === 0 ? (
            <p className="text-[14px] text-muted">Nenhuma palavra encontrada.</p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
