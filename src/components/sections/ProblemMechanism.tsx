import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { useInViewTrack } from '@/hooks/useInViewTrack'

const steps = [
  {
    n: '1',
    t: 'Escolha o tema',
    d: 'Encontre o conteúdo que será trabalhado.',
  },
  {
    n: '2',
    t: 'Abra a atividade',
    d: 'Consulte o material pronto.',
  },
  {
    n: '3',
    t: 'Imprima ou projete',
    d: 'Escolha como aplicar com a turma.',
  },
  {
    n: '4',
    t: 'Aplique na aula',
    d: 'Use individualmente, em grupos ou como revisão.',
  },
]

export function ProblemMechanism() {
  const ref = useInViewTrack('MechanismViewed')

  return (
    <Section id="sistema" tone="cool" compact>
      <div ref={ref} className="section-intro">
        <SectionTitle centered>
          Preparar aula não deveria consumir todo o seu tempo livre
        </SectionTitle>
        <SectionLead centered>
          Entre corrigir atividades, organizar notas e lidar com várias turmas,
          você ainda precisa procurar textos, imagens e exercícios para a
          próxima aula. O Sistema Aula Pronta reúne essa parte em um único
          acesso para você não precisar começar tudo do zero novamente.
        </SectionLead>
      </div>

      <ol className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {steps.map((s) => (
          <li
            key={s.n}
            className="rounded-2xl border border-border bg-white p-4 text-left shadow-[var(--shadow-soft)]"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange text-white text-[14px] font-extrabold">
              {s.n}
            </span>
            <p className="mt-2.5 text-[15px] font-bold text-navy">{s.t}</p>
            <p className="mt-1 text-[14px] leading-snug text-muted">{s.d}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
