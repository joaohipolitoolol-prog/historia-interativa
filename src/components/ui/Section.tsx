import type { ReactNode, ElementType } from 'react'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  containerClassName?: string
  as?: ElementType
  tone?: 'warm' | 'cool' | 'white' | 'navy' | 'orange-soft'
  compact?: boolean
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
  compact = false,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`${compact ? 'py-12 sm:py-14 md:py-16' : 'py-14 sm:py-16 md:py-20'} ${tones[tone]} ${className}`}
    >
      <div className={`container-page ${containerClassName}`}>{children}</div>
    </Tag>
  )
}

export function SectionLabel({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={`mb-3 text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.14em] text-orange ${className}`}
    >
      {children}
    </p>
  )
}

export function SectionTitle({
  children,
  className = '',
  as: Tag = 'h2',
  centered = false,
}: {
  children: ReactNode
  className?: string
  as?: 'h2' | 'h3'
  centered?: boolean
}) {
  return (
    <Tag
      className={`text-[26px] sm:text-[32px] md:text-[38px] font-extrabold text-balance ${
        centered ? 'text-center mx-auto' : ''
      } ${className}`}
    >
      {children}
    </Tag>
  )
}

export function SectionLead({
  children,
  className = '',
  centered = false,
}: {
  children: ReactNode
  className?: string
  centered?: boolean
}) {
  return (
    <p
      className={`mt-3 sm:mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-muted ${
        centered ? 'text-center mx-auto' : ''
      } ${className}`}
    >
      {children}
    </p>
  )
}
