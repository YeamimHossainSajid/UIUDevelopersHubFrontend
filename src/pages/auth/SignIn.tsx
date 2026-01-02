import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { useSound } from '@/contexts/SoundContext'
import Real3DText from '@/components/Real3DText'
import { toast } from '@/components/ui/Toaster'
import { Mail, Lock, LogIn } from 'lucide-react'

export default function SignIn() {
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const { playKeyClick } = useSound()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    playKeyClick()
    setLoading(true)

    try {
      await signIn(formData.email, formData.password)
      toast('Welcome back!', 'success')
      navigate('/dashboard')
    } catch (error: any) {
      toast(error.message || 'Failed to sign in', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-16 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Real3DText className="text-4xl font-bold mb-2">Sign In</Real3DText>
          <p className="text-text-medium">Welcome back to UIU Developers Hub</p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-dark">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light" size={20} />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-accent-blue/30 text-text-dark placeholder-text-light focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2 text-text-dark">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light" size={20} />
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-accent-blue/30 text-text-dark placeholder-text-light focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20"
                  placeholder="••••••••"
                  style={{ color: '#2d2d2d', WebkitTextFillColor: '#2d2d2d' }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-text-medium">Remember me</span>
              </label>
              <Link
                to="/auth/reset-password"
                className="text-sm text-accent-blue hover:underline"
                onClick={playKeyClick}
              >
                Forgot password?
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
                  <span>Sign In</span>
                  <LogIn size={18} />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-text-medium">
              Don't have an account?{' '}
              <Link to="/auth/signup" className="text-accent-blue hover:underline" onClick={playKeyClick}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

