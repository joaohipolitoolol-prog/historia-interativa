import {
  Section,
  SectionLabel,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { useInViewTrack } from '@/hooks/useInViewTrack'

const steps = [
  { number: '01', title: 'Escolha o conteúdo', description: 'Encontre o tema histórico da aula.' },
  { number: '02', title: 'Abra a atividade', description: 'Veja a proposta e o formato.' },
  { number: '03', title: 'Imprima ou projete', description: 'Baixe e escolha como usar.' },
  { number: '04', title: 'Aplique com a turma', description: 'Individual, grupo ou revisão.' },
]

export function Mechanism() {
  const ref = useInViewTrack('MechanismViewed')

  return (
    <Section id="sistema" tone="cool" compact>
      <div ref={ref}>
        <div className="section-intro">
          <SectionLabel className="text-center">Sistema Aula Pronta</SectionLabel>
          <SectionTitle centered>
            Escolha o tema, abra o material e aplique
          </SectionTitle>
          <SectionLead centered>
            Um processo simples para encontrar o que precisa sem montar tudo de
            novo a cada planejamento.
          </SectionLead>
        </div>

        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-soft)]"
            >
              <span className="text-[24px] font-extrabold text-orange font-[family-name:var(--font-display)]">
                {step.number}
              </span>
              <h3 className="mt-2 text-[17px] font-extrabold text-navy">
                {step.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-center text-[15px] sm:text-[16px] font-semibold text-navy text-balance max-w-2xl mx-auto">
          Você continua no controle da aula. O sistema elimina apenas a parte
          repetitiva de procurar e montar tudo do zero.
        </p>
      </div>
    </Section>
  )
}
