import { offerConfig } from '@/config/offerConfig'

type BrandLogoProps = {
  dark?: boolean
  showSubject?: boolean
  className?: string
  size?: 'sm' | 'md'
}

export function BrandLogo({
  dark = false,
  showSubject = true,
  className = '',
  size = 'md',
}: BrandLogoProps) {
  const icon = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10'
  const title = size === 'sm' ? 'text-[17px]' : 'text-[20px] sm:text-[22px]'
  const subject = size === 'sm' ? 'text-[12px]' : 'text-[13px] sm:text-[14px]'

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        className={`${icon} shrink-0`}
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="16" fill="#FF5A1F" />
        <path
          d="M10 18c8.5 0 14 3.2 18 6.5V50c-4-3-9.5-5.5-18-5.5V18z"
          fill="#FFFFFF"
        />
        <path
          d="M54 18c-8.5 0-14 3.2-18 6.5V50c4-3 9.5-5.5 18-5.5V18z"
          fill="#FFFFFF"
        />
        <path
          d="M32 24.5V50"
          stroke="#FF5A1F"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M50 9l1.8 3.8L56 14.5l-4.2 1.7L50 20l-1.8-3.8L44 14.5l4.2-1.7L50 9z"
          fill="#FFFFFF"
        />
      </svg>
      <div className="text-left leading-none">
        <p
          className={`${title} font-extrabold tracking-tight font-[family-name:var(--font-display)] ${
            dark ? 'text-white' : 'text-navy'
          }`}
        >
          {offerConfig.BRAND_NAME}
        </p>
        {showSubject ? (
          <p
            className={`${subject} mt-1 font-bold tracking-wide ${
              dark ? 'text-orange-light' : 'text-orange'
            }`}
          >
            História
          </p>
        ) : null}
      </div>
    </div>
  )
}
