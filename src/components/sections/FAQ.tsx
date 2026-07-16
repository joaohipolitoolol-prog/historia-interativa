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
      'O Essencial inclui a biblioteca principal com mais de 500 atividades. O Premium inclui tudo do Essencial e adiciona avaliações, planos de aula, planejamento anual, materiais visuais extras e o guia de aulas participativas.',
  },
  {
    question: 'O plano de R$ 10 inclui mesmo as 500 atividades?',
    answer:
      'Sim. O Plano Essencial entrega o acervo principal com mais de 500 atividades. Os extras de avaliação e planejamento estão no Premium.',
  },
  {
    question: 'Como recebo o material?',
    answer:
      'Após a confirmação do pagamento, você recebe o acesso digital pela plataforma utilizada na compra.',
  },
  {
    question: 'Existe mensalidade?',
    answer: 'Não. Os dois planos têm pagamento único.',
  },
  {
    question: 'Os materiais extras do checkout são obrigatórios?',
    answer:
      'Não. Os order bumps no checkout são opcionais e separados do Premium.',
  },
  {
    question: 'Tem garantia?',
    answer: `Sim. Você pode solicitar reembolso em até ${offerConfig.GUARANTEE_DAYS} dias, conforme as regras da plataforma de pagamento.`,
  },
]

export function FAQ() {
  return (
    <Section id="faq" tone="warm" compact>
      <div className="section-intro">
        <SectionTitle centered>Perguntas frequentes</SectionTitle>
        <SectionLead centered>
          Respostas rápidas sobre planos, acesso e garantia.
        </SectionLead>
      </div>
      <div className="mt-8 max-w-3xl mx-auto">
        <Accordion items={faqItems} />
      </div>
    </Section>
  )
}
