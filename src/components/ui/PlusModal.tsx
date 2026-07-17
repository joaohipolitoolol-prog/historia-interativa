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
      className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center bg-navy/70 p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white shadow-[var(--shadow-lift)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-orange-soft px-5 pt-5 pb-4 sm:px-6 sm:pt-6 border-b border-border">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-orange">
            Upgrade opcional
          </p>
          <h2
            id="plus-modal-title"
            className="mt-2 text-[22px] sm:text-[24px] font-extrabold text-navy text-balance"
          >
            Antes de continuar, complete sua biblioteca por apenas{' '}
            {offerConfig.PLUS_PRICE_DIFFERENCE} a mais
          </h2>
          <p className="mt-2 text-[15px] text-muted leading-relaxed">
            Além das {offerConfig.NUMBER_OF_ACTIVITIES} atividades, leve também
            avaliações, planos de aula e o planejamento anual.
          </p>
        </div>

        <div className="px-5 py-5 sm:px-6 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-border bg-warm p-4">
              <p className="text-[12px] font-bold uppercase text-muted">
                Essencial
              </p>
              <p className="mt-1 text-[28px] font-extrabold text-navy">
                {offerConfig.ESSENTIAL_PRICE}
              </p>
              <p className="mt-1 text-[13px] text-muted">Só as atividades</p>
            </div>
            <div className="rounded-2xl border-2 border-orange bg-orange-soft p-4">
              <p className="text-[12px] font-bold uppercase text-orange">Plus</p>
              <p className="mt-1 text-[28px] font-extrabold text-navy">
                {offerConfig.PLUS_PRICE}
              </p>
              <p className="mt-1 text-[13px] text-muted">Atividades + extras</p>
            </div>
          </div>

          <p className="text-[14px] sm:text-[15px] font-semibold text-navy text-center">
            Por apenas {offerConfig.PLUS_PRICE_DIFFERENCE} a mais, você leva
            também os materiais que facilitam planejamento e avaliação.
          </p>

          <ul className="space-y-2">
            {offerConfig.PLUS_FEATURES.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[14px] sm:text-[15px] text-ink"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 text-green font-bold"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={acceptPlus}
            className="w-full rounded-xl bg-orange px-5 py-3.5 text-[16px] font-bold text-white shadow-[var(--shadow-cta)] hover:bg-orange-light"
          >
            QUERO O PLUS POR {offerConfig.PLUS_PRICE}
          </button>

          <button
            type="button"
            onClick={declinePlus}
            className="w-full rounded-xl border border-border bg-white px-5 py-3.5 text-[15px] font-bold text-navy hover:bg-warm"
          >
            CONTINUAR APENAS COM O ESSENCIAL POR {offerConfig.ENTRY_PRICE}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 text-[14px] text-muted hover:text-navy"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}
