import { useState } from 'react'
import { useSound } from '@/contexts/SoundContext'
import { Plus, Filter, List, LayoutGrid, Calendar } from 'lucide-react'

// Mock tasks - replace with actual data from Firebase
const mockTasks = [
  {
    id: '1',
    title: 'Implement user authentication',
    status: 'in_progress' as const,
    priority: 'high' as const,
    assignee: { name: 'John Doe' },
    dueDate: new Date('2024-12-25'),
  },
]

const columns = ['backlog', 'todo', 'in_progress', 'in_review', 'done'] as const

export default function Tasks() {
  const { playKeyClick } = useSound()
  const [tasks] = useState(mockTasks)
  const [view, setView] = useState<'kanban' | 'list' | 'calendar'>('kanban')

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-glow-orange">Tasks</h1>
        <div className="flex items-center space-x-4">
          <button onClick={playKeyClick} className="btn-secondary flex items-center space-x-2">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button onClick={playKeyClick} className="btn-primary flex items-center space-x-2">
            <Plus size={20} />
            <span>Create Task</span>
          </button>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => {
            setView('kanban')
            playKeyClick()
          }}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            view === 'kanban'
              ? 'bg-accent-orange text-white'
              : 'bg-primary-navy/50 text-gray-300 hover:bg-accent-blue/20'
          }`}
        >
          <LayoutGrid size={18} className="inline mr-2" />
          Kanban
        </button>
        <button
          onClick={() => {
            setView('list')
            playKeyClick()
          }}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            view === 'list'
              ? 'bg-accent-orange text-white'
              : 'bg-primary-navy/50 text-gray-300 hover:bg-accent-blue/20'
          }`}
        >
          <List size={18} className="inline mr-2" />
          List
        </button>
        <button
          onClick={() => {
            setView('calendar')
            playKeyClick()
          }}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            view === 'calendar'
              ? 'bg-accent-orange text-white'
              : 'bg-primary-navy/50 text-gray-300 hover:bg-accent-blue/20'
          }`}
        >
          <Calendar size={18} className="inline mr-2" />
          Calendar
        </button>
      </div>

      {/* Kanban Board */}
      {view === 'kanban' && (
        <div className="grid grid-cols-5 gap-4">
          {columns.map((column) => (
            <div key={column} className="card">
              <h3 className="font-bold mb-4 text-glow-orange capitalize">
                {column.replace('_', ' ')}
              </h3>
              <div className="space-y-3">
                {tasks
                  .filter((task) => task.status === column)
                  .map((task) => (
                    <div
                      key={task.id}
                      className="p-3 rounded-lg bg-primary-dark/50 border border-accent-blue/30 cursor-pointer hover:border-accent-blue transition-colors"
                    >
                      <h4 className="font-medium mb-2">{task.title}</h4>
                      <div className="flex items-center justify-between text-sm">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            task.priority === 'high' || task.priority === 'critical'
                              ? 'bg-accent-orange/20 text-accent-orange'
                              : 'bg-accent-blue/20 text-accent-blue'
                          }`}
                        >
                          {task.priority}
                        </span>
                        {task.dueDate && (
                          <span className="text-gray-400">
                            {task.dueDate.toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {view === 'list' && (
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-accent-blue/30">
                  <th className="text-left p-4">Task</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Priority</th>
                  <th className="text-left p-4">Assignee</th>
                  <th className="text-left p-4">Due Date</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id} className="border-b border-accent-blue/10 hover:bg-primary-dark/30">
                    <td className="p-4 font-medium">{task.title}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 rounded text-xs bg-accent-blue/20 text-accent-blue capitalize">
                        {task.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          task.priority === 'high' || task.priority === 'critical'
                            ? 'bg-accent-orange/20 text-accent-orange'
                            : 'bg-accent-blue/20 text-accent-blue'
                        }`}
                      >
                        {task.priority}
                      </span>
                    </td>
                    <td className="p-4">{task.assignee?.name || 'Unassigned'}</td>
                    <td className="p-4">
                      {task.dueDate ? task.dueDate.toLocaleDateString() : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Calendar View */}
      {view === 'calendar' && (
        <div className="card">
          <p className="text-gray-400 text-center py-12">
            Calendar view coming soon. Use Kanban or List view for now.
          </p>
        </div>
      )}
    </div>
  )
}

