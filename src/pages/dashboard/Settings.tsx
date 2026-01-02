import { useState } from 'react'
import { useSound } from '@/contexts/SoundContext'
import { Bell, Volume2, Moon } from 'lucide-react'

export default function Settings() {
  const { enabled, toggleSound } = useSound()
  const [notifications, setNotifications] = useState(true)
  const [theme, setTheme] = useState('dark')

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-glow-orange">Settings</h1>

      <div className="space-y-6">
        {/* Sound Settings */}
        <div className="card">
          <div className="flex items-center space-x-4 mb-4">
            <Volume2 className="text-accent-blue" size={24} />
            <h2 className="text-xl font-bold">Sound Settings</h2>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Enable Sounds</p>
              <p className="text-sm text-gray-400">Play sounds for interactions</p>
            </div>
            <button
              onClick={() => {
                toggleSound()
                playKeyClick()
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                enabled
                  ? 'bg-accent-orange text-white'
                  : 'bg-primary-navy/50 text-gray-300'
              }`}
            >
              {enabled ? 'Enabled' : 'Disabled'}
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="card">
          <div className="flex items-center space-x-4 mb-4">
            <Bell className="text-accent-blue" size={24} />
            <h2 className="text-xl font-bold">Notifications</h2>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Enable Notifications</p>
              <p className="text-sm text-gray-400">Receive notifications for updates</p>
            </div>
            <button
              onClick={() => {
                setNotifications(!notifications)
                playKeyClick()
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                notifications
                  ? 'bg-accent-orange text-white'
                  : 'bg-primary-navy/50 text-gray-300'
              }`}
            >
              {notifications ? 'Enabled' : 'Disabled'}
            </button>
          </div>
        </div>

        {/* Theme Settings */}
        <div className="card">
          <div className="flex items-center space-x-4 mb-4">
            <Moon className="text-accent-blue" size={24} />
            <h2 className="text-xl font-bold">Theme</h2>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Theme</p>
              <p className="text-sm text-gray-400">Choose your preferred theme</p>
            </div>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="px-4 py-2 rounded-lg bg-primary-dark/50 border border-accent-blue/30 text-white"
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

