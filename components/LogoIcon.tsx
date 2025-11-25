'use client'

// Logo SVG baseado no design das imagens - Loop estilizado
export default function LogoIcon({ color = '#003366', size = 40 }: { color?: string; size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="logoIcon"
    >
      {/* Loop estilizado - baseado no logo das imagens */}
      <path
        d="M20 50 C20 30, 35 20, 50 20 C65 20, 80 30, 80 50 C80 70, 65 80, 50 80 C35 80, 20 70, 20 50"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M50 20 L50 50 L80 50"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

