import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { useInViewTrack } from '@/hooks/useInViewTrack'

export function Guarantee() {
  const ref = useInViewTrack('GuaranteeViewed')

  return (
    <Section id="garantia" tone="white">
      <div
        ref={ref}
        className="mx-auto max-w-3xl rounded-3xl border border-green/25 bg-green/5 p-6 sm:p-10 text-center"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green text-white text-[22px] font-extrabold">
          {offerConfig.GUARANTEE_DAYS}
        </div>
        <SectionTitle className="mt-5">
          Conheça o material por {offerConfig.GUARANTEE_DAYS} dias
        </SectionTitle>
        <SectionLead className="mx-auto">
          Após a compra, você poderá acessar o plano escolhido e conferir como
          os materiais estão organizados.
        </SectionLead>
        <div className="mt-4 space-y-3 text-[16px] leading-relaxed text-muted">
          <p>
            Caso perceba que o produto não atende ao que você procura, poderá
            solicitar o reembolso dentro do prazo de {offerConfig.GUARANTEE_DAYS}{' '}
            dias, conforme as regras da plataforma de pagamento.
          </p>
          <p className="font-semibold text-navy">O risco fica com a oferta.</p>
        </div>
      </div>
    </Section>
  )
}
