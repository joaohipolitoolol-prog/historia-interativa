import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { useInViewTrack } from '@/hooks/useInViewTrack'

const bonuses = [
  {
    name: 'Banco de Avaliações de História',
    description:
      'Avaliações, exercícios diagnósticos e atividades de revisão para diferentes conteúdos.',
  },
  {
    name: 'Planos de Aula Prontos',
    description:
      'Modelos para organizar objetivos, conteúdo, aplicação e fechamento da aula.',
  },
  {
    name: 'Planejamento de História',
    description:
      'Material de apoio para distribuir temas e conteúdos ao longo do período letivo.',
  },
  {
    name: 'Linhas do Tempo e Mapas Históricos',
    description:
      'Recursos visuais para imprimir, projetar e complementar as explicações.',
  },
  {
    name: 'Guia Para Aulas Mais Participativas',
    description:
      'Sugestões práticas para usar atividades, perguntas, grupos e dinâmicas sem complicar a aula.',
  },
]

export function Bonuses() {
  const ref = useInViewTrack('BonusViewed')

  return (
    <Section id="bonus" tone="white">
      <div ref={ref}>
        <SectionTitle>Bônus incluídos nesta oferta</SectionTitle>
        <SectionLead>
          Recursos complementares para apoiar avaliação, planejamento e
          aplicação das aulas — sem valores fictícios.
        </SectionLead>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {bonuses.map((bonus, index) => (
            <article
              key={bonus.name}
              className="rounded-2xl border border-border bg-warm p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-[13px] font-bold text-orange">
                  Bônus {index + 1}
                </p>
                <span className="shrink-0 rounded-full bg-green/10 px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-green">
                  Incluído nesta oferta
                </span>
              </div>
              <h3 className="mt-3 text-[18px] font-extrabold text-navy">
                {bonus.name}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {bonus.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
