import { useState } from 'react'
import { useSound } from '@/contexts/SoundContext'
import { Calendar, Video, Plus, Clock, Users } from 'lucide-react'
import { format } from 'date-fns'

// Mock meetings - replace with actual data from Firebase
const mockMeetings = [
  {
    id: '1',
    title: 'Team Standup',
    description: 'Daily team standup meeting',
    scheduledAt: new Date('2024-12-20T10:00:00'),
    duration: 30,
    host: { name: 'John Doe' },
    participants: 5,
    type: 'public' as const,
  },
]

export default function Meetings() {
  const { playKeyClick } = useSound()
  const [meetings] = useState(mockMeetings)
  const [view, setView] = useState<'list' | 'calendar'>('list')

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-glow-orange">Meetings</h1>
        <button onClick={playKeyClick} className="btn-primary flex items-center space-x-2">
          <Plus size={20} />
          <span>Schedule Meeting</span>
        </button>
      </div>

      {/* View Toggle */}
      <div className="flex space-x-4 mb-6">
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
          List View
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
          Calendar View
        </button>
      </div>

      {/* Meetings List */}
      {view === 'list' && (
        <div className="space-y-4">
          {meetings.map((meeting) => (
            <div key={meeting.id} className="card">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="text-xl font-bold">{meeting.title}</h3>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        meeting.type === 'public'
                          ? 'bg-accent-blue/20 text-accent-blue'
                          : 'bg-accent-orange/20 text-accent-orange'
                      }`}
                    >
                      {meeting.type}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{meeting.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{format(meeting.scheduledAt, 'MMM dd, yyyy')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{format(meeting.scheduledAt, 'hh:mm a')} ({meeting.duration} min)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={16} />
                      <span>{meeting.participants} participants</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>Host: {meeting.host.name}</span>
                    </div>
                  </div>
                </div>
                <button onClick={playKeyClick} className="btn-primary flex items-center space-x-2 ml-4">
                  <Video size={18} />
                  <span>Join</span>
                </button>
              </div>
            </div>
          ))}

          {meetings.length === 0 && (
            <div className="card text-center py-12">
              <p className="text-gray-400 text-lg">No meetings scheduled. Create one to get started!</p>
            </div>
          )}
        </div>
      )}

      {/* Calendar View */}
      {view === 'calendar' && (
        <div className="card">
          <p className="text-gray-400 text-center py-12">
            Calendar view coming soon. Use list view for now.
          </p>
        </div>
      )}
    </div>
  )
}

