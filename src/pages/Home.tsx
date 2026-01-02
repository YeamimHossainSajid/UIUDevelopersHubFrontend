import { Link } from 'react-router-dom'
import { useSound } from '@/contexts/SoundContext'
import Real3DText from '@/components/Real3DText'
import FloatingTech from '@/components/FloatingTech'
import { ArrowRight, Users, Video, CheckSquare, Shield, Sparkles, Rocket, Code, Terminal } from 'lucide-react'

export default function Home() {
  const { playKeyClick, playFeatureSound } = useSound()

  const features = [
    {
      icon: Users,
      title: 'Social Platform',
      description: 'Connect with developers, share ideas, and build amazing projects together.',
      color: '#7db3d3',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      icon: Video,
      title: 'Video Meetings',
      description: 'Schedule and join video conferences with your team seamlessly.',
      color: '#ff8c69',
      gradient: 'from-orange-400 to-orange-600',
    },
    {
      icon: CheckSquare,
      title: 'Task Management',
      description: 'Organize projects with intuitive Kanban boards and task tracking.',
      color: '#ffb347',
      gradient: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: Shield,
      title: 'Role Management',
      description: 'Flexible role system for efficient team organization.',
      color: '#b19cd9',
      gradient: 'from-purple-400 to-purple-600',
    },
  ]

  const stats = [
    { number: '100+', label: 'Active Members', icon: Users },
    { number: '50+', label: 'Projects', icon: Code },
    { number: '20+', label: 'Events', icon: Sparkles },
    { number: '10+', label: 'Partners', icon: Rocket },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-primary-soft to-primary-cream"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Floating Tech Items */}
        <FloatingTech />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6 inline-block">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Rocket className="text-accent-orange animate-bounce" size={32} />
              <span className="text-accent-orange font-bold text-lg">Welcome to</span>
            </div>
          </div>
          
          {/* Programming-themed Title */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2 justify-center">
              <Terminal className="text-accent-orange" size={24} />
              <span className="text-text-light font-mono text-sm">const</span>
              <span className="text-accent-blue font-mono text-sm">hub</span>
              <span className="text-text-light font-mono text-sm">=</span>
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono mb-2">
              <span className="text-accent-orange">"</span>
              <span className="bg-gradient-to-r from-accent-orange via-accent-orange-gold to-accent-blue bg-clip-text text-transparent">
                UIU DEVELOPERS
              </span>
              <span className="text-accent-orange">"</span>
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono">
              <span className="text-accent-orange">"</span>
              <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">
                HUB
              </span>
              <span className="text-accent-orange">"</span>
            </div>
            <div className="flex items-center gap-2 mt-2 justify-center">
              <span className="text-text-light font-mono text-sm">;</span>
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl text-text-medium mb-4 font-semibold">
            Empowering Developers, Building Communities
          </p>
          <p className="text-lg md:text-xl text-text-light mb-12 max-w-2xl mx-auto">
            Join a vibrant community of developers, collaborate on projects, and grow together in a fun and engaging environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/auth/signup"
              onClick={playKeyClick}
              className="btn-primary inline-flex items-center justify-center space-x-2 group"
            >
              <span>Join Us Now</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-accent-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent-blue rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container bg-white/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-accent-blue/20 hover:border-accent-orange/40 transition-all hover:scale-105"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-orange/20">
                    <Icon className="text-accent-orange" size={28} />
                  </div>
                </div>
                <div className="text-4xl font-bold text-glow-orange mb-2">{stat.number}</div>
                <div className="text-text-medium font-medium">{stat.label}</div>
              </div>
            )
          })}
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
          <div className="card text-center hover:scale-105 transition-transform">
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                <Rocket className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-glow-orange">Mission</h3>
            <p className="text-text-medium leading-relaxed">
              To empower developers through collaboration, knowledge sharing, and community building.
            </p>
          </div>
          <div className="card text-center hover:scale-105 transition-transform">
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent-orange to-accent-orange-gold flex items-center justify-center">
                <Sparkles className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-glow-orange">Vision</h3>
            <p className="text-text-medium leading-relaxed">
              To become the leading developer community platform at UIU and beyond.
            </p>
          </div>
          <div className="card text-center hover:scale-105 transition-transform">
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center">
                <Code className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-glow-orange">Values</h3>
            <p className="text-text-medium leading-relaxed">
              Innovation, collaboration, inclusivity, and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container bg-white/30">
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
                className="card cursor-pointer group"
                onMouseEnter={() => playFeatureSound(440 + index * 50)}
                onClick={playKeyClick}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <Icon className="text-white" size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-text-dark">{feature.title}</h3>
                  <p className="text-text-medium text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-br from-accent-blue/10 via-accent-orange/10 to-accent-purple/10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6">
            <Sparkles className="text-accent-orange mx-auto mb-4" size={48} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-orange">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-text-medium mb-8 leading-relaxed">
            Join our community and start collaborating with fellow developers today. 
            Build amazing projects, learn new skills, and grow together!
          </p>
          <Link
            to="/auth/signup"
            onClick={playKeyClick}
            className="btn-primary inline-flex items-center space-x-2 group"
          >
            <span>Sign Up Now</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
