type BrandLogoProps = {
  variant?: 'light' | 'dark'
  className?: string
}

export function BrandLogo({ variant = 'light', className = '' }: BrandLogoProps) {
  const isDark = variant === 'dark'
  const navy = isDark ? '#FFFFFF' : '#172033'
  const viva = isDark ? '#FF8A3D' : '#FF5A1F'
  const bookStroke = isDark ? '#FFFFFF' : '#172033'
  const spark = isDark ? '#FF8A3D' : '#FF5A1F'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 56"
      fill="none"
      className={className}
      role="img"
      aria-label="Aula Viva História"
    >
      <path
        d="M14 16c8.5 0 13.5 3.2 17 6V44c-3.5-2.6-8.5-4.5-17-4.5V16z"
        fill="#FF5A1F"
      />
      <path
        d="M48 16c-8.5 0-13.5 3.2-17 6V44c3.5-2.6 8.5-4.5 17-4.5V16z"
        fill="#FF5A1F"
      />
      <path
        d="M14 16c8.5 0 13.5 3.2 17 6V44c-3.5-2.6-8.5-4.5-17-4.5V16z"
        stroke={bookStroke}
        strokeWidth="2.2"
        fill="none"
      />
      <path
        d="M48 16c-8.5 0-13.5 3.2-17 6V44c3.5-2.6 8.5-4.5 17-4.5V16z"
        stroke={bookStroke}
        strokeWidth="2.2"
        fill="none"
      />
      <path
        d="M31 22v22"
        stroke={bookStroke}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M31 6l1.15 2.55L34.7 9.7l-2.55 1.15L31 13.4l-1.15-2.55L27.3 9.7l2.55-1.15L31 6z"
        fill={spark}
      />
      <path
        d="M38.5 8v3.5M23.5 8v3.5M35 5.2l1.8 1.8M27 5.2l-1.8 1.8"
        stroke={spark}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <text
        x="62"
        y="26"
        fontFamily="Manrope, Plus Jakarta Sans, Arial, sans-serif"
        fontSize="20"
        fontWeight="800"
      >
        <tspan fill={navy}>Aula </tspan>
        <tspan fill={viva}>Viva</tspan>
      </text>
      <text
        x="62"
        y="48"
        fontFamily="Manrope, Plus Jakarta Sans, Arial, sans-serif"
        fontSize="19"
        fontWeight="800"
        fill={navy}
      >
        História
      </text>
    </svg>
  )
}
