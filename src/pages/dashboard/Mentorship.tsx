import { useState } from 'react'
import { useSound } from '@/contexts/SoundContext'
import {
  Users,
  Search,
  Calendar,
  Clock,
  Star,
  GraduationCap,
  Briefcase,
  MessageCircle,
  Video,
  CheckCircle,
  X,
  Filter,
  UserCheck,
  BookOpen,
} from 'lucide-react'

interface Mentor {
  id: string
  name: string
  avatar?: string
  role: 'Senior' | 'Alumni'
  specialization: string[]
  experience: string
  rating: number
  sessions: number
  students: number
  bio: string
  available: boolean
  nextAvailable?: string
}

interface Session {
  id: string
  mentorId: string
  mentorName: string
  date: string
  time: string
  duration: string
  topic: string
  status: 'Upcoming' | 'Completed' | 'Cancelled'
  meetingLink?: string
}

export default function Mentorship() {
  const { playKeyClick } = useSound()
  const [activeTab, setActiveTab] = useState<'browse' | 'my-sessions' | 'requests'>('browse')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRole, setSelectedRole] = useState<'All' | 'Senior' | 'Alumni'>('All')
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [bookingDate, setBookingDate] = useState('')
  const [bookingTime, setBookingTime] = useState('')
  const [bookingTopic, setBookingTopic] = useState('')

  // Mock mentors
  const [mentors] = useState<Mentor[]>([
    {
      id: '1',
      name: 'Dr. Ahmed Rahman',
      role: 'Alumni',
      specialization: ['Full Stack Development', 'System Architecture', 'Team Leadership'],
      experience: '10+ years',
      rating: 4.9,
      sessions: 156,
      students: 45,
      bio: 'Senior Software Engineer at Google. Passionate about mentoring the next generation of developers.',
      available: true,
      nextAvailable: '2024-03-15',
    },
    {
      id: '2',
      name: 'Fatima Khan',
      role: 'Senior',
      specialization: ['React', 'Node.js', 'DevOps'],
      experience: '5 years',
      rating: 4.8,
      sessions: 89,
      students: 32,
      bio: 'Full-stack developer with expertise in modern web technologies. Love helping students grow.',
      available: true,
      nextAvailable: '2024-03-12',
    },
    {
      id: '3',
      name: 'Mohammad Ali',
      role: 'Alumni',
      specialization: ['Machine Learning', 'Data Science', 'Python'],
      experience: '8 years',
      rating: 4.7,
      sessions: 124,
      students: 38,
      bio: 'ML Engineer at Microsoft. Expert in AI/ML and passionate about teaching.',
      available: false,
    },
    {
      id: '4',
      name: 'Sara Ahmed',
      role: 'Senior',
      specialization: ['Mobile Development', 'React Native', 'Flutter'],
      experience: '4 years',
      rating: 4.9,
      sessions: 67,
      students: 28,
      bio: 'Mobile app developer with experience in both iOS and Android platforms.',
      available: true,
      nextAvailable: '2024-03-14',
    },
  ])

  // Mock sessions
  const [sessions] = useState<Session[]>([
    {
      id: '1',
      mentorId: '1',
      mentorName: 'Dr. Ahmed Rahman',
      date: '2024-03-20',
      time: '10:00 AM',
      duration: '1 hour',
      topic: 'System Design Interview Preparation',
      status: 'Upcoming',
      meetingLink: 'https://meet.example.com/session1',
    },
    {
      id: '2',
      mentorId: '2',
      mentorName: 'Fatima Khan',
      date: '2024-03-10',
      time: '2:00 PM',
      duration: '1 hour',
      topic: 'React Best Practices',
      status: 'Completed',
    },
  ])

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.specialization.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase())) ||
      mentor.bio.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = selectedRole === 'All' || mentor.role === selectedRole
    return matchesSearch && matchesRole
  })

  const upcomingSessions = sessions.filter(s => s.status === 'Upcoming')
  const completedSessions = sessions.filter(s => s.status === 'Completed')

  const handleBookSession = () => {
    if (selectedMentor && bookingDate && bookingTime && bookingTopic) {
      playKeyClick()
      setShowBookingModal(false)
      setSelectedMentor(null)
      setBookingDate('')
      setBookingTime('')
      setBookingTopic('')
      // Handle booking logic
    }
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-glow-orange flex items-center gap-2">
            <Users size={32} />
            Mentorship System
          </h1>
          <p className="text-text-medium mt-1">Connect with seniors and alumni for guidance and growth</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-accent-blue/20">
        {[
          { id: 'browse', label: 'Browse Mentors', icon: Users },
          { id: 'my-sessions', label: 'My Sessions', icon: Calendar },
          { id: 'requests', label: 'Mentorship Requests', icon: MessageCircle },
        ].map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any)
                playKeyClick()
              }}
              className={`px-6 py-3 font-medium transition-colors flex items-center gap-2 border-b-2 ${
                activeTab === tab.id
                  ? 'border-accent-orange text-accent-orange'
                  : 'border-transparent text-text-medium hover:text-accent-blue'
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Browse Mentors Tab */}
      {activeTab === 'browse' && (
        <div className="space-y-6">
          {/* Search and Filter */}
          <div className="card">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light" size={20} />
                <input
                  type="text"
                  placeholder="Search mentors by name, specialization, or expertise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-accent-blue/20 focus:outline-none focus:border-accent-orange"
                />
              </div>
              <select
                value={selectedRole}
                onChange={(e) => {
                  setSelectedRole(e.target.value as any)
                  playKeyClick()
                }}
                className="px-4 py-2 rounded-lg border border-accent-blue/20 focus:outline-none focus:border-accent-orange"
              >
                <option value="All">All Mentors</option>
                <option value="Senior">Seniors</option>
                <option value="Alumni">Alumni</option>
              </select>
            </div>
          </div>

          {/* Mentor Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredMentors.map((mentor) => (
              <div
                key={mentor.id}
                className="card hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-orange to-accent-purple p-1">
                    <div className="w-full h-full rounded-full bg-primary-light flex items-center justify-center">
                      <Users className="text-accent-orange" size={40} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-glow-orange">{mentor.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                            mentor.role === 'Senior' ? 'bg-accent-blue/20 text-accent-blue' :
                            'bg-accent-purple/20 text-accent-purple'
                          }`}>
                            {mentor.role}
                          </span>
                          {mentor.available && (
                            <span className="px-2 py-1 text-xs rounded-full bg-accent-green/20 text-accent-green font-semibold">
                              Available
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="text-accent-orange" size={18} />
                        <span className="font-bold">{mentor.rating}</span>
                      </div>
                    </div>
                    <p className="text-text-medium text-sm mb-3 line-clamp-2">{mentor.bio}</p>
                    <div className="flex items-center gap-4 text-sm text-text-light mb-3">
                      <div className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {mentor.experience}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {mentor.sessions} sessions
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        {mentor.students} students
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {mentor.specialization.slice(0, 3).map((spec, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded bg-accent-blue/10 text-accent-blue font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                      {mentor.specialization.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded bg-accent-purple/10 text-accent-purple font-medium">
                          +{mentor.specialization.length - 3} more
                        </span>
                      )}
                    </div>
                    {mentor.nextAvailable && (
                      <p className="text-xs text-text-light mb-3">
                        Next available: {new Date(mentor.nextAvailable).toLocaleDateString()}
                      </p>
                    )}
                    <button
                      onClick={() => {
                        setSelectedMentor(mentor)
                        setShowBookingModal(true)
                        playKeyClick()
                      }}
                      disabled={!mentor.available}
                      className={`w-full ${
                        mentor.available ? 'btn-primary' : 'btn-secondary opacity-50 cursor-not-allowed'
                      }`}
                    >
                      {mentor.available ? 'Book 1:1 Session' : 'Not Available'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* My Sessions Tab */}
      {activeTab === 'my-sessions' && (
        <div className="space-y-6">
          {/* Upcoming Sessions */}
          {upcomingSessions.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-glow-orange mb-4 flex items-center gap-2">
                <Calendar size={24} />
                Upcoming Sessions
              </h2>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="card">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-text-dark">{session.topic}</h3>
                          <span className="px-2 py-1 text-xs rounded-full bg-accent-blue/20 text-accent-blue font-semibold">
                            {session.status}
                          </span>
                        </div>
                        <p className="text-text-medium mb-3">Mentor: {session.mentorName}</p>
                        <div className="flex items-center gap-4 text-sm text-text-light">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {new Date(session.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            {session.time} ({session.duration})
                          </div>
                        </div>
                      </div>
                      {session.meetingLink && (
                        <a
                          href={session.meetingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={playKeyClick}
                          className="btn-primary flex items-center gap-2"
                        >
                          <Video size={18} />
                          Join Meeting
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Completed Sessions */}
          {completedSessions.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-glow-orange mb-4 flex items-center gap-2">
                <CheckCircle size={24} />
                Completed Sessions
              </h2>
              <div className="space-y-4">
                {completedSessions.map((session) => (
                  <div key={session.id} className="card opacity-75">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-text-dark">{session.topic}</h3>
                          <span className="px-2 py-1 text-xs rounded-full bg-accent-green/20 text-accent-green font-semibold">
                            {session.status}
                          </span>
                        </div>
                        <p className="text-text-medium mb-3">Mentor: {session.mentorName}</p>
                        <div className="flex items-center gap-4 text-sm text-text-light">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {new Date(session.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            {session.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {upcomingSessions.length === 0 && completedSessions.length === 0 && (
            <div className="card text-center py-12">
              <Calendar className="text-accent-blue mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-text-dark mb-2">No Sessions Yet</h3>
              <p className="text-text-medium mb-6">Book your first mentorship session to get started</p>
              <button
                onClick={() => {
                  setActiveTab('browse')
                  playKeyClick()
                }}
                className="btn-primary"
              >
                Browse Mentors
              </button>
            </div>
          )}
        </div>
      )}

      {/* Mentorship Requests Tab */}
      {activeTab === 'requests' && (
        <div className="card text-center py-12">
          <MessageCircle className="text-accent-blue mx-auto mb-4" size={48} />
          <h3 className="text-xl font-bold text-text-dark mb-2">No Requests Yet</h3>
          <p className="text-text-medium mb-6">Mentorship requests will appear here</p>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && selectedMentor && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl">
            <div className="p-6 border-b border-accent-blue/20">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-glow-orange">
                  Book Session with {selectedMentor.name}
                </h2>
                <button
                  onClick={() => {
                    setShowBookingModal(false)
                    setSelectedMentor(null)
                    playKeyClick()
                  }}
                  className="text-text-light hover:text-text-dark"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-text-dark mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 rounded-lg border border-accent-blue/20 focus:outline-none focus:border-accent-orange"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-dark mb-2">
                  Select Time
                </label>
                <input
                  type="time"
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-accent-blue/20 focus:outline-none focus:border-accent-orange"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-dark mb-2">
                  Session Topic / What do you want to discuss?
                </label>
                <textarea
                  rows={4}
                  value={bookingTopic}
                  onChange={(e) => setBookingTopic(e.target.value)}
                  placeholder="E.g., System design interview preparation, React best practices, Career guidance..."
                  className="w-full px-4 py-2 rounded-lg border border-accent-blue/20 focus:outline-none focus:border-accent-orange"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => {
                    setShowBookingModal(false)
                    setSelectedMentor(null)
                    playKeyClick()
                  }}
                  className="flex-1 btn-secondary"
                >
                  Cancel
                </button>
                <button
                  onClick={handleBookSession}
                  disabled={!bookingDate || !bookingTime || !bookingTopic}
                  className="flex-1 btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Calendar size={18} />
                  Book Session
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
