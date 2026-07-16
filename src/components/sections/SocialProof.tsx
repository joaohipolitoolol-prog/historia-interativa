import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'

/**
 * Só aparece com SHOW_SOCIAL_PROOF = true e depoimentos reais preenchidos.
 * Sem prova social inventada: mostra prova do produto.
 */
export function SocialProof() {
  if (!offerConfig.SHOW_SOCIAL_PROOF) {
    return <ProductProof />
  }

  if (offerConfig.TESTIMONIALS.length === 0) {
    return <ProductProof />
  }

  return (
    <Section id="prova" tone="cool">
      <SectionTitle>O que professores estão dizendo</SectionTitle>
      <SectionLead>
        Depoimentos autorizados de quem já utiliza o material.
      </SectionLead>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {offerConfig.TESTIMONIALS.map((item) => (
          <article
            key={`${item.name}-${item.state}`}
            className="rounded-2xl border border-border bg-white p-5 sm:p-6"
          >
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-ink">
              “{item.comment}”
            </p>
            <div className="mt-4 flex items-center gap-3">
              {item.photo ? (
                <img
                  src={item.photo}
                  alt={`Foto de ${item.name}`}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-soft text-orange font-bold"
                >
                  {item.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="font-bold text-navy">{item.name}</p>
                <p className="text-[14px] text-muted">
                  {item.segment} • {item.state}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function ProductProof() {
  return (
    <Section id="prova" tone="cool">
      <SectionTitle>Veja o que você receberá antes de comprar</SectionTitle>
      <SectionLead>
        Enquanto não houver depoimentos autorizados, a prova fica no produto:
        organização, variedade e formato de aplicação.
      </SectionLead>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          'Páginas reais das atividades (adicione as prévias)',
          'Lista de temas disponíveis na biblioteca',
          `Quantidade: ${offerConfig.NUMBER_OF_ACTIVITIES} atividades`,
          'Organização por tema, série e tipo',
          'Exemplo de plano de aula e avaliação',
          'Acesso pelo celular ou computador',
        ].map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-border bg-white px-5 py-4 text-[15px] font-semibold text-navy"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  )
}
