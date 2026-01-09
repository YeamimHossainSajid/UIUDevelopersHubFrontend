import { useState } from 'react'
import { useSound } from '@/contexts/SoundContext'
import {
  BookOpen,
  Search,
  TrendingUp,
  Award,
  Clock,
  Users,
  ExternalLink,
  Play,
  CheckCircle,
  Star,
  Filter,
  Target,
  Code,
  GraduationCap,
} from 'lucide-react'

interface Roadmap {
  id: string
  title: string
  description: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  topics: number
  enrolled: number
  rating: number
  icon: any
}

interface Resource {
  id: string
  title: string
  type: 'Course' | 'Article' | 'Video' | 'Documentation'
  provider: string
  url: string
  rating: number
  duration?: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
}

interface Course {
  id: string
  title: string
  provider: string
  description: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  rating: number
  students: number
  price: 'Free' | string
  url: string
  skills: string[]
}

export default function Learning() {
  const { playKeyClick } = useSound()
  const [activeTab, setActiveTab] = useState<'roadmaps' | 'resources' | 'courses'>('roadmaps')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLevel, setSelectedLevel] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All')

  // Mock roadmaps
  const [roadmaps] = useState<Roadmap[]>([
    {
      id: '1',
      title: 'Full Stack Web Development',
      description: 'Complete roadmap from HTML/CSS to advanced React and Node.js',
      level: 'Beginner',
      duration: '6 months',
      topics: 45,
      enrolled: 234,
      rating: 4.8,
      icon: Code,
    },
    {
      id: '2',
      title: 'Mobile App Development',
      description: 'Learn React Native and Flutter for cross-platform mobile development',
      level: 'Intermediate',
      duration: '4 months',
      topics: 32,
      enrolled: 189,
      rating: 4.7,
      icon: Code,
    },
    {
      id: '3',
      title: 'DevOps & Cloud Computing',
      description: 'Master Docker, Kubernetes, AWS, and CI/CD pipelines',
      level: 'Advanced',
      duration: '5 months',
      topics: 38,
      enrolled: 156,
      rating: 4.9,
      icon: Code,
    },
    {
      id: '4',
      title: 'Data Science & Machine Learning',
      description: 'Python, pandas, scikit-learn, and deep learning fundamentals',
      level: 'Intermediate',
      duration: '6 months',
      topics: 42,
      enrolled: 201,
      rating: 4.6,
      icon: Code,
    },
  ])

  // Mock resources
  const [resources] = useState<Resource[]>([
    {
      id: '1',
      title: 'React Hooks Complete Guide',
      type: 'Article',
      provider: 'Dev.to',
      url: 'https://dev.to',
      rating: 4.8,
      level: 'Intermediate',
    },
    {
      id: '2',
      title: 'Node.js Best Practices',
      type: 'Documentation',
      provider: 'Node.js Official',
      url: 'https://nodejs.org',
      rating: 4.9,
      level: 'Advanced',
    },
    {
      id: '3',
      title: 'TypeScript Fundamentals',
      type: 'Video',
      provider: 'YouTube',
      url: 'https://youtube.com',
      rating: 4.7,
      duration: '2h 30m',
      level: 'Beginner',
    },
    {
      id: '4',
      title: 'RESTful API Design',
      type: 'Course',
      provider: 'FreeCodeCamp',
      url: 'https://freecodecamp.org',
      rating: 4.8,
      level: 'Intermediate',
    },
  ])

  // Mock recommended courses
  const [courses] = useState<Course[]>([
    {
      id: '1',
      title: 'Complete React Developer Course',
      provider: 'Udemy',
      description: 'Build real-world projects with React, Redux, and Hooks',
      level: 'Intermediate',
      duration: '40 hours',
      rating: 4.8,
      students: 125000,
      price: '৳1,200',
      url: 'https://udemy.com',
      skills: ['React', 'Redux', 'Hooks', 'Context API'],
    },
    {
      id: '2',
      title: 'Node.js - The Complete Guide',
      provider: 'Udemy',
      description: 'Master Node.js, Express, MongoDB, and build REST APIs',
      level: 'Intermediate',
      duration: '35 hours',
      rating: 4.9,
      students: 98000,
      price: '৳1,500',
      url: 'https://udemy.com',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    },
    {
      id: '3',
      title: 'AWS Certified Developer',
      provider: 'Coursera',
      description: 'Prepare for AWS certification with hands-on projects',
      level: 'Advanced',
      duration: '50 hours',
      rating: 4.7,
      students: 45000,
      price: 'Free',
      url: 'https://coursera.org',
      skills: ['AWS', 'Cloud Computing', 'DevOps'],
    },
  ])

  const filteredRoadmaps = roadmaps.filter((roadmap) => {
    const matchesSearch = roadmap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      roadmap.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = selectedLevel === 'All' || roadmap.level === selectedLevel
    return matchesSearch && matchesLevel
  })

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.provider.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = selectedLevel === 'All' || resource.level === selectedLevel
    return matchesSearch && matchesLevel
  })

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel
    return matchesSearch && matchesLevel
  })

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-glow-orange flex items-center gap-2">
            <BookOpen size={32} />
            Learning Hub
          </h1>
          <p className="text-text-medium mt-1">Roadmaps, resources, and courses to accelerate your growth</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-accent-blue/20">
        {[
          { id: 'roadmaps', label: 'Learning Roadmaps', icon: Target },
          { id: 'resources', label: 'Resources', icon: BookOpen },
          { id: 'courses', label: 'Recommended Courses', icon: GraduationCap },
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

      {/* Search and Filter */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light" size={20} />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-accent-blue/20 focus:outline-none focus:border-accent-orange"
            />
          </div>
          <select
            value={selectedLevel}
            onChange={(e) => {
              setSelectedLevel(e.target.value as any)
              playKeyClick()
            }}
            className="px-4 py-2 rounded-lg border border-accent-blue/20 focus:outline-none focus:border-accent-orange"
          >
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      {/* Roadmaps Tab */}
      {activeTab === 'roadmaps' && (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredRoadmaps.map((roadmap) => {
            const Icon = roadmap.icon
            return (
              <div
                key={roadmap.id}
                className="card hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                onClick={playKeyClick}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-orange/20 to-accent-blue/20 flex items-center justify-center">
                    <Icon className="text-accent-orange" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-glow-orange">{roadmap.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                        roadmap.level === 'Beginner' ? 'bg-accent-green/20 text-accent-green' :
                        roadmap.level === 'Intermediate' ? 'bg-accent-blue/20 text-accent-blue' :
                        'bg-accent-purple/20 text-accent-purple'
                      }`}>
                        {roadmap.level}
                      </span>
                    </div>
                    <p className="text-text-medium text-sm mb-3">{roadmap.description}</p>
                    <div className="flex items-center gap-4 text-sm text-text-light">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {roadmap.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Target size={16} />
                        {roadmap.topics} topics
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        {roadmap.enrolled} enrolled
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-accent-blue/20">
                  <div className="flex items-center gap-1">
                    <Star className="text-accent-orange" size={16} />
                    <span className="font-semibold">{roadmap.rating}</span>
                  </div>
                  <button className="btn-primary text-sm flex items-center gap-2">
                    <Play size={16} />
                    Start Learning
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Resources Tab */}
      {activeTab === 'resources' && (
        <div className="space-y-4">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="card hover:scale-[1.01] transition-all duration-300 cursor-pointer"
              onClick={() => {
                playKeyClick()
                window.open(resource.url, '_blank')
              }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-text-dark">{resource.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                      resource.type === 'Course' ? 'bg-accent-blue/20 text-accent-blue' :
                      resource.type === 'Article' ? 'bg-accent-green/20 text-accent-green' :
                      resource.type === 'Video' ? 'bg-accent-orange/20 text-accent-orange' :
                      'bg-accent-purple/20 text-accent-purple'
                    }`}>
                      {resource.type}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                      resource.level === 'Beginner' ? 'bg-accent-green/20 text-accent-green' :
                      resource.level === 'Intermediate' ? 'bg-accent-blue/20 text-accent-blue' :
                      'bg-accent-purple/20 text-accent-purple'
                    }`}>
                      {resource.level}
                    </span>
                  </div>
                  <p className="text-text-medium text-sm mb-2">Provider: {resource.provider}</p>
                  {resource.duration && (
                    <p className="text-text-light text-xs flex items-center gap-1">
                      <Clock size={14} />
                      {resource.duration}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="text-accent-orange" size={16} />
                    <span className="font-semibold">{resource.rating}</span>
                  </div>
                  <ExternalLink className="text-accent-blue" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Recommended Courses Tab */}
      {activeTab === 'courses' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="card hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              onClick={() => {
                playKeyClick()
                window.open(course.url, '_blank')
              }}
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-glow-orange">{course.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                    course.level === 'Beginner' ? 'bg-accent-green/20 text-accent-green' :
                    course.level === 'Intermediate' ? 'bg-accent-blue/20 text-accent-blue' :
                    'bg-accent-purple/20 text-accent-purple'
                  }`}>
                    {course.level}
                  </span>
                </div>
                <p className="text-text-medium text-sm mb-2">{course.provider}</p>
                <p className="text-text-medium text-xs mb-3 line-clamp-2">{course.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {course.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded bg-accent-blue/10 text-accent-blue font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-text-light mb-3">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    {course.students.toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-accent-blue/20">
                <div className="flex items-center gap-1">
                  <Star className="text-accent-orange" size={16} />
                  <span className="font-semibold">{course.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-accent-orange">{course.price}</span>
                  <ExternalLink className="text-accent-blue" size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
