import { ReactNode } from 'react'

interface Simple3DTextProps {
  children: ReactNode
  className?: string
}

export default function Simple3DText({ children, className = '' }: Simple3DTextProps) {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{
        textShadow: `
          2px 2px 0px #0f3460,
          4px 4px 0px #16213e,
          6px 6px 0px #1a1a2e,
          0 0 10px rgba(86, 156, 214, 0.5),
          0 0 20px rgba(255, 107, 53, 0.3)
        `,
      }}
    >
      {children}
    </div>
  )
}

