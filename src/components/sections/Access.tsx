import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'

const steps = [
  {
    title: 'Faça a compra',
    description: 'Escolha a forma de pagamento disponível no checkout.',
  },
  {
    title: 'Receba o acesso',
    description:
      'Após a confirmação, os dados de acesso serão enviados pela plataforma utilizada.',
  },
  {
    title: 'Entre pelo celular ou computador',
    description:
      'Acesse a biblioteca digital e encontre os materiais disponíveis.',
  },
  {
    title: 'Escolha sua primeira atividade',
    description:
      'Selecione um tema, abra o arquivo e prepare a aplicação com sua turma.',
  },
]

export function Access() {
  return (
    <Section id="acesso" tone="white">
      <SectionTitle>
        Você pode começar logo após a confirmação do pagamento
      </SectionTitle>
      <SectionLead>
        Processo simples, direto e pensado para quem precisa do material na
        próxima aula.
      </SectionLead>

      <ol className="mt-10 grid gap-4 sm:grid-cols-2">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-2xl border border-border bg-warm p-5 sm:p-6"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange text-white text-[14px] font-extrabold">
              {index + 1}
            </span>
            <h3 className="mt-3 text-[18px] font-extrabold text-navy">
              {step.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              {step.description}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-6 rounded-xl border border-border bg-cool px-4 py-3 text-[15px] text-muted">
        Produto digital. Nenhum material físico será enviado.
      </p>
    </Section>
  )
}
