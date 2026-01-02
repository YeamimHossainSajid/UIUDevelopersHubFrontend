import { useState, useEffect } from 'react'

interface Toast {
  id: string
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
}

let toastListeners: ((toasts: Toast[]) => void)[] = []
let toasts: Toast[] = []

function notify() {
  toastListeners.forEach((listener) => listener([...toasts]))
}

export function toast(message: string, type: Toast['type'] = 'info') {
  const id = Math.random().toString(36).substring(7)
  toasts = [...toasts, { id, message, type }]
  notify()

  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id)
    notify()
  }, 5000)
}

export function Toaster() {
  const [currentToasts, setCurrentToasts] = useState<Toast[]>([])

  useEffect(() => {
    toastListeners.push(setCurrentToasts)
    return () => {
      toastListeners = toastListeners.filter((l) => l !== setCurrentToasts)
    }
  }, [])

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {currentToasts.map((toast) => (
        <div
          key={toast.id}
          className={`px-4 py-3 rounded-lg shadow-lg backdrop-blur-md border min-w-[300px] animate-in slide-in-from-right ${
            toast.type === 'success'
              ? 'bg-green-500/20 border-green-500/50 text-green-200'
              : toast.type === 'error'
                ? 'bg-red-500/20 border-red-500/50 text-red-200'
                : toast.type === 'warning'
                  ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-200'
                  : 'bg-blue-500/20 border-blue-500/50 text-blue-200'
          }`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  )
}

