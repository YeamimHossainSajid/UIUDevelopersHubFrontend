import { useState } from 'react'
import { useSound } from '@/contexts/SoundContext'
import { Shield, Search, UserPlus } from 'lucide-react'

// Mock users - replace with actual data from Firebase
const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'member' as const,
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'admin' as const,
  },
]

const roles: Array<'member' | 'moderator' | 'admin' | 'super_admin'> = [
  'member',
  'moderator',
  'admin',
  'super_admin',
]

export default function AdminRoles() {
  const { playKeyClick } = useSound()
  const [users] = useState(mockUsers)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-glow-orange flex items-center space-x-3">
            <Shield size={32} />
            <span>Role Management</span>
          </h1>
          <p className="text-gray-400 mt-2">Manage user roles and permissions</p>
        </div>
      </div>

      {/* Search */}
      <div className="card mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-primary-dark/50 border border-accent-blue/30 text-white focus:outline-none focus:border-accent-blue"
          />
        </div>
      </div>

      {/* Users Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-accent-blue/30">
                <th className="text-left p-4">User</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Current Role</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-accent-blue/10 hover:bg-primary-dark/30">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-accent-orange/20 flex items-center justify-center">
                        <span className="text-accent-orange font-bold">
                          {user.name.charAt(0)}
                        </span>
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-400">{user.email}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                        user.role === 'admin' || user.role === 'super_admin'
                          ? 'bg-accent-orange/20 text-accent-orange'
                          : 'bg-accent-blue/20 text-accent-blue'
                      }`}
                    >
                      {user.role.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="p-4">
                    <select
                      defaultValue={user.role}
                      onChange={(e) => {
                        playKeyClick()
                        // TODO: Implement role update
                        console.log('Update role:', e.target.value)
                      }}
                      className="px-3 py-1 rounded-lg bg-primary-dark/50 border border-accent-blue/30 text-white text-sm"
                    >
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role.replace('_', ' ').toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No users found</p>
          </div>
        )}
      </div>
    </div>
  )
}

