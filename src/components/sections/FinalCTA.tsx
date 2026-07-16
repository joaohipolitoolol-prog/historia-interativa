import { offerConfig } from '@/config/offerConfig'
import { Button } from '@/components/ui/Button'

type FinalCTAProps = {
  ctaLabel: string
}

export function FinalCTA({ ctaLabel }: FinalCTAProps) {
  return (
    <section id="cta-final" className="relative overflow-hidden bg-navy py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 20% 20%, rgba(255,90,31,0.35), transparent 50%), radial-gradient(ellipse 50% 50% at 90% 80%, rgba(255,200,61,0.18), transparent 45%)',
        }}
      />
      <div className="container-page relative text-center">
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-extrabold text-white text-balance">
          Sua próxima aula não precisa começar com uma página em branco
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[16px] sm:text-[18px] leading-relaxed text-white/75">
          Acesse {offerConfig.NUMBER_OF_ACTIVITIES} atividades de História,
          escolha o tema e encontre um material pronto para imprimir ou
          projetar.
        </p>
        <div className="mt-8">
          <Button position="final" className="min-w-[280px]">
            {ctaLabel}
          </Button>
          <p className="mt-3 text-[14px] sm:text-[15px] text-white/65">
            {offerConfig.PRODUCT_PRICE} • Pagamento único • Garantia de{' '}
            {offerConfig.GUARANTEE_DAYS} dias
          </p>
        </div>
      </div>
    </section>
  )
}
