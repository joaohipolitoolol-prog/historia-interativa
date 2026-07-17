import { offerConfig } from '@/config/offerConfig'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  return (
    <section id="cta-final" className="relative overflow-hidden bg-navy py-10 sm:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 20% 20%, rgba(255,90,31,0.35), transparent 50%)',
        }}
      />
      <div className="container-page relative text-center">
        <h2 className="text-[24px] sm:text-[34px] font-extrabold text-white text-balance max-w-3xl mx-auto">
          Sua próxima aula não precisa começar com uma página em branco
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[15px] text-white/75">
          {offerConfig.NUMBER_OF_ACTIVITIES} atividades por{' '}
          {offerConfig.ENTRY_PRICE} ou o sistema completo por{' '}
          {offerConfig.PREMIUM_PRICE}.
        </p>
        <div className="mt-5">
          <Button mode="scroll-to-plans" className="min-w-[240px] !py-3 !text-[15px]">
            ESCOLHER MEU ACESSO
          </Button>
        </div>
        <p className="mt-2.5 text-[12px] text-white/55">
          Pagamento único · Acesso digital · Garantia{' '}
          {offerConfig.GUARANTEE_DAYS} dias
        </p>
      </div>
    </section>
  )
}
