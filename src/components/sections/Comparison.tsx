import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'

const alone = [
  'Pesquisar em vários sites',
  'Procurar imagens separadamente',
  'Criar perguntas',
  'Montar o documento',
  'Relacionar o conteúdo à BNCC',
  'Organizar para impressão',
  'Repetir o processo na próxima aula',
]

const withSystem = [
  'Escolher o tema',
  'Encontrar a atividade',
  'Conferir o material',
  'Imprimir ou projetar',
  'Aplicar com a turma',
  'Salvar para usar novamente',
]

export function Comparison() {
  return (
    <Section id="comparacao" tone="cool">
      <SectionTitle>O que muda na sua preparação</SectionTitle>
      <SectionLead>
        Menos etapas repetitivas. Mais tempo para ensinar.
      </SectionLead>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-white p-6">
          <h3 className="text-[20px] font-extrabold text-muted">
            Preparando tudo do zero
          </h3>
          <ul className="mt-5 space-y-3">
            {alone.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] sm:text-[16px] text-muted"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F3E8E4] text-[#B4533A] text-[12px] font-bold"
                >
                  ×
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border-2 border-orange bg-white p-6 shadow-[var(--shadow-soft)]">
          <h3 className="text-[20px] font-extrabold text-navy">
            Com o Sistema Aula Pronta
          </h3>
          <ul className="mt-5 space-y-3">
            {withSystem.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] sm:text-[16px] text-ink"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green text-white text-[11px] font-bold"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-8 text-center text-[17px] sm:text-[18px] font-bold text-navy text-balance">
        O sistema não substitui o professor. Ele devolve tempo para o professor
        ensinar.
      </p>
    </Section>
  )
}
