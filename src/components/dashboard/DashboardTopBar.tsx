import { useAuth } from '@/contexts/AuthContext'
import { useSound } from '@/contexts/SoundContext'
import { Bell, Search, LogOut, User } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DashboardTopBar() {
  const { user, signOut } = useAuth()
  const { playKeyClick } = useSound()
  const navigate = useNavigate()
  const [showUserMenu, setShowUserMenu] = useState(false)

  const handleSignOut = async () => {
    playKeyClick()
    await signOut()
    navigate('/')
  }

  return (
    <header className="h-16 bg-primary-navy/80 backdrop-blur-xl border-b border-accent-blue/30 flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-primary-dark/50 border border-accent-blue/30 text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button
          onClick={playKeyClick}
          className="p-2 rounded-lg hover:bg-accent-blue/10 transition-colors relative"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent-orange rounded-full"></span>
        </button>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => {
              setShowUserMenu(!showUserMenu)
              playKeyClick()
            }}
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent-blue/10 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-accent-orange flex items-center justify-center">
              <User size={16} />
            </div>
            <span className="hidden md:block text-sm font-medium">{user?.name || 'User'}</span>
          </button>

          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-primary-navy/95 backdrop-blur-xl border border-accent-blue/30 rounded-lg shadow-lg overflow-hidden">
              <div className="px-4 py-3 border-b border-accent-blue/30">
                <p className="text-sm font-medium">{user?.name || 'User'}</p>
                <p className="text-xs text-gray-400">{user?.email}</p>
                <p className="text-xs text-accent-orange mt-1 capitalize">{user?.role}</p>
              </div>
              <button
                onClick={handleSignOut}
                className="w-full text-left px-4 py-2 text-sm hover:bg-accent-blue/10 transition-colors flex items-center space-x-2"
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

