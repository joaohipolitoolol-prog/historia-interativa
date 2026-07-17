import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { useInViewTrack } from '@/hooks/useInViewTrack'

const steps = [
  { n: '1', t: 'Escolha o tema' },
  { n: '2', t: 'Abra a atividade' },
  { n: '3', t: 'Imprima ou projete' },
  { n: '4', t: 'Aplique com a turma' },
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
          você ainda precisa procurar textos, imagens e exercícios. O Sistema
          Aula Pronta organiza essa parte para você.
        </SectionLead>
      </div>

      <ol className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {steps.map((s) => (
          <li
            key={s.n}
            className="rounded-2xl border border-border bg-white p-4 sm:p-5 text-center shadow-[var(--shadow-soft)]"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange text-white text-[15px] font-extrabold">
              {s.n}
            </span>
            <p className="mt-3 text-[15px] sm:text-[16px] font-bold text-navy">
              {s.t}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
