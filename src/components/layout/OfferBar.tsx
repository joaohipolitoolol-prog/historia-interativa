import { offerConfig } from '@/config/offerConfig'

export function OfferBar() {
  return (
    <div className="bg-navy text-white">
      <div className="container-page py-2.5 text-center text-[12px] sm:text-[13px] font-semibold tracking-[0.08em]">
        {offerConfig.OFFER_BAR_TEXT}
      </div>
    </div>
  )
}
