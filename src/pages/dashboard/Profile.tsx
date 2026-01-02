import { useAuth } from '@/contexts/AuthContext'
import { User, Mail, Shield, Calendar } from 'lucide-react'

export default function Profile() {
  const { user } = useAuth()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-glow-orange">Profile</h1>

      <div className="card">
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-24 h-24 rounded-full bg-accent-orange/20 flex items-center justify-center">
            <User size={48} className="text-accent-orange" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user?.name || 'User'}</h2>
            <p className="text-gray-400 capitalize">{user?.role || 'member'}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Mail className="text-accent-blue" size={20} />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium">{user?.email || 'N/A'}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Shield className="text-accent-blue" size={20} />
            <div>
              <p className="text-sm text-gray-400">Role</p>
              <p className="font-medium capitalize">{user?.role || 'member'}</p>
            </div>
          </div>
          {user?.createdAt && (
            <div className="flex items-center space-x-4">
              <Calendar className="text-accent-blue" size={20} />
              <div>
                <p className="text-sm text-gray-400">Member Since</p>
                <p className="font-medium">
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

