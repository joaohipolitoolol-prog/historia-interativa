import type { ReactNode, ElementType } from 'react'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  containerClassName?: string
  as?: ElementType
  tone?: 'warm' | 'cool' | 'white' | 'navy' | 'orange-soft'
}

const tones: Record<NonNullable<SectionProps['tone']>, string> = {
  warm: 'bg-warm',
  cool: 'bg-cool',
  white: 'bg-white',
  navy: 'bg-navy text-white',
  'orange-soft': 'bg-orange-soft',
}

export function Section({
  id,
  children,
  className = '',
  containerClassName = '',
  as: Tag = 'section',
  tone = 'warm',
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`py-14 sm:py-16 md:py-20 ${tones[tone]} ${className}`}
    >
      <div className={`container-page ${containerClassName}`}>{children}</div>
    </Tag>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-orange">
      {children}
    </p>
  )
}

export function SectionTitle({
  children,
  className = '',
  as: Tag = 'h2',
}: {
  children: ReactNode
  className?: string
  as?: 'h2' | 'h3'
}) {
  return (
    <Tag
      className={`text-[28px] sm:text-[34px] md:text-[40px] font-extrabold text-balance ${className}`}
    >
      {children}
    </Tag>
  )
}

export function SectionLead({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={`mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-muted ${className}`}
    >
      {children}
    </p>
  )
}
