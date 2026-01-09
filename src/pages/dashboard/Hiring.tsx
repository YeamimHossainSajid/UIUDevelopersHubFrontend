import { useState } from 'react'
import { useSound } from '@/contexts/SoundContext'
import {
  Briefcase,
  Search,
  Filter,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Users,
  FileText,
  MessageCircle,
  Send,
  Upload,
  X,
  CheckCircle,
  Star,
  Code,
  Building2,
} from 'lucide-react'

type JobType = 'Full-time' | 'Part-time' | 'Internship'
type JobStatus = 'Open' | 'Closed'

interface Job {
  id: string
  title: string
  company: string
  type: JobType
  location: string
  salary?: string
  description: string
  requirements: string[]
  skills: string[]
  postedDate: string
  status: JobStatus
  applicants: number
}

interface Developer {
  id: string
  name: string
  avatar?: string
  skills: string[]
  experience: string
  available: boolean
  rating: number
  projects: number
  contributionPoints: number
}

export default function Hiring() {
  const { playKeyClick } = useSound()
  const [activeTab, setActiveTab] = useState<'jobs' | 'browse' | 'applications'>('jobs')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<JobType | 'All'>('All')
  const [showResumeUpload, setShowResumeUpload] = useState(false)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  // Mock jobs data
  const [jobs] = useState<Job[]>([
    {
      id: '1',
      title: 'Full Stack Developer',
      company: 'TechCorp Inc.',
      type: 'Full-time',
      location: 'Dhaka, Bangladesh',
      salary: '৳80,000 - ৳120,000',
      description: 'We are looking for an experienced full-stack developer to join our team...',
      requirements: ['3+ years experience', 'React & Node.js', 'MongoDB', 'AWS'],
      skills: ['React', 'Node.js', 'MongoDB', 'AWS', 'TypeScript'],
      postedDate: '2024-03-01',
      status: 'Open',
      applicants: 12,
    },
    {
      id: '2',
      title: 'Frontend Developer Intern',
      company: 'StartupXYZ',
      type: 'Internship',
      location: 'Remote',
      salary: '৳15,000 - ৳25,000',
      description: 'Great opportunity for students to gain real-world experience...',
      requirements: ['React knowledge', 'CSS/HTML', 'Git basics'],
      skills: ['React', 'CSS', 'HTML', 'JavaScript'],
      postedDate: '2024-03-05',
      status: 'Open',
      applicants: 8,
    },
    {
      id: '3',
      title: 'Backend Developer',
      company: 'CloudTech Solutions',
      type: 'Part-time',
      location: 'Dhaka, Bangladesh',
      salary: '৳50,000 - ৳70,000',
      description: 'Part-time backend developer position for ongoing projects...',
      requirements: ['Node.js/Python', 'Database design', 'API development'],
      skills: ['Node.js', 'Python', 'PostgreSQL', 'REST API'],
      postedDate: '2024-02-28',
      status: 'Open',
      applicants: 5,
    },
  ])

  // Mock developers data
  const [developers] = useState<Developer[]>([
    {
      id: '1',
      name: 'Sajid Ahmed',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      experience: '2 years',
      available: true,
      rating: 4.8,
      projects: 12,
      contributionPoints: 4850,
    },
    {
      id: '2',
      name: 'Fatin Rahman',
      skills: ['Python', 'Django', 'PostgreSQL', 'AWS'],
      experience: '3 years',
      available: true,
      rating: 4.9,
      projects: 18,
      contributionPoints: 5200,
    },
    {
      id: '3',
      name: 'Mahmud Hasan',
      skills: ['React Native', 'Firebase', 'JavaScript'],
      experience: '1.5 years',
      available: false,
      rating: 4.6,
      projects: 8,
      contributionPoints: 3200,
    },
  ])

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesType = selectedType === 'All' || job.type === selectedType
    return matchesSearch && matchesType && job.status === 'Open'
  })

  const filteredDevelopers = developers.filter((dev) => {
    return dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dev.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  })

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-glow-orange flex items-center gap-2">
            <Briefcase size={32} />
            Hiring & Internships
          </h1>
          <p className="text-text-medium mt-1">Find opportunities or hire talented developers</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-accent-blue/20">
        {[
          { id: 'jobs', label: 'Job Listings', icon: Briefcase },
          { id: 'browse', label: 'Browse Developers', icon: Users },
          { id: 'applications', label: 'My Applications', icon: FileText },
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

      {/* Job Listings Tab */}
      {activeTab === 'jobs' && (
        <div className="space-y-6">
          {/* Search and Filter */}
          <div className="card">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light" size={20} />
                <input
                  type="text"
                  placeholder="Search jobs by title, company, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-accent-blue/20 focus:outline-none focus:border-accent-orange"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedType}
                  onChange={(e) => {
                    setSelectedType(e.target.value as any)
                    playKeyClick()
                  }}
                  className="px-4 py-2 rounded-lg border border-accent-blue/20 focus:outline-none focus:border-accent-orange"
                >
                  <option value="All">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
            </div>
          </div>

          {/* Job Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="card hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedJob(job)
                  playKeyClick()
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-glow-orange mb-1">{job.title}</h3>
                    <p className="text-text-medium flex items-center gap-1">
                      <Building2 size={16} />
                      {job.company}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    job.type === 'Full-time' ? 'bg-accent-blue/20 text-accent-blue' :
                    job.type === 'Part-time' ? 'bg-accent-purple/20 text-accent-purple' :
                    'bg-accent-green/20 text-accent-green'
                  }`}>
                    {job.type}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-text-medium">
                    <MapPin size={16} />
                    {job.location}
                  </div>
                  {job.salary && (
                    <div className="flex items-center gap-2 text-sm text-text-medium">
                      <DollarSign size={16} />
                      {job.salary}
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-text-medium">
                    <Clock size={16} />
                    Posted {new Date(job.postedDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-medium">
                    <Users size={16} />
                    {job.applicants} applicants
                  </div>
                </div>
                <p className="text-text-medium text-sm mb-3 line-clamp-2">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.slice(0, 4).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded bg-accent-blue/10 text-accent-blue font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {job.skills.length > 4 && (
                    <span className="px-2 py-1 text-xs rounded bg-accent-purple/10 text-accent-purple font-medium">
                      +{job.skills.length - 4} more
                    </span>
                  )}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowResumeUpload(true)
                    setSelectedJob(job)
                    playKeyClick()
                  }}
                  className="w-full btn-primary"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Browse Developers Tab */}
      {activeTab === 'browse' && (
        <div className="space-y-6">
          {/* Search */}
          <div className="card">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light" size={20} />
              <input
                type="text"
                placeholder="Search developers by name or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-accent-blue/20 focus:outline-none focus:border-accent-orange"
              />
            </div>
          </div>

          {/* Developer Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDevelopers.map((dev) => (
              <div key={dev.id} className="card hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-orange to-accent-purple p-1">
                    <div className="w-full h-full rounded-full bg-primary-light flex items-center justify-center">
                      <Users className="text-accent-orange" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-lg text-text-dark">{dev.name}</h3>
                      {dev.available && (
                        <span className="px-2 py-1 text-xs rounded-full bg-accent-green/20 text-accent-green font-semibold">
                          Available
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="text-accent-orange" size={16} />
                      <span className="text-sm font-semibold">{dev.rating}</span>
                      <span className="text-sm text-text-light">({dev.projects} projects)</span>
                    </div>
                    <p className="text-sm text-text-medium">{dev.experience} experience</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-xs text-text-light mb-2">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {dev.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded bg-accent-blue/10 text-accent-blue font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm">
                    <p className="text-text-light">Contribution Points</p>
                    <p className="font-bold text-accent-orange">{dev.contributionPoints.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      playKeyClick()
                      // Navigate to developer profile
                    }}
                    className="flex-1 btn-secondary text-sm"
                  >
                    View Profile
                  </button>
                  <button
                    onClick={() => {
                      playKeyClick()
                      // Open messaging
                    }}
                    className="flex-1 btn-primary text-sm flex items-center justify-center gap-1"
                  >
                    <MessageCircle size={16} />
                    Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* My Applications Tab */}
      {activeTab === 'applications' && (
        <div className="card">
          <div className="text-center py-12">
            <FileText className="text-accent-blue mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold text-text-dark mb-2">No Applications Yet</h3>
            <p className="text-text-medium mb-6">Start applying to jobs to see your applications here</p>
            <button
              onClick={() => {
                setActiveTab('jobs')
                playKeyClick()
              }}
              className="btn-primary"
            >
              Browse Jobs
            </button>
          </div>
        </div>
      )}

      {/* Resume Upload Modal */}
      {showResumeUpload && selectedJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl">
            <div className="p-6 border-b border-accent-blue/20">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-glow-orange">Apply for {selectedJob.title}</h2>
                <button
                  onClick={() => {
                    setShowResumeUpload(false)
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
                  Upload Resume (PDF, DOC, DOCX)
                </label>
                <div className="border-2 border-dashed border-accent-blue/30 rounded-lg p-8 text-center hover:border-accent-orange/50 transition-colors cursor-pointer">
                  <Upload className="text-accent-blue mx-auto mb-2" size={32} />
                  <p className="text-text-medium mb-1">Click to upload or drag and drop</p>
                  <p className="text-sm text-text-light">Max file size: 5MB</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-dark mb-2">
                  Cover Letter (Optional)
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us why you're a great fit for this position..."
                  className="w-full px-4 py-2 rounded-lg border border-accent-blue/20 focus:outline-none focus:border-accent-orange"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => {
                    setShowResumeUpload(false)
                    playKeyClick()
                  }}
                  className="flex-1 btn-secondary"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowResumeUpload(false)
                    playKeyClick()
                    // Handle application submission
                  }}
                  className="flex-1 btn-primary flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
