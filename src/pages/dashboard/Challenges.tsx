import { useState } from 'react'
import { useSound } from '@/contexts/SoundContext'
import {
  Trophy,
  Calendar,
  Clock,
  Users,
  Star,
  Award,
  Target,
  CheckCircle,
  X,
  Code,
  TrendingUp,
  Zap,
  Flame,
} from 'lucide-react'

interface Challenge {
  id: string
  title: string
  description: string
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert'
  points: number
  startDate: string
  endDate: string
  participants: number
  submissions: number
  category: string
  requirements: string[]
  status: 'Active' | 'Upcoming' | 'Completed'
  completed?: boolean
  submissionLink?: string
}

interface LeaderboardEntry {
  rank: number
  name: string
  points: number
  challengesCompleted: number
  streak: number
}

export default function Challenges() {
  const { playKeyClick } = useSound()
  const [activeTab, setActiveTab] = useState<'challenges' | 'leaderboard' | 'my-submissions'>('challenges')
  const [selectedDifficulty, setSelectedDifficulty] = useState<'All' | 'Easy' | 'Medium' | 'Hard' | 'Expert'>('All')

  // Mock challenges
  const [challenges] = useState<Challenge[]>([
    {
      id: '1',
      title: 'Build a Todo App with React',
      description: 'Create a fully functional todo application using React with add, edit, delete, and filter features.',
      difficulty: 'Easy',
      points: 100,
      startDate: '2024-03-01',
      endDate: '2024-03-08',
      participants: 45,
      submissions: 32,
      category: 'Frontend',
      requirements: ['Use React hooks', 'Implement local storage', 'Add filtering options', 'Responsive design'],
      status: 'Active',
    },
    {
      id: '2',
      title: 'RESTful API with Node.js',
      description: 'Build a RESTful API with CRUD operations, authentication, and error handling.',
      difficulty: 'Medium',
      points: 200,
      startDate: '2024-03-05',
      endDate: '2024-03-12',
      participants: 38,
      submissions: 15,
      category: 'Backend',
      requirements: ['Use Express.js', 'Implement JWT auth', 'Add validation', 'Write API docs'],
      status: 'Active',
    },
    {
      id: '3',
      title: 'Full Stack E-Commerce Platform',
      description: 'Build a complete e-commerce platform with user authentication, product management, and payment integration.',
      difficulty: 'Hard',
      points: 500,
      startDate: '2024-03-10',
      endDate: '2024-03-24',
      participants: 28,
      submissions: 3,
      category: 'Full Stack',
      requirements: ['User auth system', 'Product CRUD', 'Shopping cart', 'Payment gateway', 'Admin dashboard'],
      status: 'Active',
    },
    {
      id: '4',
      title: 'Machine Learning Image Classifier',
      description: 'Create an image classification model using TensorFlow and deploy it as a web service.',
      difficulty: 'Expert',
      points: 750,
      startDate: '2024-03-15',
      endDate: '2024-03-29',
      participants: 12,
      submissions: 0,
      category: 'AI/ML',
      requirements: ['Train ML model', 'Achieve 85%+ accuracy', 'Deploy to cloud', 'Create API endpoint'],
      status: 'Upcoming',
    },
  ])

  // Mock leaderboard
  const [leaderboard] = useState<LeaderboardEntry[]>([
    { rank: 1, name: 'Sajid Ahmed', points: 2450, challengesCompleted: 12, streak: 8 },
    { rank: 2, name: 'Fatin Rahman', points: 2200, challengesCompleted: 11, streak: 6 },
    { rank: 3, name: 'Mahmud Hasan', points: 1980, challengesCompleted: 10, streak: 5 },
    { rank: 4, name: 'Sifat Ali', points: 1750, challengesCompleted: 9, streak: 4 },
    { rank: 5, name: 'Naeem Khan', points: 1620, challengesCompleted: 8, streak: 7 },
  ])

  const filteredChallenges = challenges.filter((challenge) => {
    return selectedDifficulty === 'All' || challenge.difficulty === selectedDifficulty
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-accent-green/20 text-accent-green'
      case 'Medium':
        return 'bg-accent-blue/20 text-accent-blue'
      case 'Hard':
        return 'bg-accent-orange/20 text-accent-orange'
      case 'Expert':
        return 'bg-accent-purple/20 text-accent-purple'
      default:
        return 'bg-accent-blue/20 text-accent-blue'
    }
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-glow-orange flex items-center gap-2">
            <Trophy size={32} />
            Weekly Challenges
          </h1>
          <p className="text-text-medium mt-1">Compete, learn, and earn points through coding challenges</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-accent-blue/20">
        {[
          { id: 'challenges', label: 'Challenges', icon: Target },
          { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
          { id: 'my-submissions', label: 'My Submissions', icon: CheckCircle },
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

      {/* Challenges Tab */}
      {activeTab === 'challenges' && (
        <div className="space-y-6">
          {/* Filter */}
          <div className="card">
            <div className="flex items-center gap-4">
              <span className="text-text-medium font-semibold">Filter by Difficulty:</span>
              <div className="flex gap-2">
                {['All', 'Easy', 'Medium', 'Hard', 'Expert'].map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => {
                      setSelectedDifficulty(difficulty as any)
                      playKeyClick()
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedDifficulty === difficulty
                        ? 'bg-accent-orange text-white'
                        : 'bg-accent-blue/10 text-accent-blue hover:bg-accent-blue/20'
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Challenge Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className="card hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
              >
                {challenge.status === 'Active' && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent-green/20 text-accent-green text-xs font-semibold">
                      <Flame size={12} />
                      Active
                    </div>
                  </div>
                )}
                {challenge.status === 'Upcoming' && (
                  <div className="absolute top-4 right-4">
                    <div className="px-2 py-1 rounded-full bg-accent-blue/20 text-accent-blue text-xs font-semibold">
                      Upcoming
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-glow-orange mb-2">{challenge.title}</h3>
                      <p className="text-text-medium text-sm mb-3">{challenge.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-orange/20 text-accent-orange flex items-center gap-1">
                      <Star size={14} />
                      {challenge.points} points
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue/20 text-accent-blue">
                      {challenge.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-text-light mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {new Date(challenge.endDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      {challenge.participants} participants
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle size={16} />
                      {challenge.submissions} submissions
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-text-dark mb-2 text-sm">Requirements:</h4>
                  <ul className="space-y-1">
                    {challenge.requirements.map((req, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-text-medium">
                        <CheckCircle size={14} className="text-accent-green" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {challenge.status === 'Active' && (
                  <button
                    onClick={() => {
                      playKeyClick()
                      // Handle challenge participation
                    }}
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <Code size={18} />
                    Start Challenge
                  </button>
                )}
                {challenge.status === 'Upcoming' && (
                  <button
                    disabled
                    className="w-full btn-secondary opacity-50 cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Leaderboard Tab */}
      {activeTab === 'leaderboard' && (
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-2xl font-bold text-glow-orange mb-6 flex items-center gap-2">
              <Trophy size={28} />
              Top Performers
            </h2>
            <div className="space-y-3">
              {leaderboard.map((entry) => (
                <div
                  key={entry.rank}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    entry.rank === 1
                      ? 'bg-gradient-to-r from-accent-orange/20 to-accent-orange-gold/20 border-accent-orange'
                      : entry.rank === 2
                      ? 'bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 border-accent-blue'
                      : entry.rank === 3
                      ? 'bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 border-accent-purple'
                      : 'bg-white/50 border-accent-blue/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                        entry.rank === 1
                          ? 'bg-accent-orange text-white'
                          : entry.rank === 2
                          ? 'bg-accent-blue text-white'
                          : entry.rank === 3
                          ? 'bg-accent-purple text-white'
                          : 'bg-accent-blue/20 text-accent-blue'
                      }`}>
                        {entry.rank === 1 ? <Trophy size={24} /> : entry.rank}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-text-dark">{entry.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-text-medium mt-1">
                          <span className="flex items-center gap-1">
                            <Star className="text-accent-orange" size={14} />
                            {entry.points.toLocaleString()} points
                          </span>
                          <span className="flex items-center gap-1">
                            <CheckCircle className="text-accent-green" size={14} />
                            {entry.challengesCompleted} completed
                          </span>
                          <span className="flex items-center gap-1">
                            <Flame className="text-accent-orange" size={14} />
                            {entry.streak} day streak
                          </span>
                        </div>
                      </div>
                    </div>
                    {entry.rank <= 3 && (
                      <div className="text-2xl">
                        {entry.rank === 1 && '🥇'}
                        {entry.rank === 2 && '🥈'}
                        {entry.rank === 3 && '🥉'}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-accent-orange/20 to-accent-blue/20 flex items-center justify-center">
                <Trophy className="text-accent-orange" size={32} />
              </div>
              <div className="text-3xl font-bold text-glow-orange mb-1">2450</div>
              <div className="text-text-medium">Your Total Points</div>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">
                <CheckCircle className="text-accent-blue" size={32} />
              </div>
              <div className="text-3xl font-bold text-glow-orange mb-1">12</div>
              <div className="text-text-medium">Challenges Completed</div>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 flex items-center justify-center">
                <Flame className="text-accent-purple" size={32} />
              </div>
              <div className="text-3xl font-bold text-glow-orange mb-1">8</div>
              <div className="text-text-medium">Day Streak</div>
            </div>
          </div>
        </div>
      )}

      {/* My Submissions Tab */}
      {activeTab === 'my-submissions' && (
        <div className="card">
          <div className="text-center py-12">
            <Code className="text-accent-blue mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold text-text-dark mb-2">No Submissions Yet</h3>
            <p className="text-text-medium mb-6">Start a challenge to see your submissions here</p>
            <button
              onClick={() => {
                setActiveTab('challenges')
                playKeyClick()
              }}
              className="btn-primary"
            >
              Browse Challenges
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
