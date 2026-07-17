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
    <Section id="garantia" tone="green-soft" compact>
      <div
        ref={ref}
        className="mx-auto max-w-2xl text-center rounded-[24px] border border-green/20 bg-white/70 p-6 sm:p-8"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green text-white text-[20px] font-extrabold">
          {offerConfig.GUARANTEE_DAYS}
        </div>
        <SectionTitle centered className="mt-4">
          Explore tudo por {offerConfig.GUARANTEE_DAYS} dias
        </SectionTitle>
        <SectionLead centered>
          Acesse o plano escolhido, conheça os materiais e veja como eles se
          encaixam na sua rotina. Caso perceba que o produto não é para você,
          solicite o reembolso dentro do prazo de {offerConfig.GUARANTEE_DAYS}{' '}
          dias, conforme as condições informadas na plataforma.
        </SectionLead>
      </div>
    </Section>
  )
}
