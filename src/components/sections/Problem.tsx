import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'

const cards = [
  {
    title: 'Horas procurando materiais',
    description:
      'Você encontra uma atividade em um site, uma imagem em outro e ainda precisa organizar tudo.',
  },
  {
    title: 'Alunos pouco envolvidos',
    description:
      'Quando a aula fica restrita à leitura e explicação, a participação pode diminuir.',
  },
  {
    title: 'Conteúdo espalhado',
    description:
      'Arquivos, links e exercícios separados tornam o planejamento mais cansativo.',
  },
  {
    title: 'Organização curricular',
    description:
      'Além do conteúdo, o professor precisa relacionar materiais ao planejamento e à BNCC.',
  },
]

export function Problem() {
  return (
    <Section id="problema" tone="white">
      <SectionTitle>
        Preparar aula não deveria consumir todo o seu tempo livre
      </SectionTitle>
      <SectionLead>
        Entre corrigir atividades, organizar notas, responder alunos e lidar
        com várias turmas, ainda sobra para você procurar textos, imagens,
        perguntas e exercícios para a próxima aula.
      </SectionLead>
      <div className="mt-5 max-w-2xl space-y-4 text-[16px] leading-relaxed text-muted">
        <p>O problema não é falta de dedicação.</p>
        <p>
          É precisar começar praticamente do zero a cada novo conteúdo.
        </p>
        <p className="font-semibold text-navy">
          O História Interativa reúne mais de 500 atividades em uma biblioteca
          organizada para facilitar essa parte do planejamento.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {cards.map((card, index) => (
          <article
            key={card.title}
            className="rounded-2xl border border-border bg-warm p-5 sm:p-6"
          >
            <p className="text-[13px] font-bold text-orange">0{index + 1}</p>
            <h3 className="mt-2 text-[18px] font-extrabold text-navy">
              {card.title}
            </h3>
            <p className="mt-2 text-[15px] sm:text-[16px] leading-relaxed text-muted">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
