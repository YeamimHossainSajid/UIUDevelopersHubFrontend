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
    // Soft, pleasant button click sound - like a gentle tap
    // Using a very gentle sine wave with low volume and smooth fade
    try {
      const ctx = getAudioContext()
      const now = ctx.currentTime
      
      // Create a soft, pleasant tone using sine wave
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()
      
      // Very gentle frequency (pleasant mid-range)
      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(600, now)
      oscillator.frequency.exponentialRampToValueAtTime(550, now + 0.06)
      
      // Very soft volume with smooth envelope
      gainNode.gain.setValueAtTime(0, now)
      gainNode.gain.linearRampToValueAtTime(0.08, now + 0.005) // Quick, gentle attack
      gainNode.gain.linearRampToValueAtTime(0.05, now + 0.03)  // Gentle decay
      gainNode.gain.linearRampToValueAtTime(0, now + 0.06)      // Smooth release
      
      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)
      
      oscillator.start(now)
      oscillator.stop(now + 0.06)
    } catch (error) {
      // Silently fail if audio context is not available
      console.warn('Audio context not available:', error)
    }
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

