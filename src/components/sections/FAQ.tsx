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
      'O Essencial inclui o acervo principal com mais de 500 atividades. O Premium inclui tudo do Essencial e adiciona avaliações, planos de aula, planejamento anual e materiais extras.',
  },
  {
    question: 'O plano de R$ 10 inclui mesmo as 500+ atividades?',
    answer:
      'Sim. O Plano Essencial entrega o acervo principal com as mais de 500 atividades anunciadas.',
  },
  {
    question: 'Como recebo o material?',
    answer:
      'O acesso é liberado após a confirmação do pagamento. Você receberá as orientações pelo e-mail informado na compra.',
  },
  {
    question: 'Existe mensalidade?',
    answer: 'Não. Os dois planos possuem pagamento único.',
  },
  {
    question: 'Preciso imprimir tudo?',
    answer:
      'Não. Você pode imprimir apenas os materiais desejados. Alguns conteúdos também podem ser projetados.',
  },
  {
    question: 'Funciona para quais turmas?',
    answer:
      'O acervo reúne materiais para diferentes conteúdos do Ensino Fundamental e Médio. O professor deve selecionar os materiais adequados à realidade da turma.',
  },
  {
    question: 'Tem garantia?',
    answer: `Sim. Você terá ${offerConfig.GUARANTEE_DAYS} dias para conhecer o produto e solicitar o reembolso dentro do prazo, conforme as condições da plataforma.`,
  },
  {
    question: 'Os produtos adicionais do checkout são obrigatórios?',
    answer:
      'Não. Qualquer produto adicional apresentado no checkout é opcional.',
  },
]

export function FAQ() {
  return (
    <Section id="faq" tone="white" compact>
      <div className="section-intro">
        <SectionTitle centered>Perguntas frequentes</SectionTitle>
        <SectionLead centered>Planos, acesso e garantia.</SectionLead>
      </div>
      <div className="mt-6 max-w-3xl mx-auto">
        <Accordion items={faqItems} />
      </div>
    </Section>
  )
}
