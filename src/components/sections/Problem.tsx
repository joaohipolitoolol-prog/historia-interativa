import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'

const cards = [
  {
    title: 'Horas procurando materiais',
    description: 'Uma atividade aqui, uma imagem ali — e ainda falta organizar.',
  },
  {
    title: 'Alunos pouco envolvidos',
    description: 'Só leitura e explicação deixam a participação cair rápido.',
  },
  {
    title: 'Conteúdo espalhado',
    description: 'Arquivos e links separados tornam o planejamento cansativo.',
  },
  {
    title: 'Organização curricular',
    description: 'Além do conteúdo, ainda falta relacionar tudo à BNCC.',
  },
]

export function Problem() {
  return (
    <Section id="problema" tone="white" compact>
      <div className="section-intro">
        <SectionTitle centered>
          Preparar aula não deveria consumir todo o seu tempo livre
        </SectionTitle>
        <SectionLead centered>
          Entre corrigir atividades, organizar notas e lidar com várias turmas,
          ainda sobra para você procurar textos, imagens, perguntas e exercícios.
          O História Interativa organiza essa parte para você não precisar
          começar tudo do zero de novo.
        </SectionLead>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-border bg-warm p-5"
          >
            <h3 className="text-[17px] font-extrabold text-navy">{card.title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
