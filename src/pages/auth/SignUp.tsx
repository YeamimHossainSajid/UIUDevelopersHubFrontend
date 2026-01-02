import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { useSound } from '@/contexts/SoundContext'
import Real3DText from '@/components/Real3DText'
import { toast } from '@/components/ui/Toaster'
import { Mail, Lock, User, UserPlus } from 'lucide-react'

export default function SignUp() {
  const navigate = useNavigate()
  const { signUp } = useAuth()
  const { playKeyClick } = useSound()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    playKeyClick()

    if (formData.password !== formData.confirmPassword) {
      toast('Passwords do not match', 'error')
      return
    }

    if (formData.password.length < 6) {
      toast('Password must be at least 6 characters', 'error')
      return
    }

    setLoading(true)

    try {
      await signUp(formData.email, formData.password, formData.name)
      toast('Account created! Please check your email for verification.', 'success')
      navigate('/auth/signin')
    } catch (error: any) {
      toast(error.message || 'Failed to create account', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-16 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Real3DText className="text-4xl font-bold mb-2">Sign Up</Real3DText>
          <p className="text-gray-400">Join UIU Developers Hub today</p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-primary-dark/50 border border-accent-blue/30 text-white focus:outline-none focus:border-accent-blue"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-primary-dark/50 border border-accent-blue/30 text-white focus:outline-none focus:border-accent-blue"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  minLength={6}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-primary-dark/50 border border-accent-blue/30 text-white focus:outline-none focus:border-accent-blue"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-primary-dark/50 border border-accent-blue/30 text-white focus:outline-none focus:border-accent-blue"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="text-sm text-gray-400">
              By signing up, you agree to our{' '}
              <Link to="/terms" className="text-accent-blue hover:underline" onClick={playKeyClick}>
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-accent-blue hover:underline" onClick={playKeyClick}>
                Privacy Policy
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              onClick={playKeyClick}
              className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="spinner w-5 h-5" />
              ) : (
                <>
                  <span>Create Account</span>
                  <UserPlus size={18} />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{' '}
              <Link to="/auth/signin" className="text-accent-blue hover:underline" onClick={playKeyClick}>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

