import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useSound } from '@/contexts/SoundContext'
import {
  User,
  Mail,
  Shield,
  Calendar,
  GraduationCap,
  Code,
  Award,
  Trophy,
  Github,
  ExternalLink,
  Briefcase,
  Star,
  Edit,
  Save,
  X,
  CheckCircle,
  BookOpen,
  Target,
  TrendingUp,
  ToggleLeft,
  ToggleRight,
} from 'lucide-react'

export default function Profile() {
  const { user } = useAuth()
  const { playKeyClick } = useSound()
  const [isEditing, setIsEditing] = useState(false)
  const [availableForHire, setAvailableForHire] = useState(true)

  // Mock portfolio data
  const [portfolioData, setPortfolioData] = useState({
    bio: 'Passionate full-stack developer with expertise in React, Node.js, and cloud technologies. Love building scalable applications and contributing to open source.',
    department: 'Computer Science & Engineering',
    batch: '2022',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'],
    techStack: ['Frontend: React, Next.js, TypeScript', 'Backend: Node.js, Express, MongoDB', 'DevOps: AWS, Docker, CI/CD'],
    experienceLevel: 'Intermediate',
    projects: [
      {
        id: '1',
        name: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with payment integration',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        githubLink: 'https://github.com/user/ecommerce',
        liveLink: 'https://ecommerce-demo.com',
        role: 'Full-stack Developer',
        isTeamProject: true,
      },
      {
        id: '2',
        name: 'Task Management App',
        description: 'Collaborative task management with real-time updates',
        tech: ['React', 'Firebase', 'Material-UI'],
        githubLink: 'https://github.com/user/taskapp',
        liveLink: 'https://taskapp-demo.com',
        role: 'Frontend Lead',
        isTeamProject: true,
      },
      {
        id: '3',
        name: 'Personal Portfolio',
        description: 'Modern portfolio website with animations',
        tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        githubLink: 'https://github.com/user/portfolio',
        liveLink: 'https://portfolio-demo.com',
        role: 'Solo Project',
        isTeamProject: false,
      },
    ],
    achievements: [
      { type: 'badge', title: 'Top Contributor', description: 'Top 10 contributors this month', icon: Trophy },
      { type: 'points', title: 'Contribution Points', value: '4,850', icon: Star },
      { type: 'hackathon', title: 'Hackathon Winner', description: 'UIU HackDay 2024 - 1st Place', icon: Award },
    ],
    certifications: [
      { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', date: '2024-01-15' },
      { name: 'React Advanced Patterns', issuer: 'Frontend Masters', date: '2023-11-20' },
    ],
    completedProjects: [
      { name: 'E-Commerce Platform', completionDate: '2024-02-01' },
      { name: 'Task Management App', completionDate: '2024-01-15' },
    ],
  })

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-glow-orange">Developer Portfolio</h1>
        <button
          onClick={() => {
            setIsEditing(!isEditing)
            playKeyClick()
          }}
          className="btn-secondary inline-flex items-center space-x-2"
        >
          {isEditing ? (
            <>
              <Save size={18} />
              <span>Save Changes</span>
            </>
          ) : (
            <>
              <Edit size={18} />
              <span>Edit Profile</span>
            </>
          )}
        </button>
      </div>

      {/* Profile Header */}
      <div className="card">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-orange to-accent-purple p-1 shadow-lg">
              <div className="w-full h-full rounded-full bg-primary-light flex items-center justify-center overflow-hidden">
                <User size={64} className="text-accent-orange" />
              </div>
            </div>
            {isEditing && (
              <button
                onClick={playKeyClick}
                className="absolute bottom-0 right-0 p-2 rounded-full bg-accent-blue text-white shadow-lg hover:scale-110 transition-transform"
              >
                <Edit size={16} />
              </button>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold text-glow-orange">{user?.name || 'Developer Name'}</h2>
              {availableForHire && (
                <span className="px-3 py-1 text-sm rounded-full bg-accent-green/20 text-accent-green font-semibold flex items-center gap-1">
                  <Briefcase size={14} />
                  Available for Hire
                </span>
              )}
            </div>
            <p className="text-text-medium mb-4">{portfolioData.bio}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="text-accent-blue" size={16} />
                <span className="text-text-medium">{user?.email || 'email@uiu.edu.bd'}</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="text-accent-orange" size={16} />
                <span className="text-text-medium">{portfolioData.department} - Batch {portfolioData.batch}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-accent-purple" size={16} />
                <span className="text-text-medium">{portfolioData.experienceLevel} Level</span>
              </div>
            </div>
          </div>
        </div>

        {/* Available for Hire Toggle */}
        <div className="mt-6 pt-6 border-t border-accent-blue/20">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-text-dark mb-1">Available for Hire</h3>
              <p className="text-sm text-text-medium">Make your profile visible to companies and recruiters</p>
            </div>
            <button
              onClick={() => {
                setAvailableForHire(!availableForHire)
                playKeyClick()
              }}
              className="text-accent-orange hover:scale-110 transition-transform"
            >
              {availableForHire ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Skills */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-glow-orange flex items-center gap-2">
                <Code size={24} />
                Skills & Tech Stack
              </h3>
              {isEditing && (
                <button onClick={playKeyClick} className="text-accent-blue hover:text-accent-orange">
                  <Edit size={18} />
                </button>
              )}
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-text-dark mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue font-medium text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-text-dark mb-2">Tech Stack</h4>
              <ul className="space-y-1 text-text-medium">
                {portfolioData.techStack.map((tech, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent-green" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-glow-orange flex items-center gap-2">
                <Briefcase size={24} />
                Projects
              </h3>
              {isEditing && (
                <button onClick={playKeyClick} className="text-accent-blue hover:text-accent-orange">
                  <Edit size={18} />
                </button>
              )}
            </div>
            <div className="space-y-4">
              {portfolioData.projects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 rounded-lg bg-white/50 border border-accent-blue/20 hover:border-accent-orange/40 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-lg text-text-dark">{project.name}</h4>
                      {project.isTeamProject && (
                        <span className="text-xs text-text-light">Team Project - {project.role}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playKeyClick}
                        className="text-accent-blue hover:text-accent-orange transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playKeyClick}
                        className="text-accent-blue hover:text-accent-orange transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <p className="text-text-medium text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded bg-accent-purple/10 text-accent-purple font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Achievements & Info */}
        <div className="space-y-6">
          {/* Achievements */}
          <div className="card">
            <h3 className="text-xl font-bold text-glow-orange flex items-center gap-2 mb-4">
              <Trophy size={24} />
              Achievements
            </h3>
            <div className="space-y-3">
              {portfolioData.achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-gradient-to-br from-accent-orange/10 to-accent-blue/10 border border-accent-orange/20"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="text-accent-orange" size={20} />
                      <h4 className="font-semibold text-text-dark">{achievement.title}</h4>
                    </div>
                    {achievement.value && (
                      <p className="text-2xl font-bold text-accent-orange">{achievement.value}</p>
                    )}
                    {achievement.description && (
                      <p className="text-sm text-text-medium">{achievement.description}</p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Certifications */}
          <div className="card">
            <h3 className="text-xl font-bold text-glow-orange flex items-center gap-2 mb-4">
              <Award size={24} />
              Certifications
            </h3>
            <div className="space-y-3">
              {portfolioData.certifications.map((cert, index) => (
                <div key={index} className="p-3 rounded-lg bg-white/50 border border-accent-blue/20">
                  <h4 className="font-semibold text-text-dark mb-1">{cert.name}</h4>
                  <p className="text-sm text-text-medium">{cert.issuer}</p>
                  <p className="text-xs text-text-light mt-1">
                    {new Date(cert.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Completed DevHub Projects */}
          <div className="card">
            <h3 className="text-xl font-bold text-glow-orange flex items-center gap-2 mb-4">
              <CheckCircle size={24} />
              Completed DevHub Projects
            </h3>
            <div className="space-y-2">
              {portfolioData.completedProjects.map((project, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded bg-white/50">
                  <span className="text-text-dark font-medium text-sm">{project.name}</span>
                  <span className="text-xs text-text-light">
                    {new Date(project.completionDate).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Info */}
          <div className="card">
            <h3 className="text-xl font-bold text-glow-orange flex items-center gap-2 mb-4">
              <User size={24} />
              Profile Information
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-text-light mb-1">Role</p>
                <p className="font-medium text-text-dark capitalize">{user?.role || 'member'}</p>
              </div>
              {user?.createdAt && (
                <div>
                  <p className="text-sm text-text-light mb-1">Member Since</p>
                  <p className="font-medium text-text-dark">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
