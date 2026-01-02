import { useState } from 'react'
import { useSound } from '@/contexts/SoundContext'
import { Calendar, Video, Plus, Clock, Users, User, Radio } from 'lucide-react'
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
    status: 'ongoing' as const,
  },
  {
    id: '2',
    title: 'React Workshop',
    description: 'Learning React hooks and best practices',
    scheduledAt: new Date('2024-12-20T14:00:00'),
    duration: 60,
    host: { name: 'Sara Ahmed' },
    participants: 12,
    type: 'public' as const,
    status: 'ongoing' as const,
  },
  {
    id: '3',
    title: 'Code Review Session',
    description: 'Reviewing pull requests and discussing improvements',
    scheduledAt: new Date('2024-12-20T16:00:00'),
    duration: 45,
    host: { name: 'Rifat Hossain' },
    participants: 8,
    type: 'public' as const,
    status: 'ongoing' as const,
  },
  {
    id: '4',
    title: 'TypeScript Deep Dive',
    description: 'Advanced TypeScript patterns and techniques',
    scheduledAt: new Date('2024-12-20T18:00:00'),
    duration: 90,
    host: { name: 'Tasnim Islam' },
    participants: 15,
    type: 'public' as const,
    status: 'ongoing' as const,
  },
  {
    id: '5',
    title: 'UI/UX Design Discussion',
    description: 'Sharing design ideas and getting feedback',
    scheduledAt: new Date('2024-12-20T19:00:00'),
    duration: 40,
    host: { name: 'Arif Mahmud' },
    participants: 7,
    type: 'public' as const,
    status: 'ongoing' as const,
  },
  {
    id: '6',
    title: 'Backend Architecture',
    description: 'Discussing microservices and API design',
    scheduledAt: new Date('2024-12-20T20:00:00'),
    duration: 75,
    host: { name: 'Nadia Chowdhury' },
    participants: 10,
    type: 'public' as const,
    status: 'ongoing' as const,
  },
  {
    id: '7',
    title: 'Mobile Development',
    description: 'React Native and Flutter comparison',
    scheduledAt: new Date('2024-12-20T21:00:00'),
    duration: 50,
    host: { name: 'Karim Uddin' },
    participants: 9,
    type: 'public' as const,
    status: 'ongoing' as const,
  },
  {
    id: '8',
    title: 'DevOps Practices',
    description: 'CI/CD pipelines and deployment strategies',
    scheduledAt: new Date('2024-12-20T22:00:00'),
    duration: 60,
    host: { name: 'Lubna Akter' },
    participants: 11,
    type: 'public' as const,
    status: 'ongoing' as const,
  },
  {
    id: '9',
    title: 'Open Source Contribution',
    description: 'How to contribute to open source projects',
    scheduledAt: new Date('2024-12-20T23:00:00'),
    duration: 45,
    host: { name: 'Shakib Hasan' },
    participants: 6,
    type: 'public' as const,
    status: 'ongoing' as const,
  },
]

export default function Meetings() {
  const { playKeyClick } = useSound()
  const [meetings] = useState(mockMeetings)
  const [view, setView] = useState<'list' | 'calendar'>('list')

  // Filter only ongoing meetings for the grid
  const ongoingMeetings = meetings.filter((meeting) => meeting.status === 'ongoing')

  return (
    <div className="max-w-7xl mx-auto px-4">
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
              : 'bg-white text-text-medium hover:bg-primary-soft border border-accent-blue/20'
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
              : 'bg-white text-text-medium hover:bg-primary-soft border border-accent-blue/20'
          }`}
        >
          Calendar View
        </button>
      </div>

      {/* Meetings Grid - Free4Talk Style */}
      {view === 'list' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ongoingMeetings.map((meeting) => (
            <div
              key={meeting.id}
              className="bg-white border border-accent-blue/20 rounded-lg p-4 flex flex-col hover:border-accent-orange/40 transition-all hover:shadow-md relative overflow-hidden"
              style={{ aspectRatio: '1', minHeight: '280px' }}
            >
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent-blue/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
              
              {/* Header */}
              <div className="flex items-start justify-between mb-3 relative z-10">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-text-dark truncate">{meeting.title}</h3>
                    {/* Ongoing status indicator */}
                    <div className="flex items-center gap-1 px-2 py-0.5 bg-green-100 rounded-full">
                      <Radio size={10} className="text-green-600 fill-green-600 animate-pulse" />
                      <span className="text-green-700 text-xs font-medium">Live</span>
                    </div>
                  </div>
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                      meeting.type === 'public'
                        ? 'bg-accent-blue/10 text-accent-blue'
                        : 'bg-accent-orange/10 text-accent-orange'
                    }`}
                  >
                    {meeting.type}
                  </span>
                </div>
              </div>

              {/* Description with icon */}
              <div className="mb-4 flex-1 relative z-10">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 p-1.5 rounded-lg bg-accent-orange/10 flex-shrink-0">
                    <Video size={14} className="text-accent-orange" />
                  </div>
                  <p className="text-text-medium text-sm line-clamp-3 leading-relaxed">{meeting.description}</p>
                </div>
              </div>

              {/* Meeting Info - Enhanced with better visuals */}
              <div className="space-y-2.5 mb-4 relative z-10">
                <div className="flex items-center text-text-dark text-xs bg-primary-soft/50 rounded-lg px-3 py-2">
                  <div className="p-1 rounded bg-accent-blue/10 mr-2">
                    <Calendar size={12} className="text-accent-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{format(meeting.scheduledAt, 'MMM dd, yyyy')}</div>
                    <div className="text-text-light text-xs flex items-center gap-1 mt-0.5">
                      <Clock size={10} />
                      <span>{format(meeting.scheduledAt, 'hh:mm a')} • {meeting.duration} min</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between bg-primary-soft/50 rounded-lg px-3 py-2">
                  <div className="flex items-center text-text-dark text-xs">
                    <div className="p-1 rounded bg-accent-purple/10 mr-2">
                      <Users size={12} className="text-accent-purple" />
                    </div>
                    <span className="font-medium">{meeting.participants}</span>
                    <span className="text-text-light ml-1">participants</span>
                  </div>
                  <div className="flex items-center text-text-light text-xs">
                    <div className="p-1 rounded bg-accent-pink/10 mr-1.5">
                      <User size={12} className="text-accent-pink" />
                    </div>
                    <span className="truncate max-w-[80px]">{meeting.host.name}</span>
                  </div>
                </div>
              </div>

              {/* Join Button */}
              <button
                onClick={playKeyClick}
                className="mt-auto w-full bg-accent-orange text-white py-2.5 px-4 rounded-lg font-medium hover:bg-accent-orange-gold transition-colors flex items-center justify-center space-x-2 shadow-sm hover:shadow-md relative z-10"
              >
                <Video size={16} />
                <span>Join Meeting</span>
              </button>
            </div>
          ))}

          {ongoingMeetings.length === 0 && (
            <div className="col-span-full bg-white border border-accent-blue/20 rounded-lg p-12 text-center">
              <p className="text-text-medium text-lg">No ongoing meetings. Create one to get started!</p>
            </div>
          )}
        </div>
      )}

      {/* Calendar View */}
      {view === 'calendar' && (
        <div className="bg-white border border-accent-blue/20 rounded-lg p-12 text-center">
          <p className="text-text-medium text-lg">Calendar view coming soon. Use list view for now.</p>
        </div>
      )}
    </div>
  )
}
