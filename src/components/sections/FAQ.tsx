import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { Accordion } from '@/components/ui/Accordion'

const faqItems = [
  {
    question: 'Qual é a diferença entre Essencial e Premium?',
    answer:
      'O Essencial inclui a biblioteca principal com mais de 500 atividades de História. O Premium inclui tudo do Essencial e adiciona avaliações, planos de aula, planejamento anual, materiais visuais extras e o guia de aulas participativas.',
  },
  {
    question: 'O plano de R$ 10 inclui realmente as 500 atividades?',
    answer:
      'Sim. O Plano Essencial inclui o acervo principal com mais de 500 atividades. Os materiais extras de avaliação e planejamento fazem parte do Premium.',
  },
  {
    question: 'Posso comprar o Essencial e mudar depois?',
    answer:
      'Hoje a compra é feita por plano no checkout. Caso exista um processo de upgrade na plataforma utilizada, ele será informado no suporte. Não há upgrade automático nesta página.',
  },
  {
    question: 'Existe mensalidade?',
    answer: 'Não. Os dois planos possuem pagamento único.',
  },
  {
    question: 'O Premium custa apenas R$ 12,90?',
    answer: `Não. O valor total do Premium é ${offerConfig.PREMIUM_PRICE}. Ele custa ${offerConfig.PREMIUM_PRICE_DIFFERENCE} a mais que o Essencial.`,
  },
  {
    question: 'Os order bumps são obrigatórios?',
    answer:
      'Não. Os materiais adicionais apresentados no checkout são opcionais.',
  },
  {
    question: 'Os order bumps já estão incluídos no Premium?',
    answer:
      'Não. O Premium inclui os materiais informados na página. Os produtos adicionais do checkout são coleções separadas e opcionais.',
  },
  {
    question: 'Como recebo o material?',
    answer:
      'Após a confirmação do pagamento, você receberá as informações para acessar o conteúdo digital pela plataforma utilizada na compra.',
  },
  {
    question: 'O produto é físico?',
    answer:
      'Não. O História Interativa é um produto digital. Você acessa pelo celular ou computador e pode imprimir os materiais desejados.',
  },
  {
    question: 'Recebo tudo na hora?',
    answer:
      'O acesso é liberado após a confirmação do pagamento, conforme o prazo da forma de pagamento escolhida.',
  },
  {
    question: 'As atividades seguem a BNCC?',
    answer:
      'Os materiais são organizados com base em temas, competências e habilidades relacionadas à BNCC. O professor continua responsável por avaliar a adequação à turma, escola e planejamento.',
  },
  {
    question: 'Tem garantia?',
    answer: `Sim. Você poderá solicitar o reembolso dentro do prazo de ${offerConfig.GUARANTEE_DAYS} dias, conforme as regras da plataforma de pagamento.`,
  },
  {
    question: 'As atividades são editáveis?',
    answer:
      'Os materiais são disponibilizados em PDF, prontos para imprimir ou projetar. Eles não são arquivos editáveis de texto; você usa o conteúdo pronto e adapta a aplicação à sua turma.',
  },
]

export function FAQ() {
  return (
    <Section id="faq" tone="warm">
      <SectionTitle>Perguntas frequentes</SectionTitle>
      <SectionLead>
        Respostas sobre planos, acesso, BNCC e garantia.
      </SectionLead>
      <div className="mt-8 max-w-3xl">
        <Accordion items={faqItems} />
      </div>
    </Section>
  )
}
