import { offerConfig } from '@/config/offerConfig'
import { Section } from '@/components/ui/Section'
import { useInViewTrack } from '@/hooks/useInViewTrack'

export function Guarantee() {
  const ref = useInViewTrack('GuaranteeViewed')

  return (
    <Section id="garantia" tone="green-soft" compact>
      <div
        ref={ref}
        className="mx-auto flex max-w-xl items-start gap-4 rounded-3xl border border-green/15 bg-white px-5 py-5 sm:px-6 sm:py-6"
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green text-white text-[14px] font-extrabold">
          {offerConfig.GUARANTEE_DAYS}d
        </div>
        <div className="min-w-0 text-left">
          <h2 className="text-[20px] sm:text-[24px] font-extrabold text-navy text-balance">
            Explore tudo por {offerConfig.GUARANTEE_DAYS} dias
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-muted">
            Conheça os materiais no seu ritmo. Se não fizer sentido para você,
            solicite o reembolso em até {offerConfig.GUARANTEE_DAYS} dias,
            conforme as condições da plataforma.
          </p>
        </div>
      </div>
    </Section>
  )
}
