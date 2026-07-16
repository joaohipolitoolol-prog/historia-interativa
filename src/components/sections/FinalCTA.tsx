import { offerConfig } from '@/config/offerConfig'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  return (
    <section
      id="cta-final"
      className="relative overflow-hidden bg-navy py-14 sm:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 20% 20%, rgba(255,90,31,0.35), transparent 50%), radial-gradient(ellipse 50% 50% at 90% 80%, rgba(255,200,61,0.18), transparent 45%)',
        }}
      />
      <div className="container-page relative text-center">
        <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold text-white text-balance max-w-3xl mx-auto">
          Sua próxima aula não precisa começar com uma página em branco
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[16px] sm:text-[17px] leading-relaxed text-white/75">
          Escolha entre mais de {offerConfig.NUMBER_OF_ACTIVITIES} atividades
          por {offerConfig.ENTRY_PRICE} ou o sistema completo por{' '}
          {offerConfig.PREMIUM_PRICE}.
        </p>
        <div className="mt-7">
          <Button mode="scroll-to-plans" className="min-w-[260px]">
            ESCOLHER MEU PLANO
          </Button>
        </div>
        <p className="mt-3 text-[14px] text-white/65">
          Pagamento único • Acesso digital • Garantia de{' '}
          {offerConfig.GUARANTEE_DAYS} dias
        </p>
      </div>
    </section>
  )
}
