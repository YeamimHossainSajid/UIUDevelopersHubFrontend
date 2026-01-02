import { createContext, useContext, useState, ReactNode } from 'react'

interface SoundContextType {
  enabled: boolean
  toggleSound: () => void
  playKeyPress: () => void
  playKeyRelease: () => void
  playKeyClick: () => void
  playFeatureSound: (frequency?: number) => void
}

const SoundContext = createContext<SoundContextType | undefined>(undefined)

let audioContext: AudioContext | null = null

function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  }
  return audioContext
}

function playSound(
  _frequency: number,
  type: OscillatorType,
  duration: number,
  attack: number,
  decay: number,
  sustain: number,
  release: number,
  startFreq: number,
  endFreq: number,
  _volume: number,
  _harmonics: number,
  gain: number
) {
  try {
    const ctx = getAudioContext()
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.type = type
    oscillator.frequency.setValueAtTime(startFreq, ctx.currentTime)

    gainNode.gain.setValueAtTime(0, ctx.currentTime)
    gainNode.gain.linearRampToValueAtTime(gain, ctx.currentTime + attack)
    gainNode.gain.linearRampToValueAtTime(gain * sustain, ctx.currentTime + attack + decay)
    gainNode.gain.setValueAtTime(gain * sustain, ctx.currentTime + duration - release)
    gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + duration)

    oscillator.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + duration)

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + duration)
  } catch (error) {
    // Silently fail if audio context is not available
    console.warn('Audio context not available:', error)
  }
}

export function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(true)

  const toggleSound = () => setEnabled((prev) => !prev)

  const playKeyPress = () => {
    if (!enabled) return
    playSound(800, 'sine', 0.1, 0.01, 0.05, 0.1, 0.1, 800, 400, 1000, 5, 0.3)
  }

  const playKeyRelease = () => {
    if (!enabled) return
    playSound(600, 'sine', 0.08, 0.01, 0.03, 0.08, 0.08, 600, 300, 800, 3, 0.2)
  }

  const playKeyClick = () => {
    if (!enabled) return
    playSound(1200, 'square', 0.05, 0.005, 0.02, 0.05, 0.05, 1200, 800, 2000, 10, 0.4)
  }

  const playFeatureSound = (frequency = 440) => {
    if (!enabled) return
    playSound(frequency, 'sine', 0.15, 0.01, 0.05, 0.1, 0.15, frequency, frequency * 0.8, 1000, 3, 0.25)
  }

  return (
    <SoundContext.Provider
      value={{ enabled, toggleSound, playKeyPress, playKeyRelease, playKeyClick, playFeatureSound }}
    >
      {children}
    </SoundContext.Provider>
  )
}

export function useSound() {
  const context = useContext(SoundContext)
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider')
  }
  return context
}

