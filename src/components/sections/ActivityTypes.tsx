import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'

const types = [
  {
    title: 'Atividades de introdução',
    description:
      'Para apresentar um novo tema e ativar conhecimentos prévios.',
  },
  {
    title: 'Atividades de revisão',
    description:
      'Para retomar conteúdos antes de provas e avaliações.',
  },
  {
    title: 'Linhas do tempo',
    description:
      'Para organizar acontecimentos e facilitar a compreensão de sequência histórica.',
  },
  {
    title: 'Mapas históricos',
    description:
      'Para trabalhar território, localização, expansão e transformações geográficas.',
  },
  {
    title: 'Jogos e dinâmicas',
    description:
      'Para aumentar a participação e trabalhar conteúdos de forma mais ativa.',
  },
  {
    title: 'Interpretação de textos e imagens',
    description:
      'Para desenvolver análise, leitura e argumentação.',
  },
  {
    title: 'Atividades individuais',
    description:
      'Para tarefas, exercícios e acompanhamento da aprendizagem.',
  },
  {
    title: 'Atividades em grupo',
    description:
      'Para debates, desafios e construção coletiva.',
  },
  {
    title: 'Recursos para projetar',
    description:
      'Para usar diretamente na sala sem precisar imprimir.',
  },
  {
    title: 'Materiais para imprimir',
    description:
      'PDFs organizados e prontos para entregar aos alunos.',
  },
]

export function ActivityTypes() {
  return (
    <Section id="tipos" tone="warm">
      <SectionTitle>Uma biblioteca para diferentes momentos da aula</SectionTitle>
      <SectionLead>
        Não é só exercício. São formatos pensados para introdução, revisão,
        participação e aplicação em sala.
      </SectionLead>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {types.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border bg-white p-5"
          >
            <h3 className="text-[18px] font-extrabold text-navy">
              {item.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
