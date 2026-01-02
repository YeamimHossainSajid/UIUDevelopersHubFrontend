import { ReactNode } from 'react'

interface Real3DTextProps {
  children: ReactNode
  className?: string
  depth?: number
}

export default function Real3DText({ children, className = '', depth = 8 }: Real3DTextProps) {
  const shadows = Array.from({ length: depth }, (_, i) => {
    const offset = i + 1
    const opacity = 1 - (i / depth) * 0.8
    const color = i < depth / 2 ? '#0f3460' : '#16213e'
    return `${offset}px ${offset}px 0px rgba(${color === '#0f3460' ? '15, 52, 96' : '22, 33, 62'}, ${opacity})`
  }).join(', ')

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{
        textShadow: `${shadows}, 0 0 10px rgba(86, 156, 214, 0.5), 0 0 20px rgba(255, 107, 53, 0.3)`,
        transform: 'perspective(500px) rotateX(5deg)',
      }}
    >
      {children}
    </div>
  )
}

