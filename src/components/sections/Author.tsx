import { offerConfig } from '@/config/offerConfig'
import {
  Section,
  SectionLead,
  SectionTitle,
} from '@/components/ui/Section'

export function Author() {
  if (!offerConfig.SHOW_AUTHOR_SECTION) return null

  const { name, photo, experience, education, reason, profileUrl } =
    offerConfig.AUTHOR

  if (!name) return null

  return (
    <Section id="autor" tone="white">
      <SectionTitle>Quem organizou o {offerConfig.PRODUCT_NAME}</SectionTitle>
      <SectionLead>
        Informações reais sobre a pessoa responsável pela organização do
        material.
      </SectionLead>

      <div className="mt-8 flex flex-col gap-6 rounded-3xl border border-border bg-warm p-6 sm:flex-row sm:items-start">
        {photo ? (
          <img
            src={photo}
            alt={`Foto de ${name}`}
            width={120}
            height={120}
            className="h-[120px] w-[120px] rounded-2xl object-cover"
            loading="lazy"
          />
        ) : null}
        <div>
          <h3 className="text-[22px] font-extrabold text-navy">{name}</h3>
          {education ? (
            <p className="mt-2 text-[15px] text-muted">{education}</p>
          ) : null}
          {experience ? (
            <p className="mt-2 text-[15px] text-muted">{experience}</p>
          ) : null}
          {reason ? (
            <p className="mt-4 text-[16px] leading-relaxed text-ink">{reason}</p>
          ) : null}
          {profileUrl ? (
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-[15px] font-bold text-orange hover:underline"
            >
              Ver perfil
            </a>
          ) : null}
        </div>
      </div>
    </Section>
  )
}
