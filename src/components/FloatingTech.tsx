import { useEffect, useState } from 'react'
import { Code, Database, Cpu, Globe, Terminal, GitBranch, Package, Zap } from 'lucide-react'

const techItems = [
  { icon: Code, name: 'React', color: '#61dafb' },
  { icon: Database, name: 'Node.js', color: '#339933' },
  { icon: Cpu, name: 'TypeScript', color: '#3178c6' },
  { icon: Globe, name: 'JavaScript', color: '#f7df1e' },
  { icon: Terminal, name: 'Python', color: '#3776ab' },
  { icon: GitBranch, name: 'Git', color: '#f05032' },
  { icon: Package, name: 'Docker', color: '#2496ed' },
  { icon: Zap, name: 'Vite', color: '#646cff' },
]

export default function FloatingTech() {
  const [items, setItems] = useState<Array<{
    id: number
    x: number
    y: number
    icon: any
    name: string
    color: string
    speed: number
  }>>([])

  useEffect(() => {
    // Create floating items
    const newItems = techItems.map((item, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: item.icon,
      name: item.name,
      color: item.color,
      speed: 0.5 + Math.random() * 0.5,
    }))
    setItems(newItems)

    // Animate floating
    const interval = setInterval(() => {
      setItems((prev) =>
        prev.map((item) => ({
          ...item,
          y: (item.y + item.speed) % 100,
          x: item.x + Math.sin(Date.now() / 1000 + item.id) * 0.1,
        }))
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <div
            key={item.id}
            className="absolute flex flex-col items-center justify-center opacity-20 hover:opacity-40 transition-opacity"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              transform: 'translate(-50%, -50%)',
              animation: `float-${item.id} ${10 + item.id * 2}s ease-in-out infinite`,
            }}
          >
            <div
              className="p-3 rounded-xl shadow-lg backdrop-blur-sm"
              style={{
                background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
                border: `2px solid ${item.color}40`,
              }}
            >
              <Icon size={32} style={{ color: item.color }} />
            </div>
            <span
              className="text-xs font-bold mt-1"
              style={{ color: item.color }}
            >
              {item.name}
            </span>
          </div>
        )
      })}
      <style>{`
        @keyframes float-0 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-20px); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(15px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-25px); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(20px); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-18px); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(22px); }
        }
        @keyframes float-6 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-15px); }
        }
        @keyframes float-7 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(18px); }
        }
      `}</style>
    </div>
  )
}

