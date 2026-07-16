import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { Accordion } from '@/components/ui/Accordion'

const faqItems = [
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
    question: 'Posso usar com mais de uma turma?',
    answer:
      'O material pode ser utilizado pelo comprador em suas próprias turmas, respeitando os termos de uso. Não é permitido revender, distribuir ou disponibilizar os arquivos publicamente.',
  },
  {
    question: 'Preciso imprimir tudo?',
    answer:
      'Não. Você pode imprimir apenas as atividades que deseja utilizar. Alguns materiais também podem ser projetados em sala.',
  },
  {
    question: 'Funciona para qual etapa?',
    answer:
      'O material reúne recursos para diferentes conteúdos do Ensino Fundamental e Ensino Médio. Consulte a organização interna para escolher os materiais adequados à sua turma.',
  },
  {
    question: 'As atividades seguem a BNCC?',
    answer:
      'Os materiais são organizados com base em temas, competências e habilidades relacionadas à BNCC. O professor continua responsável por avaliar a adequação à turma, escola e planejamento.',
  },
  {
    question: 'Preciso de internet durante a aula?',
    answer:
      'Não necessariamente. Você pode baixar os materiais antes da aula, imprimir ou salvar os arquivos no dispositivo.',
  },
  {
    question: 'Existe mensalidade?',
    answer: 'Não. O valor informado corresponde a um pagamento único.',
  },
  {
    question: 'Recebo na hora?',
    answer:
      'O acesso é liberado após a confirmação do pagamento. O tempo pode variar conforme a forma de pagamento escolhida.',
  },
  {
    question: 'Tem garantia?',
    answer: `Sim. Você poderá solicitar o reembolso dentro do prazo de ${offerConfig.GUARANTEE_DAYS} dias, conforme as regras da plataforma de pagamento.`,
  },
  {
    question: 'Posso compartilhar os arquivos com outros professores?',
    answer:
      'A compra é individual. Consulte os termos de uso para entender as permissões e restrições de compartilhamento.',
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
        Respostas diretas sobre acesso, uso, BNCC e garantia.
      </SectionLead>
      <div className="mt-8 max-w-3xl">
        <Accordion items={faqItems} />
      </div>
    </Section>
  )
}
