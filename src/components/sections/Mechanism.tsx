import {
  Section,
  SectionLabel,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { useInViewTrack } from '@/hooks/useInViewTrack'

const steps = [
  {
    number: '01',
    title: 'Escolha o conteúdo',
    description: 'Encontre o tema histórico que será trabalhado.',
  },
  {
    number: '02',
    title: 'Abra a atividade',
    description: 'Consulte a proposta, o formato e a aplicação.',
  },
  {
    number: '03',
    title: 'Imprima ou projete',
    description: 'Baixe o material e escolha como utilizar.',
  },
  {
    number: '04',
    title: 'Aplique com a turma',
    description:
      'Use individualmente, em grupos, como introdução ou revisão.',
  },
]

export function Mechanism() {
  const ref = useInViewTrack('MechanismViewed')

  return (
    <Section id="sistema" tone="cool" className="!pt-14">
      <div ref={ref}>
        <SectionLabel>UM PROCESSO SIMPLES</SectionLabel>
        <SectionTitle>Escolha o tema, abra o material e aplique</SectionTitle>
        <SectionLead>
          O Sistema Aula Pronta organiza os materiais para você encontrar o que
          precisa sem começar novamente a cada planejamento.
        </SectionLead>

        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-[var(--shadow-soft)]"
            >
              <span className="text-[28px] font-extrabold text-orange/90 font-[family-name:var(--font-display)]">
                {step.number}
              </span>
              <h3 className="mt-3 text-[18px] font-extrabold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <blockquote className="mt-10 rounded-2xl border-l-4 border-orange bg-white p-5 sm:p-6 text-[16px] sm:text-[17px] font-semibold text-navy leading-relaxed">
          Você continua no controle da aula. O sistema elimina apenas a parte
          repetitiva de procurar e montar tudo do zero.
        </blockquote>

        <div className="mt-8">
          <Button mode="scroll-to-plans">VER PLANOS</Button>
        </div>
      </div>
    </Section>
  )
}
