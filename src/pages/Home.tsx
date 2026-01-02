import { Link } from 'react-router-dom'
import { useSound } from '@/contexts/SoundContext'
import Real3DText from '@/components/Real3DText'
import { ArrowRight, Users, Video, CheckSquare, Shield } from 'lucide-react'

export default function Home() {
  const { playKeyClick, playFeatureSound } = useSound()

  const features = [
    {
      icon: Users,
      title: 'Social Platform',
      description: 'Connect with developers, share ideas, and build together.',
      color: '#569cd6',
    },
    {
      icon: Video,
      title: 'Video Meetings',
      description: 'Schedule and join video conferences with your team.',
      color: '#ff6b35',
    },
    {
      icon: CheckSquare,
      title: 'Task Management',
      description: 'Organize projects with Kanban boards and task tracking.',
      color: '#f7931e',
    },
    {
      icon: Shield,
      title: 'Role Management',
      description: 'Flexible role system for team organization.',
      color: '#ff4500',
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-navy to-primary-blue"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <Real3DText className="text-5xl md:text-7xl lg:text-9xl font-bold text-white">
              UIU DEVELOPERS HUB
            </Real3DText>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Empowering Developers, Building Communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth/signup"
              onClick={playKeyClick}
              className="btn-primary inline-flex items-center justify-center space-x-2"
            >
              <span>Join Us</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/about"
              onClick={playKeyClick}
              className="btn-secondary inline-flex items-center justify-center space-x-2"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent-blue rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-container">
        <div className="section-header">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            A community-driven platform for developers at UIU to collaborate, learn, and grow together.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <h3 className="text-2xl font-bold mb-2 text-glow-orange">Mission</h3>
            <p className="text-gray-300">
              To empower developers through collaboration, knowledge sharing, and community building.
            </p>
          </div>
          <div className="card text-center">
            <h3 className="text-2xl font-bold mb-2 text-glow-orange">Vision</h3>
            <p className="text-gray-300">
              To become the leading developer community platform at UIU and beyond.
            </p>
          </div>
          <div className="card text-center">
            <h3 className="text-2xl font-bold mb-2 text-glow-orange">Values</h3>
            <p className="text-gray-300">
              Innovation, collaboration, inclusivity, and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container bg-primary-navy/30">
        <div className="section-header">
          <h2 className="section-title">Platform Features</h2>
          <p className="section-subtitle">
            Everything you need to collaborate and build amazing projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="card cursor-pointer"
                onMouseEnter={() => playFeatureSound(440 + index * 50)}
                onClick={playKeyClick}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                      border: `2px solid ${feature.color}`,
                    }}
                  >
                    <Icon size={32} style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-glow-orange mb-2">100+</div>
            <div className="text-gray-400">Active Members</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-glow-orange mb-2">50+</div>
            <div className="text-gray-400">Projects</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-glow-orange mb-2">20+</div>
            <div className="text-gray-400">Events</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-glow-orange mb-2">10+</div>
            <div className="text-gray-400">Partners</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-primary-navy/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-glow">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community and start collaborating with fellow developers today.
          </p>
          <Link
            to="/auth/signup"
            onClick={playKeyClick}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Sign Up Now</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

