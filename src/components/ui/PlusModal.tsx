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
      className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]" />

      <div
        className="relative z-10 flex w-full max-w-md max-h-[90vh] flex-col rounded-t-[28px] bg-white shadow-[var(--shadow-lift)] sm:rounded-[28px] animate-[fadeUp_0.28s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center pt-3 sm:hidden">
          <span className="h-1 w-10 rounded-full bg-border" />
        </div>

        <div className="relative px-5 pt-3 pb-4 sm:px-6 sm:pt-6">
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-4 top-3 sm:top-5 rounded-full p-2 text-muted hover:bg-cream text-[18px] leading-none"
          >
            ×
          </button>

          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-orange">
            Upgrade opcional
          </p>
          <h2
            id="plus-modal-title"
            className="mt-2 pr-8 text-[21px] sm:text-[23px] font-extrabold leading-tight text-navy text-balance"
          >
            Complete sua biblioteca por só {offerConfig.PLUS_PRICE_DIFFERENCE}{' '}
            a mais
          </h2>
          <p className="mt-2 text-[14px] leading-snug text-muted">
            Avaliações, planos de aula e planejamento anual além das{' '}
            {offerConfig.NUMBER_OF_ACTIVITIES} atividades.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-5 pb-2 sm:px-6">
          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-2xl border border-border bg-cream p-3.5">
              <p className="text-[11px] font-bold uppercase text-muted">
                Essencial
              </p>
              <p className="mt-1 text-[24px] font-extrabold leading-none text-navy">
                {offerConfig.ESSENTIAL_PRICE}
              </p>
            </div>
            <div className="rounded-2xl border-2 border-orange bg-orange-soft p-3.5">
              <p className="text-[11px] font-bold uppercase text-orange">
                Plus · recomendado
              </p>
              <p className="mt-1 text-[24px] font-extrabold leading-none text-navy">
                {offerConfig.PLUS_PRICE}
              </p>
            </div>
          </div>

          <ul className="mt-4 space-y-2">
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
        </div>

        <div className="sticky bottom-0 space-y-2 border-t border-border bg-white px-5 py-4 sm:px-6 safe-pb">
          <button
            type="button"
            onClick={acceptPlus}
            className="w-full rounded-xl bg-orange px-4 py-3.5 text-[15px] font-bold text-white shadow-[var(--shadow-cta)]"
          >
            QUERO O PLUS POR {offerConfig.PLUS_PRICE}
          </button>
          <button
            type="button"
            onClick={declinePlus}
            className="w-full rounded-xl px-4 py-3 text-[14px] font-semibold text-navy hover:bg-cream"
          >
            Continuar só com o Essencial · {offerConfig.ENTRY_PRICE}
          </button>
        </div>
      </div>
    </div>
  )
}
