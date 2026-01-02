import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
        .custom-cursor-core {
          position: fixed;
          width: 8px;
          height: 8px;
          background: #7db3d3;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease-out;
          box-shadow: 0 0 10px rgba(125, 179, 211, 0.6);
        }
        .custom-cursor-ring {
          position: fixed;
          width: 32px;
          height: 32px;
          border: 2px solid rgba(125, 179, 211, 0.4);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          transition: all 0.15s ease-out;
        }
        .custom-cursor-ring.hovering {
          width: 48px;
          height: 48px;
          border-color: rgba(255, 140, 105, 0.6);
        }
        .custom-cursor-trail {
          position: fixed;
          width: 4px;
          height: 4px;
          background: rgba(255, 140, 105, 0.5);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9997;
          transform: translate(-50%, -50%);
        }
      `}</style>
      <div
        className="custom-cursor-core"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      <div
        className={`custom-cursor-ring ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {/* Trail particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="custom-cursor-trail"
          style={{
            left: `${position.x - (i + 1) * 8}px`,
            top: `${position.y - (i + 1) * 8}px`,
            opacity: 1 - (i + 1) * 0.2,
            transition: `all ${0.1 + i * 0.05}s ease-out`,
          }}
        />
      ))}
    </>
  )
}

