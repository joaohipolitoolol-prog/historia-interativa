import { useEffect } from 'react'
import { offerConfig } from '@/config/offerConfig'
import { openCheckout } from '@/lib/checkout'
import { trackEvent } from '@/lib/tracking'

type PlusModalProps = {
  open: boolean
  onClose: () => void
}

export function PlusModal({ open, onClose }: PlusModalProps) {
  useEffect(() => {
    if (!open) return
    trackEvent('PlusModalViewed', {}, { once: true, onceKey: 'PlusModalViewed' })
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

  const acceptPlus = () => {
    trackEvent('PlusAccepted', { selected_plan: 'plus' })
    trackEvent('CheckoutClicked', {
      selected_plan: 'plus',
      cta_position: 'plus_modal_accept',
    })
    onClose()
    openCheckout('plus', 'plus_modal_accept')
  }

  const declinePlus = () => {
    trackEvent('PlusDeclined', { selected_plan: 'essential' })
    trackEvent('CheckoutClicked', {
      selected_plan: 'essential',
      cta_position: 'plus_modal_decline',
    })
    onClose()
    openCheckout('essential', 'plus_modal_decline')
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="plus-modal-title"
      className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-5"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-navy/75 backdrop-blur-[2px]" />

      <div
        className="relative z-10 w-full max-w-md max-h-[90vh] overflow-y-auto rounded-t-[28px] sm:rounded-[28px] bg-white shadow-[var(--shadow-lift)] animate-sheet-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white pt-3 pb-2 px-5 sm:px-6 border-b border-border/60">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-border sm:hidden" />
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-orange">
                Upgrade opcional
              </p>
              <h2
                id="plus-modal-title"
                className="mt-1.5 text-[20px] sm:text-[22px] font-extrabold leading-snug text-navy text-balance"
              >
                Complete sua biblioteca por +{offerConfig.PLUS_PRICE_DIFFERENCE}
              </h2>
            </div>
            <button
              type="button"
              aria-label="Fechar"
              onClick={onClose}
              className="shrink-0 -mr-1 rounded-full p-2 text-muted hover:bg-cream text-[18px] leading-none"
            >
              ×
            </button>
          </div>
          <p className="mt-2 text-[14px] text-muted leading-snug">
            Além das {offerConfig.NUMBER_OF_ACTIVITIES} atividades: avaliações,
            planos de aula e planejamento anual.
          </p>
        </div>

        <div className="px-5 py-4 sm:px-6 space-y-4">
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={declinePlus}
              className="rounded-2xl border border-border bg-cream p-3.5 text-left hover:border-navy/20 transition-colors"
            >
              <p className="text-[11px] font-bold uppercase tracking-wide text-muted">
                Essencial
              </p>
              <p className="mt-1 text-[24px] font-extrabold text-navy leading-none">
                {offerConfig.ENTRY_PRICE}
              </p>
              <p className="mt-1.5 text-[12px] text-muted">Só atividades</p>
            </button>
            <button
              type="button"
              onClick={acceptPlus}
              className="rounded-2xl border-2 border-orange bg-orange-soft p-3.5 text-left"
            >
              <p className="text-[11px] font-bold uppercase tracking-wide text-orange">
                Plus
              </p>
              <p className="mt-1 text-[24px] font-extrabold text-navy leading-none">
                {offerConfig.PLUS_PRICE}
              </p>
              <p className="mt-1.5 text-[12px] text-muted">+ extras</p>
            </button>
          </div>

          <ul className="space-y-2 rounded-2xl bg-cream px-4 py-3.5">
            {offerConfig.PLUS_FEATURES.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[14px] text-ink"
              >
                <span aria-hidden="true" className="mt-0.5 text-green font-bold">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="space-y-2.5 pb-1">
            <button
              type="button"
              onClick={acceptPlus}
              className="w-full rounded-xl bg-orange px-4 py-3.5 text-[15px] font-bold text-white shadow-[var(--shadow-cta)] hover:bg-orange-light"
            >
              QUERO O PLUS POR {offerConfig.PLUS_PRICE}
            </button>
            <button
              type="button"
              onClick={declinePlus}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[14px] font-bold text-navy hover:bg-cream"
            >
              Continuar com Essencial por {offerConfig.ENTRY_PRICE}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
