import { Link } from 'react-router-dom'
import { useSound } from '@/contexts/SoundContext'
import Real3DText from '@/components/Real3DText'
import {
  Rocket,
  Sparkles,
  Code,
  Users,
  Calendar,
  Camera,
  Star,
  Github,
  ExternalLink,
  Trophy,
  Award,
  Target,
  Heart,
  TrendingUp,
  Zap,
} from 'lucide-react'

export default function About() {
  const { playKeyClick } = useSound()

  return (
    <div className="pt-16">
      {/* Hero Header */}
      <section className="section-container bg-gradient-to-br from-accent-blue/10 via-accent-orange/10 to-accent-purple/10">
        <div className="section-header">
          <Real3DText className="section-title">About UIU Developers Hub</Real3DText>
          <p className="section-subtitle text-lg">
            Building a vibrant community of developers at UIU
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values Grid */}
      <section className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="card text-center hover:scale-105 transition-transform bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 border-2 border-accent-blue/30">
            <div className="mb-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center shadow-lg">
                <Rocket className="text-white" size={40} />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-glow-orange">Mission</h3>
            <p className="text-text-dark leading-relaxed text-lg font-medium">
              To empower developers through collaboration, knowledge sharing, and community building. We create an environment where every developer can thrive, learn, and contribute to meaningful projects that make a real impact.
            </p>
          </div>
          <div className="card text-center hover:scale-105 transition-transform bg-gradient-to-br from-accent-orange/10 to-accent-orange-gold/10 border-2 border-accent-orange/30">
            <div className="mb-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-accent-orange to-accent-orange-gold flex items-center justify-center shadow-lg">
                <Sparkles className="text-white" size={40} />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-glow-orange">Vision</h3>
            <p className="text-text-dark leading-relaxed text-lg font-medium">
              To become the leading developer community platform at UIU and beyond. We envision a future where every developer has access to resources, opportunities, and a supportive network to achieve their full potential.
            </p>
          </div>
          <div className="card text-center hover:scale-105 transition-transform bg-gradient-to-br from-accent-purple/10 to-accent-pink/10 border-2 border-accent-purple/30">
            <div className="mb-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center shadow-lg">
                <Code className="text-white" size={40} />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-glow-orange">Values</h3>
            <p className="text-text-dark leading-relaxed text-lg font-medium">
              Innovation, collaboration, inclusivity, and continuous learning. We believe in creating a welcoming space where diversity is celebrated and everyone can contribute their unique perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-container bg-white/30">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 bg-gradient-to-br from-accent-blue/10 via-accent-purple/10 to-accent-pink/10 border-2 border-accent-blue/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-orange to-accent-blue flex items-center justify-center">
                <Heart className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold text-glow-orange">Our Story</h2>
            </div>
            <p className="text-lg text-text-dark leading-relaxed mb-4">
              UIU Developers Hub was founded with a vision to create a collaborative space where developers at UIU can come together to share knowledge, work on projects, and build meaningful connections. We believe in the power of community-driven development and strive to provide tools and resources that empower every member.
            </p>
            <p className="text-lg text-text-dark leading-relaxed">
              What started as a small initiative has grown into a thriving community of passionate developers, mentors, and innovators. We've organized numerous hackathons, workshops, and networking events that have brought together hundreds of students, alumni, and industry professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects & Success Stories */}
      <section className="section-container">
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
              description: 'A full-stack e-commerce solution built by 5 developers with payment integration and admin dashboard',
              tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
              stars: 234,
              contributors: 5,
              status: 'Live',
              impact: 'Used by 500+ users',
            },
            {
              title: 'AI Chatbot Assistant',
              description: 'Intelligent chatbot for student support using ML and natural language processing',
              tech: ['Python', 'TensorFlow', 'Flask', 'NLP'],
              stars: 189,
              contributors: 3,
              status: 'Active',
              impact: 'Handles 1000+ queries daily',
            },
            {
              title: 'Campus Navigation App',
              description: 'Mobile app for navigating UIU campus with AR features and real-time updates',
              tech: ['React Native', 'ARCore', 'Firebase', 'Maps API'],
              stars: 156,
              contributors: 4,
              status: 'Live',
              impact: '500+ downloads',
            },
            {
              title: 'Student Management System',
              description: 'Comprehensive system for managing student data, attendance, and academic records',
              tech: ['Vue.js', 'Laravel', 'MySQL', 'Charts.js'],
              stars: 98,
              contributors: 6,
              status: 'Active',
              impact: 'Adopted by 3 departments',
            },
            {
              title: 'Blockchain Voting System',
              description: 'Secure voting platform using blockchain technology with transparent results',
              tech: ['Solidity', 'Web3', 'React', 'Ethereum'],
              stars: 312,
              contributors: 4,
              status: 'Live',
              impact: 'Used in 2 elections',
            },
            {
              title: 'Health Monitoring Dashboard',
              description: 'Real-time health data visualization and analytics for medical professionals',
              tech: ['Next.js', 'D3.js', 'PostgreSQL', 'WebSockets'],
              stars: 145,
              contributors: 3,
              status: 'Active',
              impact: 'Monitors 200+ patients',
            },
          ].map((project, index) => (
            <div
              key={index}
              className="card hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden"
              onClick={playKeyClick}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-orange/10 to-accent-blue/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-glow-orange group-hover:text-accent-orange transition-colors flex-1">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent-green/20 text-accent-green font-semibold whitespace-nowrap ml-2">
                    {project.status}
                  </span>
                </div>
                <p className="text-text-medium text-sm mb-4 line-clamp-2">{project.description}</p>
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
                <div className="flex items-center justify-between text-sm text-text-light mb-3">
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
                    <Github size={16} className="hover:text-accent-orange transition-colors cursor-pointer" />
                    <ExternalLink size={16} className="hover:text-accent-orange transition-colors cursor-pointer" />
                  </div>
                </div>
                <div className="pt-3 border-t border-accent-blue/20">
                  <div className="flex items-center gap-2 text-xs text-text-medium">
                    <TrendingUp size={14} className="text-accent-green" />
                    <span className="font-semibold">{project.impact}</span>
                  </div>
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
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Events & Achievements Gallery */}
      <section className="section-container bg-white/30">
        <div className="section-header">
          <h2 className="section-title">Events & Achievements Gallery</h2>
          <p className="section-subtitle">
            Capturing moments from our community events and milestones
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Featured Event - Spans 2 columns on large screens */}
          <div
            className="md:col-span-2 lg:col-span-2 card p-0 overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer group relative"
            onClick={playKeyClick}
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-accent-orange/30 via-accent-blue/30 to-accent-purple/30 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
              <Camera className="text-accent-orange/30 group-hover:text-accent-orange/50 transition-colors z-0" size={64} />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="text-accent-orange" size={20} />
                  <span className="px-3 py-1 rounded-full bg-accent-orange/20 text-accent-orange text-xs font-semibold">
                    Featured Event
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">UIU HackDay 2024</h3>
                <p className="text-white/90 text-sm mb-2">Annual hackathon with 200+ participants showcasing innovation</p>
                <div className="flex items-center gap-4 text-white/80 text-xs">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    March 15, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    200+ Participants
                  </div>
                  <div className="flex items-center gap-1">
                    <Award size={14} />
                    15 Projects
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Event Cards */}
          {[
            { title: 'Tech Talk Series', date: 'Feb 28, 2024', type: 'Workshop', participants: 45, icon: Code },
            { title: 'Code Review Session', date: 'Feb 20, 2024', type: 'Learning', participants: 32, icon: Target },
            { title: 'Project Showcase', date: 'Feb 10, 2024', type: 'Exhibition', participants: 28, icon: Sparkles },
            { title: 'Mentorship Meetup', date: 'Jan 25, 2024', type: 'Networking', participants: 60, icon: Users },
            { title: 'Git Workshop', date: 'Jan 15, 2024', type: 'Workshop', participants: 38, icon: Code },
            { title: 'Alumni Panel', date: 'Jan 5, 2024', type: 'Panel', participants: 85, icon: Rocket },
            { title: 'Hackathon Prep', date: 'Dec 20, 2023', type: 'Workshop', participants: 42, icon: Zap },
            { title: 'Year End Celebration', date: 'Dec 15, 2023', type: 'Social', participants: 120, icon: Heart },
            { title: 'Open Source Day', date: 'Nov 30, 2023', type: 'Contribution', participants: 55, icon: Github },
            { title: 'Design Sprint', date: 'Nov 15, 2023', type: 'Workshop', participants: 35, icon: Code },
          ].map((event, index) => {
            const Icon = event.icon
            return (
              <div
                key={index}
                className="card p-0 overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group relative"
                onClick={playKeyClick}
              >
                <div className="aspect-square bg-gradient-to-br from-accent-orange/20 via-accent-blue/20 to-accent-purple/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                      {event.type}
                    </span>
                  </div>
                  <Icon className="text-accent-orange/40 group-hover:text-accent-orange/60 transition-colors z-0" size={40} />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{event.title}</h3>
                    <div className="flex items-center justify-between text-white/90 text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={12} />
                        {event.participants}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10"></div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-8">
          <p className="text-text-medium mb-4">
            More photos coming soon from our upcoming events!
          </p>
          <Link
            to="/events"
            onClick={playKeyClick}
            className="btn-primary inline-flex items-center space-x-2 group"
          >
            <span>View All Events</span>
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section-container">
        <div className="section-header">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            Comprehensive tools and resources for developers
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Users,
              title: 'Social Platform',
              description: 'Connect with fellow developers, share ideas, and engage in meaningful discussions.',
              color: 'from-accent-blue to-accent-purple',
            },
            {
              icon: Code,
              title: 'Video Meetings',
              description: 'Schedule and join video conferences for team collaboration and knowledge sharing.',
              color: 'from-accent-orange to-accent-orange-gold',
            },
            {
              icon: Target,
              title: 'Task Management',
              description: 'Organize projects with Kanban boards, track progress, and manage team workflows.',
              color: 'from-accent-purple to-accent-pink',
            },
            {
              icon: Rocket,
              title: 'Role Management',
              description: 'Flexible role system for organizing teams and managing permissions effectively.',
              color: 'from-accent-blue to-accent-green',
            },
          ].map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="card text-center hover:scale-105 transition-all duration-300 cursor-pointer group"
                onClick={playKeyClick}
              >
                <div className="mb-4">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={40} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-glow-orange">{feature.title}</h3>
                <p className="text-text-medium text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-container bg-gradient-to-br from-accent-blue/10 via-accent-orange/10 to-accent-purple/10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6">
            <Heart className="text-accent-orange mx-auto mb-4" size={48} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-orange">
            Join Our Community
          </h2>
          <p className="text-xl text-text-medium mb-8 leading-relaxed">
            Whether you're a beginner just starting your coding journey or an experienced developer looking to collaborate, UIU Developers Hub welcomes you. Join our community and be part of something amazing.
          </p>
          <Link
            to="/auth/signup"
            onClick={playKeyClick}
            className="btn-primary inline-flex items-center space-x-2 group"
          >
            <span>Get Started Today</span>
            <Rocket size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
