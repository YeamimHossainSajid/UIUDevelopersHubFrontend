import { useState } from 'react'
import { useSound } from '@/contexts/SoundContext'
import {
  Plus,
  Filter,
  List,
  LayoutGrid,
  Calendar,
  MoreVertical,
  User,
  Clock,
  Flag,
  Tag,
  AlertCircle,
  CheckCircle2,
  Circle,
  PlayCircle,
  FileText,
  BarChart3,
  Target,
} from 'lucide-react'

interface Task {
  id: string
  key: string
  title: string
  type: 'story' | 'bug' | 'task' | 'epic'
  status: 'backlog' | 'todo' | 'in_progress' | 'in_review' | 'done'
  priority: 'lowest' | 'low' | 'medium' | 'high' | 'highest'
  assignee?: { name: string; avatar?: string }
  reporter: { name: string; avatar?: string }
  storyPoints?: number
  labels: string[]
  sprint?: string
  epic?: string
  dueDate?: Date
  createdAt: Date
  description?: string
}

// Mock tasks with Jira-like structure
const mockTasks: Task[] = [
  {
    id: '1',
    key: 'DEV-101',
    title: 'Implement user authentication system',
    type: 'story',
    status: 'in_progress',
    priority: 'high',
    assignee: { name: 'Sara Ahmed', avatar: 'https://i.pravatar.cc/150?img=20' },
    reporter: { name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=12' },
    storyPoints: 8,
    labels: ['backend', 'auth'],
    sprint: 'Sprint 1',
    epic: 'User Management',
    dueDate: new Date('2024-12-25'),
    createdAt: new Date('2024-12-15'),
    description: 'Implement OAuth2 authentication with JWT tokens',
  },
  {
    id: '2',
    key: 'DEV-102',
    title: 'Fix login button not working on mobile',
    type: 'bug',
    status: 'todo',
    priority: 'highest',
    assignee: { name: 'Rifat Hossain', avatar: 'https://i.pravatar.cc/150?img=51' },
    reporter: { name: 'Tasnim Islam', avatar: 'https://i.pravatar.cc/150?img=9' },
    storyPoints: 3,
    labels: ['frontend', 'mobile', 'bug'],
    sprint: 'Sprint 1',
    epic: 'UI Fixes',
    dueDate: new Date('2024-12-22'),
    createdAt: new Date('2024-12-18'),
  },
  {
    id: '3',
    key: 'DEV-103',
    title: 'Design new dashboard layout',
    type: 'task',
    status: 'in_review',
    priority: 'medium',
    assignee: { name: 'Arif Mahmud', avatar: 'https://i.pravatar.cc/150?img=68' },
    reporter: { name: 'Nadia Chowdhury', avatar: 'https://i.pravatar.cc/150?img=32' },
    storyPoints: 5,
    labels: ['design', 'ui'],
    sprint: 'Sprint 1',
    epic: 'UI Improvements',
    dueDate: new Date('2024-12-20'),
    createdAt: new Date('2024-12-10'),
  },
  {
    id: '4',
    key: 'DEV-104',
    title: 'Add unit tests for API endpoints',
    type: 'task',
    status: 'done',
    priority: 'medium',
    assignee: { name: 'Karim Uddin', avatar: 'https://i.pravatar.cc/150?img=15' },
    reporter: { name: 'Lubna Akter', avatar: 'https://i.pravatar.cc/150?img=45' },
    storyPoints: 5,
    labels: ['testing', 'backend'],
    sprint: 'Sprint 1',
    epic: 'Quality Assurance',
    createdAt: new Date('2024-12-05'),
  },
  {
    id: '5',
    key: 'DEV-105',
    title: 'Optimize database queries',
    type: 'story',
    status: 'backlog',
    priority: 'low',
    assignee: { name: 'Shakib Hasan', avatar: 'https://i.pravatar.cc/150?img=13' },
    reporter: { name: 'Mehreen Khan', avatar: 'https://i.pravatar.cc/150?img=27' },
    storyPoints: 13,
    labels: ['backend', 'performance'],
    epic: 'Performance',
    createdAt: new Date('2024-12-12'),
  },
  {
    id: '6',
    key: 'DEV-106',
    title: 'User Management Epic',
    type: 'epic',
    status: 'in_progress',
    priority: 'high',
    reporter: { name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=12' },
    labels: ['epic'],
    createdAt: new Date('2024-12-01'),
  },
]

const columns = ['backlog', 'todo', 'in_progress', 'in_review', 'done'] as const

const getTypeIcon = (type: Task['type']) => {
  switch (type) {
    case 'story':
      return <FileText size={14} className="text-blue-500" />
    case 'bug':
      return <AlertCircle size={14} className="text-red-500" />
    case 'task':
      return <CheckCircle2 size={14} className="text-gray-500" />
    case 'epic':
      return <Target size={14} className="text-purple-500" />
    default:
      return <Circle size={14} />
  }
}

const getPriorityColor = (priority: Task['priority']) => {
  switch (priority) {
    case 'highest':
      return 'bg-red-100 text-red-700 border-red-300'
    case 'high':
      return 'bg-orange-100 text-orange-700 border-orange-300'
    case 'medium':
      return 'bg-yellow-100 text-yellow-700 border-yellow-300'
    case 'low':
      return 'bg-blue-100 text-blue-700 border-blue-300'
    case 'lowest':
      return 'bg-gray-100 text-gray-700 border-gray-300'
    default:
      return 'bg-gray-100 text-gray-700 border-gray-300'
  }
}

const getStatusIcon = (status: Task['status']) => {
  switch (status) {
    case 'done':
      return <CheckCircle2 size={14} className="text-green-500" />
    case 'in_progress':
      return <PlayCircle size={14} className="text-blue-500" />
    case 'in_review':
      return <Circle size={14} className="text-purple-500" />
    default:
      return <Circle size={14} className="text-gray-400" />
  }
}

export default function Tasks() {
  const { playKeyClick } = useSound()
  const [tasks] = useState<Task[]>(mockTasks)
  const [view, setView] = useState<'board' | 'list' | 'backlog'>('board')
  const [selectedSprint, setSelectedSprint] = useState<string>('Sprint 1')

  const sprints = ['Sprint 1', 'Sprint 2', 'Backlog']
  const activeSprintTasks = tasks.filter(
    (task) => task.sprint === selectedSprint || (!task.sprint && selectedSprint === 'Backlog')
  )

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-glow-orange">Tasks</h1>
          <p className="text-text-medium text-sm mt-1">Scrum Board</p>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={playKeyClick} className="btn-secondary flex items-center space-x-2">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button onClick={playKeyClick} className="btn-primary flex items-center space-x-2">
            <Plus size={20} />
            <span>Create Issue</span>
          </button>
        </div>
      </div>

      {/* Sprint Selector */}
      <div className="flex items-center space-x-2 mb-6 overflow-x-auto pb-2">
        {sprints.map((sprint) => (
          <button
            key={sprint}
            onClick={() => {
              setSelectedSprint(sprint)
              playKeyClick()
            }}
            className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
              selectedSprint === sprint
                ? 'bg-accent-orange text-white shadow-md'
                : 'bg-white text-text-medium hover:bg-primary-soft border border-accent-blue/20'
            }`}
          >
            {sprint}
          </button>
        ))}
        <div className="flex items-center space-x-2 ml-4 px-4 py-2 bg-white border border-accent-blue/20 rounded-lg">
          <BarChart3 size={16} className="text-text-medium" />
          <span className="text-sm text-text-medium">Velocity: 21 pts</span>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => {
            setView('board')
            playKeyClick()
          }}
          className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
            view === 'board'
              ? 'bg-accent-orange text-white'
              : 'bg-white text-text-medium hover:bg-primary-soft border border-accent-blue/20'
          }`}
        >
          <LayoutGrid size={18} />
          <span>Board</span>
        </button>
        <button
          onClick={() => {
            setView('list')
            playKeyClick()
          }}
          className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
            view === 'list'
              ? 'bg-accent-orange text-white'
              : 'bg-white text-text-medium hover:bg-primary-soft border border-accent-blue/20'
          }`}
        >
          <List size={18} />
          <span>List</span>
        </button>
        <button
          onClick={() => {
            setView('backlog')
            playKeyClick()
          }}
          className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
            view === 'backlog'
              ? 'bg-accent-orange text-white'
              : 'bg-white text-text-medium hover:bg-primary-soft border border-accent-blue/20'
          }`}
        >
          <List size={18} />
          <span>Backlog</span>
        </button>
      </div>

      {/* Board View - Jira Style */}
      {view === 'board' && (
        <div className="grid grid-cols-5 gap-4">
          {columns.map((column) => {
            const columnTasks = activeSprintTasks.filter((task) => task.status === column)
            const columnPoints = columnTasks.reduce((sum, task) => sum + (task.storyPoints || 0), 0)
            return (
              <div key={column} className="bg-white border border-accent-blue/20 rounded-lg flex flex-col">
                {/* Column Header */}
                <div className="p-3 border-b border-accent-blue/10 bg-primary-soft/30">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-text-dark capitalize flex items-center space-x-2">
                      {getStatusIcon(column)}
                      <span>{column.replace('_', ' ')}</span>
                    </h3>
                    <span className="text-xs text-text-light bg-white px-2 py-0.5 rounded-full">
                      {columnTasks.length}
                    </span>
                  </div>
                  {columnPoints > 0 && (
                    <p className="text-xs text-text-medium mt-1">
                      {columnPoints} {columnPoints === 1 ? 'point' : 'points'}
                    </p>
                  )}
                </div>

                {/* Tasks */}
                <div className="flex-1 p-2 space-y-2 overflow-y-auto min-h-[400px]">
                  {columnTasks.map((task) => (
                    <div
                      key={task.id}
                      className="bg-white border border-accent-blue/20 rounded-lg p-3 hover:border-accent-orange/40 hover:shadow-md transition-all cursor-pointer group"
                    >
                      {/* Task Key and Type */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          {getTypeIcon(task.type)}
                          <span className="text-xs font-medium text-text-light">{task.key}</span>
                        </div>
                        <button
                          onClick={playKeyClick}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreVertical size={14} className="text-text-light" />
                        </button>
                      </div>

                      {/* Task Title */}
                      <h4 className="font-medium text-text-dark text-sm mb-2 line-clamp-2">{task.title}</h4>

                      {/* Labels */}
                      {task.labels.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {task.labels.slice(0, 2).map((label, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 bg-primary-soft text-text-medium text-xs rounded border border-accent-blue/20"
                            >
                              {label}
                            </span>
                          ))}
                          {task.labels.length > 2 && (
                            <span className="px-2 py-0.5 bg-primary-soft text-text-medium text-xs rounded border border-accent-blue/20">
                              +{task.labels.length - 2}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          {/* Priority */}
                          <span
                            className={`px-1.5 py-0.5 rounded text-xs border ${getPriorityColor(task.priority)}`}
                          >
                            {task.priority.charAt(0).toUpperCase()}
                          </span>
                          {/* Story Points */}
                          {task.storyPoints && (
                            <span className="text-xs text-text-light bg-primary-soft px-1.5 py-0.5 rounded">
                              {task.storyPoints}
                            </span>
                          )}
                        </div>
                        {/* Assignee */}
                        {task.assignee ? (
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-orange to-accent-purple flex items-center justify-center overflow-hidden">
                            {task.assignee.avatar ? (
                              <img
                                src={task.assignee.avatar}
                                alt={task.assignee.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="text-white text-xs font-bold">
                                {task.assignee.name.charAt(0).toUpperCase()}
                              </span>
                            )}
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-dashed border-accent-blue/30 flex items-center justify-center">
                            <User size={12} className="text-text-light" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {columnTasks.length === 0 && (
                    <div className="text-center py-8 text-text-light text-sm">
                      No issues in this column
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* List View */}
      {view === 'list' && (
        <div className="bg-white border border-accent-blue/20 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary-soft/30">
                <tr className="border-b border-accent-blue/20">
                  <th className="text-left p-3 text-xs font-semibold text-text-medium">TYPE</th>
                  <th className="text-left p-3 text-xs font-semibold text-text-medium">KEY</th>
                  <th className="text-left p-3 text-xs font-semibold text-text-medium">SUMMARY</th>
                  <th className="text-left p-3 text-xs font-semibold text-text-medium">ASSIGNEE</th>
                  <th className="text-left p-3 text-xs font-semibold text-text-medium">REPORTER</th>
                  <th className="text-left p-3 text-xs font-semibold text-text-medium">PRIORITY</th>
                  <th className="text-left p-3 text-xs font-semibold text-text-medium">STATUS</th>
                  <th className="text-left p-3 text-xs font-semibold text-text-medium">SPRINT</th>
                </tr>
              </thead>
              <tbody>
                {activeSprintTasks.map((task) => (
                  <tr
                    key={task.id}
                    className="border-b border-accent-blue/10 hover:bg-primary-soft/30 transition-colors"
                  >
                    <td className="p-3">
                      <div className="flex items-center space-x-1">
                        {getTypeIcon(task.type)}
                        <span className="text-xs text-text-medium capitalize">{task.type}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className="text-xs font-medium text-text-dark">{task.key}</span>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-text-dark">{task.title}</span>
                        {task.labels.length > 0 && (
                          <div className="flex space-x-1">
                            {task.labels.slice(0, 2).map((label, idx) => (
                              <span
                                key={idx}
                                className="px-1.5 py-0.5 bg-primary-soft text-text-medium text-xs rounded"
                              >
                                {label}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-3">
                      {task.assignee ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-orange to-accent-purple flex items-center justify-center overflow-hidden">
                            {task.assignee.avatar ? (
                              <img
                                src={task.assignee.avatar}
                                alt={task.assignee.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="text-white text-xs font-bold">
                                {task.assignee.name.charAt(0).toUpperCase()}
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-text-dark">{task.assignee.name}</span>
                        </div>
                      ) : (
                        <span className="text-sm text-text-light">Unassigned</span>
                      )}
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center overflow-hidden">
                          {task.reporter.avatar ? (
                            <img
                              src={task.reporter.avatar}
                              alt={task.reporter.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-white text-xs font-bold">
                              {task.reporter.name.charAt(0).toUpperCase()}
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-text-dark">{task.reporter.name}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded text-xs border ${getPriorityColor(task.priority)}`}
                      >
                        {task.priority}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-1 rounded text-xs bg-accent-blue/10 text-accent-blue capitalize">
                        {task.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="text-sm text-text-medium">{task.sprint || 'Backlog'}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Backlog View */}
      {view === 'backlog' && (
        <div className="bg-white border border-accent-blue/20 rounded-lg p-6">
          <div className="space-y-3">
            {tasks
              .filter((task) => !task.sprint)
              .map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-4 border border-accent-blue/20 rounded-lg hover:border-accent-orange/40 transition-colors"
                >
                  <div className="flex items-center space-x-4 flex-1">
                    {getTypeIcon(task.type)}
                    <span className="text-sm font-medium text-text-light">{task.key}</span>
                    <h4 className="font-medium text-text-dark flex-1">{task.title}</h4>
                    {task.storyPoints && (
                      <span className="text-xs text-text-light bg-primary-soft px-2 py-1 rounded">
                        {task.storyPoints} pts
                      </span>
                    )}
                  </div>
                  <button onClick={playKeyClick} className="text-text-light hover:text-text-dark">
                    <MoreVertical size={18} />
                  </button>
                </div>
              ))}
            {tasks.filter((task) => !task.sprint).length === 0 && (
              <div className="text-center py-12 text-text-medium">
                No items in backlog
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
