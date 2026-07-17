import { offerConfig } from '@/config/offerConfig'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  return (
    <section id="cta-final" className="relative overflow-hidden bg-navy py-11 sm:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-2.5 bg-orange"
      />
      <div className="container-page relative text-center">
        <h2 className="text-[24px] sm:text-[32px] font-extrabold text-white text-balance max-w-2xl mx-auto">
          Sua próxima aula não precisa começar do zero
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-[15px] sm:text-[16px] text-white/70">
          Escolha entre as {offerConfig.NUMBER_OF_ACTIVITIES} atividades por{' '}
          {offerConfig.ENTRY_PRICE} ou o sistema completo por{' '}
          {offerConfig.PREMIUM_PRICE}.
        </p>
        <div className="mt-5 flex justify-center">
          <Button
            mode="scroll-to-plans"
            trackAs="HeroCTAClicked"
            className="w-full max-w-xs !py-3"
          >
            ESCOLHER MEU ACESSO
          </Button>
        </div>
        <p className="mt-2.5 text-[13px] text-white/50">
          Pagamento único • Acesso digital • Garantia de{' '}
          {offerConfig.GUARANTEE_DAYS} dias
        </p>
      </div>
    </section>
  )
}
