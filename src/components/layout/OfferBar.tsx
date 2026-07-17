import { offerConfig } from '@/config/offerConfig'

const DEFAULT_ITEMS = [
  'OFERTA DE LANÇAMENTO',
  'MAIS DE 500 ATIVIDADES',
  'A PARTIR DE R$ 10',
  'PAGAMENTO ÚNICO',
  'GARANTIA DE 30 DIAS',
]

export function OfferBar() {
  if (!offerConfig.SHOW_TOP_BAR) return null

  const items = offerConfig.SHOW_DISCOUNT_PERCENTAGE
    ? [
        'OFERTA DE LANÇAMENTO',
        'ATÉ 73% DE DESCONTO',
        'A PARTIR DE R$ 10',
        'GARANTIA DE 30 DIAS',
      ]
    : DEFAULT_ITEMS

  const sequence = [...items, ...items]

  return (
    <div className="bg-navy text-white overflow-hidden" aria-label={items.join(' · ')}>
      <div className="flex whitespace-nowrap py-2.5 animate-marquee motion-reduce:animate-none">
        {sequence.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] px-3"
          >
            <span>{item}</span>
            <span aria-hidden="true" className="mx-3 text-orange-light/80">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
