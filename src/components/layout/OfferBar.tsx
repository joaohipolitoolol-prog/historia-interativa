import { offerConfig } from '@/config/offerConfig'

export function OfferBar() {
  if (!offerConfig.SHOW_TOP_BAR) return null

  const text = offerConfig.SHOW_DISCOUNT_PERCENTAGE
    ? offerConfig.OFFER_BAR_TEXT_DISCOUNT
    : offerConfig.OFFER_BAR_TEXT

  return (
    <div className="bg-navy text-white">
      <div className="container-page py-2.5 text-center text-[12px] sm:text-[13px] font-semibold tracking-[0.05em]">
        {text}
      </div>
    </div>
  )
}
