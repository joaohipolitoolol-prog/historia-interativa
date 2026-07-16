import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'
import { useInViewTrack } from '@/hooks/useInViewTrack'

type Row = {
  label: string
  essential: boolean | string
  premium: boolean | string
}

function buildRows(): Row[] {
  return [
    { label: 'Mais de 500 atividades', essential: true, premium: true },
    { label: 'Materiais para imprimir', essential: true, premium: true },
    { label: 'Recursos para projetar', essential: true, premium: true },
    {
      label: 'Organização com base na BNCC',
      essential: true,
      premium: true,
    },
    {
      label: '100 avaliações adicionais',
      essential: false,
      premium: true,
    },
    { label: 'Planos de aula prontos', essential: false, premium: true },
    { label: 'Planejamento anual', essential: false, premium: true },
    {
      label: 'Coleção Premium de mapas e linhas do tempo',
      essential: false,
      premium: true,
    },
    {
      label: 'Guia de aulas participativas',
      essential: false,
      premium: true,
    },
    {
      label: 'Atualizações futuras',
      essential: false,
      premium: offerConfig.PREMIUM_FUTURE_UPDATES,
    },
    {
      label: 'Acesso ao acervo adquirido',
      essential: true,
      premium: true,
    },
    {
      label: 'Acesso vitalício destacado',
      essential: false,
      premium: offerConfig.PREMIUM_LIFETIME_ACCESS,
    },
  ]
}

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === 'string') {
    return <span className="text-[14px] font-semibold text-navy">{value}</span>
  }
  return value ? (
    <span className="inline-flex items-center gap-1 text-[14px] font-bold text-green">
      <span aria-hidden="true">✓</span> Incluído
    </span>
  ) : (
    <span className="text-[14px] font-medium text-muted">Não incluído</span>
  )
}

export function PlanComparison() {
  const ref = useInViewTrack('PlanComparisonViewed')
  const rows = buildRows()

  return (
    <Section id="comparacao-planos" tone="cool">
      <div ref={ref}>
        <SectionTitle>
          Escolha o acesso que faz mais sentido para você
        </SectionTitle>
        <SectionLead>
          Diferença clara entre a biblioteca principal e o sistema completo.
        </SectionLead>

        {/* Mobile: stacked comparisons */}
        <div className="mt-8 space-y-3 md:hidden">
          {rows.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl border border-border bg-white p-4"
            >
              <p className="text-[15px] font-bold text-navy">{row.label}</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-muted">
                    Essencial
                  </p>
                  <div className="mt-1">
                    <Cell value={row.essential} />
                  </div>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-orange">
                    Premium
                  </p>
                  <div className="mt-1">
                    <Cell value={row.premium} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="mt-8 hidden md:block overflow-hidden rounded-3xl border border-border bg-white">
          <table className="w-full text-left">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-5 py-4 text-[14px] font-bold">Recurso</th>
                <th className="px-5 py-4 text-[14px] font-bold">Essencial</th>
                <th className="px-5 py-4 text-[14px] font-bold">Premium</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-warm/60'}
                >
                  <td className="px-5 py-3.5 text-[15px] font-semibold text-navy">
                    {row.label}
                  </td>
                  <td className="px-5 py-3.5">
                    <Cell value={row.essential} />
                  </td>
                  <td className="px-5 py-3.5">
                    <Cell value={row.premium} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-5">
            <p className="font-extrabold text-navy">Plano Essencial</p>
            <p className="mt-2 text-[15px] text-muted">
              Para quem quer as atividades prontas pelo menor preço.
            </p>
          </div>
          <div className="rounded-2xl border border-orange/30 bg-orange-soft p-5">
            <p className="font-extrabold text-navy">Plano Premium</p>
            <p className="mt-2 text-[15px] text-muted">
              Para quem também quer materiais de planejamento, avaliação e
              organização.
            </p>
          </div>
        </div>

        <p className="mt-6 text-[14px] text-muted text-center">
          O Plano Essencial não é uma amostra. Ele entrega as mais de{' '}
          {offerConfig.NUMBER_OF_ACTIVITIES} atividades anunciadas.
        </p>
      </div>
    </Section>
  )
}
