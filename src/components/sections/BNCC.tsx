import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'

const elements = [
  'Habilidade',
  'Série ou etapa',
  'Tema',
  'Objetivo da atividade',
  'Formato de aplicação',
  'Material necessário',
]

export function BNCC() {
  if (!offerConfig.BNCC_ENABLED) return null

  return (
    <Section id="bncc" tone="white">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionTitle>
            Atividades organizadas para facilitar seu planejamento
          </SectionTitle>
          <SectionLead>
            Os materiais devem apresentar, quando aplicável, as competências e
            habilidades da BNCC relacionadas ao conteúdo trabalhado.
          </SectionLead>
          <div className="mt-4 space-y-3 text-[16px] leading-relaxed text-muted">
            <p>
              Isso não substitui o planejamento pedagógico do professor. A
              organização serve como apoio para localizar, selecionar e
              registrar os materiais utilizados.
            </p>
            <p className="rounded-xl border border-orange/20 bg-orange-soft px-4 py-3 font-semibold text-navy">
              {offerConfig.BNCC_CLAIM}
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-navy p-6 sm:p-8 text-white">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-orange-light">
            Organização visual
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {elements.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] font-semibold"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
