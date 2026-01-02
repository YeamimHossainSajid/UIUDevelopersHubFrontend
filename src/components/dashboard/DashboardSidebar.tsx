import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { useSound } from '@/contexts/SoundContext'
import {
  LayoutDashboard,
  Users,
  MessageCircle,
  Video,
  CheckSquare,
  User,
  Settings,
  Shield,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'

export default function DashboardSidebar() {
  const location = useLocation()
  const { user } = useAuth()
  const { playKeyClick } = useSound()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/dashboard/social', label: 'Social', icon: Users },
    { path: '/dashboard/messages', label: 'Messages', icon: MessageCircle },
    { path: '/dashboard/meetings', label: 'Meetings', icon: Video },
    { path: '/dashboard/tasks', label: 'Tasks', icon: CheckSquare },
    { path: '/dashboard/profile', label: 'Profile', icon: User },
    { path: '/dashboard/settings', label: 'Settings', icon: Settings },
  ]

  const adminItems = [
    { path: '/dashboard/admin/roles', label: 'Role Management', icon: Shield },
  ]

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => {
          setMobileMenuOpen(!mobileMenuOpen)
          playKeyClick()
        }}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-primary-navy/90 backdrop-blur-md border border-accent-blue/30"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-40 w-64 bg-white/95 backdrop-blur-xl border-r border-accent-blue/20 shadow-lg transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-accent-blue/20">
            <h2 className="text-xl font-bold text-glow-orange">UIU Dev Hub</h2>
            <p className="text-sm text-text-medium mt-1">Welcome, {user?.name || 'User'}</p>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    playKeyClick()
                    setMobileMenuOpen(false)
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-accent-orange/20 border-l-4 border-accent-orange text-accent-orange'
                      : 'text-text-medium hover:bg-accent-blue/10 hover:text-accent-blue'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}

            {(user?.role === 'admin' || user?.role === 'super_admin') && (
              <>
                <div className="pt-4 mt-4 border-t border-accent-blue/20">
                  <p className="px-4 text-xs text-text-light uppercase tracking-wider mb-2">
                    Admin
                  </p>
                  {adminItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => {
                          playKeyClick()
                          setMobileMenuOpen(false)
                        }}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          isActive(item.path)
                            ? 'bg-accent-orange/20 border-l-4 border-accent-orange text-accent-orange'
                            : 'text-text-medium hover:bg-accent-blue/10 hover:text-accent-blue'
                        }`}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </>
            )}
          </nav>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => {
            setMobileMenuOpen(false)
            playKeyClick()
          }}
        />
      )}
    </>
  )
}

