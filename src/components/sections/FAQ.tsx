import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { Accordion } from '@/components/ui/Accordion'

const faqItems = [
  {
    question: 'Qual a diferença entre Essencial e Premium?',
    answer:
      'O Essencial inclui as mais de 500 atividades. O Premium inclui as atividades e adiciona avaliações, planos de aula, planejamento anual, mapas, linhas do tempo e o guia de aulas participativas.',
  },
  {
    question: 'O plano de R$ 10 inclui mesmo as 500 atividades?',
    answer:
      'Sim. O Essencial entrega o acervo principal anunciado. Avaliações, planos de aula, planejamento e materiais visuais extras estão no Premium.',
  },
  {
    question: 'Como recebo o material?',
    answer:
      'Após a confirmação do pagamento, o acesso digital é liberado pela plataforma utilizada na compra.',
  },
  {
    question: 'Existe mensalidade?',
    answer: 'Não. Todos os planos têm pagamento único.',
  },
  {
    question: 'O Pack de Slides é obrigatório?',
    answer:
      'Não. O order bump no checkout é opcional e separado dos planos.',
  },
  {
    question: 'Tem garantia?',
    answer: `Sim. Você pode solicitar reembolso em até ${offerConfig.GUARANTEE_DAYS} dias, conforme as regras da plataforma.`,
  },
]

export function FAQ() {
  return (
    <Section id="faq" tone="white" compact>
      <div className="section-intro">
        <SectionTitle centered>Perguntas frequentes</SectionTitle>
        <SectionLead centered>Planos, acesso e garantia.</SectionLead>
      </div>
      <div className="mt-7 max-w-3xl mx-auto">
        <Accordion items={faqItems} />
      </div>
    </Section>
  )
}
