import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'

const forYou = [
  'Dá aulas de História para várias turmas',
  'Sente que perde muito tempo preparando atividades',
  'Quer variar o formato das aulas',
  'Precisa de materiais para imprimir',
  'Procura recursos para projetar',
  'Quer organizar melhor o planejamento',
  'Trabalha com Ensino Fundamental ou Ensino Médio',
  'Precisa preparar aulas com pouco tempo disponível',
  'Está começando a dar aulas',
  'Quer criar uma biblioteca própria de materiais',
]

const notForYou = [
  'Procura um material físico enviado pelo correio',
  'Espera que o material substitua completamente o planejamento',
  'Precisa de um conteúdo personalizado para uma única escola',
  'Não pretende adaptar nenhuma atividade à realidade da turma',
  'Está procurando uma formação ou graduação em História',
]

export function ForWhom() {
  return (
    <Section id="para-quem" tone="warm">
      <SectionTitle>O {offerConfig.PRODUCT_NAME} é para você que...</SectionTitle>
      <SectionLead>
        Feito para quem precisa de material organizado e aplicável, não de mais
        ideias soltas.
      </SectionLead>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-white p-6">
          <h3 className="text-[18px] font-extrabold text-green">
            Ideal se você...
          </h3>
          <ul className="mt-5 space-y-3">
            {forYou.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] sm:text-[16px] text-ink"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 text-green font-bold"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-white p-6">
          <h3 className="text-[18px] font-extrabold text-muted">
            Este produto não é para você se...
          </h3>
          <ul className="mt-5 space-y-3">
            {notForYou.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] sm:text-[16px] text-muted"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 font-bold text-[#B4533A]"
                >
                  ×
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
