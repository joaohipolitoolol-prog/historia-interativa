import { offerConfig } from '@/config/offerConfig'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  return (
    <section id="cta-final" className="relative overflow-hidden bg-navy py-11 sm:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-3 bg-orange"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 50% 0%, rgba(255,90,31,0.28), transparent 55%)',
        }}
      />
      <div className="container-page relative text-center">
        <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-orange-light">
          {offerConfig.NUMBER_OF_ACTIVITIES} atividades prontas
        </p>
        <h2 className="mt-2 text-[24px] sm:text-[32px] font-extrabold text-white text-balance max-w-2xl mx-auto">
          Sua próxima aula não precisa começar do zero
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] text-white/70">
          Essencial por {offerConfig.ENTRY_PRICE} ou Premium por{' '}
          {offerConfig.PREMIUM_PRICE}.
        </p>
        <div className="mt-5 flex justify-center">
          <Button mode="scroll-to-plans" className="w-full max-w-xs !py-3 !text-[15px]">
            ESCOLHER MEU ACESSO
          </Button>
        </div>
        <p className="mt-2.5 text-[12px] text-white/50">
          Pagamento único · Garantia {offerConfig.GUARANTEE_DAYS} dias
        </p>
      </div>
    </section>
  )
}
