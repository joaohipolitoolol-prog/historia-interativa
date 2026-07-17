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
        className="mx-auto max-w-xl text-center px-1"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green text-white shadow-[0_10px_28px_rgba(13,174,120,0.35)]">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 3l7 3v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3z"
              fill="currentColor"
              opacity="0.25"
            />
            <path
              d="M12 3l7 3v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3z"
              stroke="currentColor"
              strokeWidth="1.8"
              fill="none"
            />
            <path
              d="M8.5 12.2l2.2 2.2 4.8-4.8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="mt-3 text-[13px] font-bold uppercase tracking-[0.12em] text-green">
          {offerConfig.GUARANTEE_DAYS} dias
        </p>
        <SectionTitle centered className="mt-1.5 !text-[24px] sm:!text-[28px]">
          Explore tudo com tranquilidade
        </SectionTitle>
        <SectionLead centered className="!text-[15px]">
          Conheça os materiais no seu ritmo. Se não fizer sentido para sua
          rotina, solicite o reembolso em até {offerConfig.GUARANTEE_DAYS} dias,
          conforme as condições da plataforma.
        </SectionLead>
      </div>
    </Section>
  )
}
