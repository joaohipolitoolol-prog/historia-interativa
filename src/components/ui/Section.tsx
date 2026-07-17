import type { ReactNode, ElementType } from 'react'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  containerClassName?: string
  as?: ElementType
  tone?: 'cream' | 'cool' | 'white' | 'navy' | 'orange-soft' | 'green-soft' | 'warm'
  compact?: boolean
}

const tones: Record<NonNullable<SectionProps['tone']>, string> = {
  cream: 'bg-cream',
  warm: 'bg-cream',
  cool: 'bg-cool',
  white: 'bg-white',
  navy: 'bg-navy text-white',
  'orange-soft': 'bg-orange-soft',
  'green-soft': 'bg-green-soft',
}

export function Section({
  id,
  children,
  className = '',
  containerClassName = '',
  as: Tag = 'section',
  tone = 'cream',
  compact = false,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`${compact ? 'py-10 sm:py-12 md:py-14' : 'py-12 sm:py-14 md:py-16'} ${tones[tone]} ${className}`}
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
      className={`text-[26px] sm:text-[32px] md:text-[36px] font-extrabold text-balance ${
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
      className={`mt-3 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-muted ${
        centered ? 'text-center mx-auto' : ''
      } ${className}`}
    >
      {children}
    </p>
  )
}
