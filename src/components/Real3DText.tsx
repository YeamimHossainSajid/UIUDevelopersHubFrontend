import { ReactNode } from 'react'

interface Real3DTextProps {
  children: ReactNode
  className?: string
  depth?: number
}

export default function Real3DText({ children, className = '', depth = 8 }: Real3DTextProps) {
  const shadows = Array.from({ length: depth }, (_, i) => {
    const offset = i + 1
    const opacity = 0.3 - (i / depth) * 0.25
    return `${offset}px ${offset}px 0px rgba(125, 179, 211, ${opacity})`
  }).join(', ')

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{
        textShadow: `${shadows}, 0 0 10px rgba(125, 179, 211, 0.3), 0 0 20px rgba(255, 140, 105, 0.2)`,
        transform: 'perspective(500px) rotateX(5deg)',
      }}
    >
      {children}
    </div>
  )
}

