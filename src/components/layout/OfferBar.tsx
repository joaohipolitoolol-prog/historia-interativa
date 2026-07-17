import { offerConfig } from '@/config/offerConfig'

const ITEMS = [
  'OFERTA DE LANÇAMENTO',
  'MAIS DE 500 ATIVIDADES',
  'A PARTIR DE R$ 10',
  'PAGAMENTO ÚNICO',
  `GARANTIA DE ${offerConfig.GUARANTEE_DAYS} DIAS`,
  'IMPRIMIR OU PROJETAR',
]

export function OfferBar() {
  if (!offerConfig.SHOW_TOP_BAR) return null

  if (offerConfig.SHOW_DISCOUNT_PERCENTAGE) {
    return (
      <div className="bg-navy text-white">
        <div className="container-page py-2.5 text-center text-[12px] sm:text-[13px] font-semibold tracking-[0.04em]">
          {offerConfig.OFFER_BAR_TEXT_DISCOUNT}
        </div>
      </div>
    )
  }

  const track = [...ITEMS, ...ITEMS]

  return (
    <div className="bg-navy text-white overflow-hidden" aria-label="Oferta de lançamento">
      <div className="flex whitespace-nowrap py-2.5 animate-marquee will-change-transform">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase"
          >
            <span className="px-3 sm:px-4">{item}</span>
            <span aria-hidden="true" className="text-orange-light/80">
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
