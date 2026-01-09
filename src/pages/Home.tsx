import { Link } from 'react-router-dom'
import { useSound } from '@/contexts/SoundContext'
import Real3DText from '@/components/Real3DText'
import FloatingTech from '@/components/FloatingTech'
import { ArrowRight, Users, Video, CheckSquare, Shield, Sparkles, Rocket, Code, Terminal, Briefcase, GraduationCap, Trophy, Award, Building2, Handshake, Camera, ExternalLink, Github, Globe, Star, TrendingUp, BookOpen, Target, Zap, Heart } from 'lucide-react'

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

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto -mt-32 md:-mt-40">
          <div className="mb-4 inline-block">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Rocket className="text-accent-orange animate-bounce" size={32} />
              <span className="text-accent-orange font-bold text-lg">Welcome to</span>
            </div>
          </div>
          
          {/* Programming-themed Title */}
          <div className="mb-6">
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
          
          <p className="text-xl md:text-2xl text-text-medium mb-3 font-semibold">
            Empowering Developers, Building Communities
          </p>
          <p className="text-base md:text-lg text-text-light mb-10 max-w-2xl mx-auto">
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

      {/* What is UIU DevHub Section */}
      <section className="section-container">
        <div className="section-header">
          <h2 className="section-title">What is UIU DevHub?</h2>
          <p className="section-subtitle">
            A comprehensive platform connecting developers, companies, and opportunities
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 bg-gradient-to-br from-accent-blue/10 via-accent-purple/10 to-accent-pink/10 border-2 border-accent-blue/30">
            <p className="text-lg text-text-dark leading-relaxed text-center">
              UIU DevHub is a vibrant ecosystem designed to bridge the gap between talented developers at UIU and real-world opportunities. 
              We provide a platform where developers can showcase their skills, collaborate on projects, find internships and jobs, 
              and build meaningful connections with companies and investors. Whether you're a student looking to grow, a company seeking 
              top talent, or an investor looking for innovative projects, DevHub is your gateway to success.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join DevHub - For Developers */}
      <section className="section-container bg-white/30">
        <div className="section-header">
          <h2 className="section-title">Why Join DevHub?</h2>
          <p className="section-subtitle">
            Unlock your potential and accelerate your developer journey
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Briefcase, title: 'Real-world Projects', desc: 'Work on actual projects that matter' },
            { icon: GraduationCap, title: 'Internship & Jobs', desc: 'Access exclusive opportunities' },
            { icon: Users, title: 'Team Collaboration', desc: 'Skill-based team matching' },
            { icon: Rocket, title: 'Mentorship', desc: 'Learn from seniors and alumni' },
            { icon: Trophy, title: 'Hackathons', desc: 'Compete and win prizes' },
            { icon: Award, title: 'Portfolio Building', desc: 'Showcase your work professionally' },
            { icon: Star, title: 'Certifications', desc: 'Earn badges and credentials' },
            { icon: Heart, title: 'Community', desc: 'Network with like-minded developers' },
          ].map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="card text-center hover:scale-105 transition-all duration-300 group cursor-pointer"
                onClick={playKeyClick}
              >
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent-orange/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-accent-orange" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-glow-orange">{benefit.title}</h3>
                <p className="text-text-medium text-sm">{benefit.desc}</p>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/auth/signup"
            onClick={playKeyClick}
            className="btn-primary inline-flex items-center space-x-2 group"
          >
            <span>Join as Developer</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Why Partner with DevHub - For Companies */}
      <section className="section-container">
        <div className="section-header">
          <h2 className="section-title">Why Partner with DevHub?</h2>
          <p className="section-subtitle">
            Connect with top talent and drive innovation
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { icon: Users, title: 'Hire UIU Developers', desc: 'Browse and search talented developers' },
            { icon: Briefcase, title: 'Paid Projects', desc: 'Post projects and get quality work' },
            { icon: GraduationCap, title: 'Offer Internships', desc: 'Find the perfect interns' },
            { icon: Trophy, title: 'Sponsor Hackathons', desc: 'Support innovation and talent' },
            { icon: Target, title: 'Research Collaboration', desc: 'Partner on cutting-edge research' },
          ].map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="card text-center hover:scale-105 transition-all duration-300 group cursor-pointer"
                onClick={playKeyClick}
              >
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-accent-blue" size={32} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-glow-orange">{feature.title}</h3>
                <p className="text-text-medium text-sm">{feature.desc}</p>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/contact"
            onClick={playKeyClick}
            className="btn-secondary inline-flex items-center space-x-2 group"
          >
            <Building2 size={20} />
            <span>Partner with Us</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Featured Projects & Success Stories */}
      <section className="section-container bg-white/30">
        <div className="section-header">
          <h2 className="section-title">Featured Projects & Success Stories</h2>
          <p className="section-subtitle">
            See what our community has built together
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'E-Commerce Platform',
              description: 'A full-stack e-commerce solution built by 5 developers',
              tech: ['React', 'Node.js', 'MongoDB'],
              stars: 234,
              contributors: 5,
              status: 'Live',
            },
            {
              title: 'AI Chatbot Assistant',
              description: 'Intelligent chatbot for student support using ML',
              tech: ['Python', 'TensorFlow', 'Flask'],
              stars: 189,
              contributors: 3,
              status: 'Active',
            },
            {
              title: 'Campus Navigation App',
              description: 'Mobile app for navigating UIU campus with AR features',
              tech: ['React Native', 'ARCore', 'Firebase'],
              stars: 156,
              contributors: 4,
              status: 'Live',
            },
            {
              title: 'Student Management System',
              description: 'Comprehensive system for managing student data',
              tech: ['Vue.js', 'Laravel', 'MySQL'],
              stars: 98,
              contributors: 6,
              status: 'Active',
            },
            {
              title: 'Blockchain Voting System',
              description: 'Secure voting platform using blockchain technology',
              tech: ['Solidity', 'Web3', 'React'],
              stars: 312,
              contributors: 4,
              status: 'Live',
            },
            {
              title: 'Health Monitoring Dashboard',
              description: 'Real-time health data visualization and analytics',
              tech: ['Next.js', 'D3.js', 'PostgreSQL'],
              stars: 145,
              contributors: 3,
              status: 'Active',
            },
          ].map((project, index) => (
            <div
              key={index}
              className="card hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={playKeyClick}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-glow-orange group-hover:text-accent-orange transition-colors">
                  {project.title}
                </h3>
                <span className="px-2 py-1 text-xs rounded-full bg-accent-green/20 text-accent-green font-semibold">
                  {project.status}
                </span>
              </div>
              <p className="text-text-medium text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded bg-accent-blue/10 text-accent-blue font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-text-light">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-accent-orange" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} className="text-accent-blue" />
                    <span>{project.contributors}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Github size={16} />
                  <ExternalLink size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/dashboard/tasks"
            onClick={playKeyClick}
            className="btn-primary inline-flex items-center space-x-2 group"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-container">
        <div className="section-header">
          <h2 className="section-title">Events & Achievements Gallery</h2>
          <p className="section-subtitle">
            Capturing moments from our community events and milestones
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="card p-0 overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={playKeyClick}
            >
              <div className="aspect-square bg-gradient-to-br from-accent-orange/20 via-accent-blue/20 to-accent-purple/20 flex items-center justify-center relative">
                <Camera className="text-accent-orange/50 group-hover:text-accent-orange transition-colors" size={32} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                    Event {index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-text-medium mb-4">
            More photos coming soon from our upcoming events!
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section-container bg-white/30">
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
