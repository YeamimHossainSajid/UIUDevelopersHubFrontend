import Real3DText from '@/components/Real3DText'
import { Github, Linkedin, Mail } from 'lucide-react'

// Mock team members - replace with actual data
const teamMembers = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Lead Developer',
    image: '/images/member1.jpg',
    bio: 'Passionate about building amazing products',
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Community Manager',
    image: '/images/member2.jpg',
    bio: 'Connecting developers and fostering collaboration',
  },
]

export default function Community() {
  return (
    <div className="pt-16">
      <section className="section-container">
        <div className="section-header">
          <Real3DText className="section-title">Our Community</Real3DText>
          <p className="section-subtitle">
            Meet the amazing people who make UIU Developers Hub possible
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="card text-center">
              <div className="w-32 h-32 rounded-full bg-primary-navy mx-auto mb-4 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement!.innerHTML =
                      '<div class="w-full h-full flex items-center justify-center text-4xl font-bold text-accent-orange">' +
                      member.name.charAt(0) +
                      '</div>'
                  }}
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-accent-orange mb-3">{member.role}</p>
              <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-accent-blue transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-accent-blue transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-accent-blue transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="card text-center">
            <div className="text-4xl font-bold text-glow-orange mb-2">100+</div>
            <div className="text-gray-400">Active Members</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold text-glow-orange mb-2">50+</div>
            <div className="text-gray-400">Projects</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold text-glow-orange mb-2">20+</div>
            <div className="text-gray-400">Events Hosted</div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="card text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-glow-orange">Join Our Community</h2>
          <p className="text-gray-300 mb-6">
            Become part of a vibrant community of developers working together to build amazing things.
          </p>
          <a href="/auth/signup" className="btn-primary inline-block">
            Sign Up Now
          </a>
        </div>
      </section>
    </div>
  )
}

