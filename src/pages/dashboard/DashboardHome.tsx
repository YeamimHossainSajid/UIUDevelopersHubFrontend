import { useAuth } from '@/contexts/AuthContext'
import { Link } from 'react-router-dom'
import { useSound } from '@/contexts/SoundContext'
import { Users, Video, CheckSquare, TrendingUp, Plus } from 'lucide-react'

export default function DashboardHome() {
  const { user } = useAuth()
  const { playKeyClick } = useSound()

  const stats = [
    { label: 'Active Tasks', value: '12', icon: CheckSquare, color: '#ff6b35', link: '/dashboard/tasks' },
    { label: 'Upcoming Meetings', value: '3', icon: Video, color: '#569cd6', link: '/dashboard/meetings' },
    { label: 'Recent Posts', value: '24', icon: Users, color: '#f7931e', link: '/dashboard/social' },
    { label: 'Activity Score', value: '85', icon: TrendingUp, color: '#ff4500', link: '/dashboard/profile' },
  ]

  const quickActions = [
    { label: 'Create Post', icon: Plus, link: '/dashboard/social', color: '#569cd6' },
    { label: 'Schedule Meeting', icon: Video, link: '/dashboard/meetings', color: '#ff6b35' },
    { label: 'Create Task', icon: CheckSquare, link: '/dashboard/tasks', color: '#f7931e' },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-glow-orange">
          Welcome back, {user?.name || 'User'}!
        </h1>
        <p className="text-gray-400">Here's what's happening in your workspace</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Link
              key={index}
              to={stat.link}
              onClick={playKeyClick}
              className="card hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold" style={{ color: stat.color }}>
                    {stat.value}
                  </p>
                </div>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    background: `${stat.color}20`,
                    border: `2px solid ${stat.color}`,
                  }}
                >
                  <Icon size={24} style={{ color: stat.color }} />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold mb-4 text-glow-orange">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <Link
                key={index}
                to={action.link}
                onClick={playKeyClick}
                className="flex items-center space-x-4 p-4 rounded-lg bg-primary-dark/50 border border-accent-blue/30 hover:border-accent-blue transition-all cursor-pointer"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: `${action.color}20`,
                    border: `2px solid ${action.color}`,
                  }}
                >
                  <Icon size={20} style={{ color: action.color }} />
                </div>
                <span className="font-medium">{action.label}</span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-4 text-glow-orange">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 rounded-lg bg-primary-dark/30">
            <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
              <CheckSquare size={20} className="text-accent-blue" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Task completed: "Implement user authentication"</p>
              <p className="text-sm text-gray-400">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 rounded-lg bg-primary-dark/30">
            <div className="w-10 h-10 rounded-full bg-accent-orange/20 flex items-center justify-center">
              <Users size={20} className="text-accent-orange" />
            </div>
            <div className="flex-1">
              <p className="font-medium">New post in Social Feed</p>
              <p className="text-sm text-gray-400">5 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 rounded-lg bg-primary-dark/30">
            <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
              <Video size={20} className="text-accent-blue" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Meeting scheduled: "Team Standup"</p>
              <p className="text-sm text-gray-400">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

