import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'

const cards = [
  {
    title: 'Horas procurando materiais',
    description:
      'Você encontra uma atividade aqui, uma imagem ali e ainda precisa organizar tudo antes da aula.',
  },
  {
    title: 'Alunos pouco envolvidos',
    description:
      'Quando a aula fica limitada à explicação e leitura, a participação pode cair rapidamente.',
  },
  {
    title: 'Conteúdo espalhado',
    description:
      'Arquivos, links, exercícios e imagens ficam separados, dificultando o planejamento.',
  },
  {
    title: 'Cobrança da BNCC',
    description:
      'Além de ensinar o conteúdo, você ainda precisa relacionar atividades às competências e habilidades curriculares.',
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
        mapas e exercícios para a próxima aula.
      </SectionLead>
      <div className="mt-5 max-w-2xl space-y-4 text-[16px] leading-relaxed text-muted">
        <p>Muitas vezes, o planejamento começa do zero.</p>
        <p>
          Você abre várias abas, salva arquivos separados e tenta montar algo
          que seja fácil de entender e interessante para a turma.
        </p>
        <p className="font-semibold text-navy">
          O História Interativa foi criado para eliminar essa parte repetitiva.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {cards.map((card, index) => (
          <article
            key={card.title}
            className="rounded-2xl border border-border bg-warm p-5 sm:p-6"
          >
            <p className="text-[13px] font-bold text-orange">
              0{index + 1}
            </p>
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
