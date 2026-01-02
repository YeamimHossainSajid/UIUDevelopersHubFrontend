import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { useSound } from '@/contexts/SoundContext'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const location = useLocation()
  const { user } = useAuth()
  const { playKeyClick } = useSound()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleClick = () => {
    playKeyClick()
    setMobileMenuOpen(false)
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/community', label: 'Community' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-accent-blue/20 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" onClick={handleClick} className="text-2xl font-bold text-glow-orange">
            UIU Developers Hub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleClick}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <Link to="/dashboard" onClick={handleClick} className="btn-primary">
                Dashboard
              </Link>
            ) : (
              <Link to="/auth/signin" onClick={handleClick} className="btn-secondary">
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen)
              playKeyClick()
            }}
            className="md:hidden p-2 rounded-lg hover:bg-accent-blue/10 text-text-dark"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleClick}
                className={`block px-4 py-2 rounded-lg ${
                  location.pathname === link.path ? 'active' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <Link to="/dashboard" onClick={handleClick} className="block px-4 py-2 btn-primary">
                Dashboard
              </Link>
            ) : (
              <Link to="/auth/signin" onClick={handleClick} className="block px-4 py-2 btn-secondary">
                Sign In
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

