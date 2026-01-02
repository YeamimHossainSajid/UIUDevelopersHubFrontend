import Real3DText from '@/components/Real3DText'
import { Github, Linkedin, Mail, Trophy, Star, Award, Crown, Sparkles } from 'lucide-react'
import { useSound } from '@/contexts/SoundContext'

// Helper function to get photo path
const getPhotoPath = (name: string) => {
  const photoName = name.toLowerCase().replace(/\s+/g, '')
  return `/photos/${photoName}.jpg`
}

// Mock community managers - 10 managers with local photos
const communityManagers = [
  {
    id: '1',
    name: 'Sonet',
    role: 'Community Manager',
    email: 'sonet@uiu.edu.bd',
    github: 'sonet',
    linkedin: 'sonet-dev',
    bio: 'Passionate about building amazing developer communities.',
    image: getPhotoPath('Sonet'),
    contributionPoints: 4850,
    badge: 'Crown',
  },
  {
    id: '2',
    name: 'Fatin',
    role: 'Community Manager',
    email: 'fatin@uiu.edu.bd',
    github: 'fatin',
    linkedin: 'fatin-dev',
    bio: 'Connecting developers and creating opportunities.',
    image: getPhotoPath('Fatin'),
    contributionPoints: 4620,
    badge: 'Star',
  },
  {
    id: '3',
    name: 'Sajid',
    role: 'Community Manager',
    email: 'sajid@uiu.edu.bd',
    github: 'sajid',
    linkedin: 'sajid-dev',
    bio: 'Empowering developers through mentorship.',
    image: getPhotoPath('Sajid'),
    contributionPoints: 4380,
    badge: 'Award',
  },
  {
    id: '4',
    name: 'Mahmud',
    role: 'Community Manager',
    email: 'mahmud@uiu.edu.bd',
    github: 'mahmud',
    linkedin: 'mahmud-dev',
    bio: 'Fostering innovation and collaboration.',
    image: getPhotoPath('Mahmud'),
    contributionPoints: 4150,
    badge: 'Star',
  },
  {
    id: '5',
    name: 'Sifat',
    role: 'Community Manager',
    email: 'sifat@uiu.edu.bd',
    github: 'sifat',
    linkedin: 'sifat-dev',
    bio: 'Building strong developer networks.',
    image: getPhotoPath('Sifat'),
    contributionPoints: 3920,
    badge: 'Award',
  },
  {
    id: '6',
    name: 'Naeem',
    role: 'Community Manager',
    email: 'naeem@uiu.edu.bd',
    github: 'naeem',
    linkedin: 'naeem-dev',
    bio: 'Creating inclusive tech communities.',
    image: getPhotoPath('Naeem'),
    contributionPoints: 3680,
    badge: 'Star',
  },
  {
    id: '7',
    name: 'Mahdy',
    role: 'Community Manager',
    email: 'mahdy@uiu.edu.bd',
    github: 'mahdy',
    linkedin: 'mahdy-dev',
    bio: 'Promoting knowledge sharing and growth.',
    image: getPhotoPath('Mahdy'),
    contributionPoints: 3450,
    badge: 'Award',
  },
  {
    id: '8',
    name: 'Mongchaw',
    role: 'Community Manager',
    email: 'mongchaw@uiu.edu.bd',
    github: 'mongchaw',
    linkedin: 'mongchaw-dev',
    bio: 'Empowering next-gen developers.',
    image: getPhotoPath('Mongchaw'),
    contributionPoints: 3220,
    badge: 'Star',
  },
  {
    id: '9',
    name: 'Sabbir',
    role: 'Community Manager',
    email: 'sabbir@uiu.edu.bd',
    github: 'sabbir',
    linkedin: 'sabbir-dev',
    bio: 'Driving community engagement.',
    image: getPhotoPath('Sabbir'),
    contributionPoints: 2980,
    badge: 'Award',
  },
  {
    id: '10',
    name: 'Toufiq',
    role: 'Community Manager',
    email: 'toufiq@uiu.edu.bd',
    github: 'toufiq',
    linkedin: 'toufiq-dev',
    bio: 'Building bridges in tech community.',
    image: getPhotoPath('Toufiq'),
    contributionPoints: 2750,
    badge: 'Star',
  },
  {
    id: '11',
    name: 'Dummy',
    role: 'Community Manager',
    email: 'dummy@uiu.edu.bd',
    github: 'dummy',
    linkedin: 'dummy-dev',
    bio: 'Contributing to community growth.',
    image: getPhotoPath('Dummy'),
    contributionPoints: 2520,
    badge: 'Award',
  },
  {
    id: '12',
    name: 'Dummy',
    role: 'Community Manager',
    email: 'dummy2@uiu.edu.bd',
    github: 'dummy2',
    linkedin: 'dummy2-dev',
    bio: 'Supporting developer initiatives.',
    image: getPhotoPath('Dummy'),
    contributionPoints: 2300,
    badge: 'Star',
  },
]

// Mock top 20 members based on points - with demo photos
const topMembers = [
  { id: '1', name: 'Sara Ahmed', points: 3850, role: 'Full Stack Developer', github: 'sara-ahmed', image: 'https://i.pravatar.cc/150?img=20' },
  { id: '2', name: 'Rifat Hossain', points: 3600, role: 'React Specialist', github: 'rifat-hossain', image: 'https://i.pravatar.cc/150?img=51' },
  { id: '3', name: 'Tasnim Islam', points: 3400, role: 'UI/UX Designer', github: 'tasnim-islam', image: 'https://i.pravatar.cc/150?img=9' },
  { id: '4', name: 'Arif Mahmud', points: 3200, role: 'Backend Developer', github: 'arif-mahmud', image: 'https://i.pravatar.cc/150?img=68' },
  { id: '5', name: 'Nadia Chowdhury', points: 3100, role: 'DevOps Engineer', github: 'nadia-chowdhury', image: 'https://i.pravatar.cc/150?img=32' },
  { id: '6', name: 'Karim Uddin', points: 2950, role: 'Mobile Developer', github: 'karim-uddin', image: 'https://i.pravatar.cc/150?img=15' },
  { id: '7', name: 'Lubna Akter', points: 2800, role: 'Data Scientist', github: 'lubna-akter', image: 'https://i.pravatar.cc/150?img=45' },
  { id: '8', name: 'Shakib Hasan', points: 2700, role: 'Python Developer', github: 'shakib-hasan', image: 'https://i.pravatar.cc/150?img=13' },
  { id: '9', name: 'Mehreen Khan', points: 2600, role: 'Frontend Developer', github: 'mehreen-khan', image: 'https://i.pravatar.cc/150?img=27' },
  { id: '10', name: 'Rakib Islam', points: 2500, role: 'Node.js Developer', github: 'rakib-islam', image: 'https://i.pravatar.cc/150?img=16' },
  { id: '11', name: 'Sumaiya Rahman', points: 2400, role: 'Vue.js Specialist', github: 'sumaiya-rahman', image: 'https://i.pravatar.cc/150?img=24' },
  { id: '12', name: 'Fahim Ahmed', points: 2300, role: 'Angular Developer', github: 'fahim-ahmed', image: 'https://i.pravatar.cc/150?img=35' },
  { id: '13', name: 'Tahmina Begum', points: 2200, role: 'GraphQL Developer', github: 'tahmina-begum', image: 'https://i.pravatar.cc/150?img=38' },
  { id: '14', name: 'Nayeem Hasan', points: 2100, role: 'TypeScript Expert', github: 'nayeem-hasan', image: 'https://i.pravatar.cc/150?img=41' },
  { id: '15', name: 'Jannatul Ferdous', points: 2000, role: 'Cloud Architect', github: 'jannatul-ferdous', image: 'https://i.pravatar.cc/150?img=44' },
  { id: '16', name: 'Siam Rahman', points: 1950, role: 'Security Specialist', github: 'siam-rahman', image: 'https://i.pravatar.cc/150?img=50' },
  { id: '17', name: 'Nusrat Jahan', points: 1900, role: 'Machine Learning Engineer', github: 'nusrat-jahan', image: 'https://i.pravatar.cc/150?img=53' },
  { id: '18', name: 'Rifat Ali', points: 1850, role: 'Blockchain Developer', github: 'rifat-ali', image: 'https://i.pravatar.cc/150?img=56' },
  { id: '19', name: 'Tasnia Islam', points: 1800, role: 'Game Developer', github: 'tasnia-islam', image: 'https://i.pravatar.cc/150?img=59' },
  { id: '20', name: 'Arman Hossain', points: 1750, role: 'System Architect', github: 'arman-hossain', image: 'https://i.pravatar.cc/150?img=62' },
]

const getRankBadge = (rank: number) => {
  if (rank === 1) return { icon: Trophy, color: 'from-yellow-400 to-yellow-600', text: '🥇' }
  if (rank === 2) return { icon: Award, color: 'from-gray-300 to-gray-500', text: '🥈' }
  if (rank === 3) return { icon: Award, color: 'from-orange-300 to-orange-500', text: '🥉' }
  return { icon: Star, color: 'from-blue-300 to-blue-500', text: rank.toString() }
}

export default function Community() {
  const { playKeyClick } = useSound()

  return (
    <div className="pt-16">
      <section className="section-container">
        <div className="section-header">
          <Real3DText className="section-title">Our Community</Real3DText>
          <p className="section-subtitle">
            Meet the amazing people who make UIU Developers Hub possible
          </p>
        </div>

        {/* Community Managers Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-4xl font-bold text-glow-orange">Community Managers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {communityManagers.map((manager) => {
              return (
                <div
                  key={manager.id}
                  className="card text-center hover:scale-105 transition-all duration-300 bg-gradient-to-br from-accent-orange/10 via-accent-purple/10 to-accent-blue/10 border-2 border-accent-orange/30 shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent-orange/10 rounded-full blur-xl group-hover:bg-accent-orange/20 transition-all"></div>
                  <div className="relative z-10">
                    {/* Profile Image */}
                    <div className="mb-4">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-accent-orange to-accent-purple p-1 shadow-lg">
                        <div className="w-full h-full rounded-full bg-primary-light flex items-center justify-center overflow-hidden">
                          <img
                            src={manager.image}
                            alt={manager.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                              e.currentTarget.parentElement!.innerHTML =
                                `<div class="w-full h-full flex items-center justify-center text-3xl font-bold bg-gradient-to-br from-accent-orange to-accent-purple text-white">${manager.name.charAt(0)}</div>`
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Name and Role */}
                    <h3 className="text-base font-bold mb-1 text-text-dark leading-tight">{manager.name}</h3>
                    <p className="text-xs text-accent-orange font-semibold mb-2 leading-tight">{manager.role}</p>
                    
                    {/* Contribution Points */}
                    <div className="flex items-center justify-center gap-1 mb-3">
                      <Sparkles className="text-accent-orange" size={14} />
                      <span className="text-sm font-bold text-glow-orange">{manager.contributionPoints.toLocaleString()} pts</span>
                    </div>

                    {/* Bio */}
                    <p className="text-text-medium text-xs mb-3 leading-relaxed line-clamp-2">{manager.bio}</p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-2">
                      <a
                        href={`https://github.com/${manager.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playKeyClick}
                        className="p-1.5 rounded-full bg-accent-blue/20 hover:bg-accent-blue/40 text-accent-blue transition-all hover:scale-110"
                        title="GitHub"
                      >
                        <Github size={14} />
                      </a>
                      <a
                        href={`https://linkedin.com/in/${manager.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playKeyClick}
                        className="p-1.5 rounded-full bg-accent-blue/20 hover:bg-accent-blue/40 text-accent-blue transition-all hover:scale-110"
                        title="LinkedIn"
                      >
                        <Linkedin size={14} />
                      </a>
                      <a
                        href={`mailto:${manager.email}`}
                        onClick={playKeyClick}
                        className="p-1.5 rounded-full bg-accent-orange/20 hover:bg-accent-orange/40 text-accent-orange transition-all hover:scale-110"
                        title="Email"
                      >
                        <Mail size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Top Members Leaderboard */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Trophy className="text-accent-orange mr-3" size={32} />
            <h2 className="text-4xl font-bold text-glow-orange">Top 20 Members</h2>
            <Trophy className="text-accent-orange ml-3" size={32} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {topMembers.map((member, index) => {
              const rank = index + 1
              const badge = getRankBadge(rank)
              const BadgeIcon = badge.icon
              
              return (
                <div
                  key={member.id}
                  className={`card hover:scale-105 transition-all duration-300 relative overflow-hidden group ${
                    rank <= 3
                      ? 'bg-gradient-to-br from-accent-orange/20 via-accent-purple/20 to-accent-blue/20 border-2 border-accent-orange/40 shadow-xl'
                      : 'bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 border-2 border-accent-blue/30 shadow-lg'
                  }`}
                >
                  {/* Rank Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-lg`}>
                      {rank <= 3 ? (
                        <span className="text-2xl">{badge.text}</span>
                      ) : (
                        <span className="text-white font-bold text-sm">#{rank}</span>
                      )}
                    </div>
                  </div>

                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent-orange/10 rounded-full blur-xl group-hover:bg-accent-orange/20 transition-all"></div>

                  <div className="relative z-10">
                    {/* Profile Image */}
                    <div className="mb-4 flex justify-center">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${
                        rank === 1 ? 'from-yellow-400 to-yellow-600' :
                        rank === 2 ? 'from-gray-300 to-gray-500' :
                        rank === 3 ? 'from-orange-300 to-orange-500' :
                        'from-accent-blue to-accent-purple'
                      } p-1 shadow-lg`}>
                        <div className="w-full h-full rounded-full bg-primary-light flex items-center justify-center overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                              e.currentTarget.parentElement!.innerHTML =
                                `<div class="w-full h-full flex items-center justify-center text-3xl font-bold bg-gradient-to-br from-accent-blue to-accent-purple text-white">${member.name.charAt(0)}</div>`
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Name and Role */}
                    <h3 className="text-lg font-bold mb-1 text-text-dark text-center">{member.name}</h3>
                    <p className="text-sm text-text-medium text-center mb-3">{member.role}</p>
                    
                    {/* Points */}
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Star className="text-accent-orange" size={16} />
                      <span className="font-bold text-glow-orange">{member.points.toLocaleString()} pts</span>
                    </div>

                    {/* GitHub Link */}
                    <a
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playKeyClick}
                      className="flex items-center justify-center gap-2 text-sm text-accent-blue hover:text-accent-orange transition-colors"
                    >
                      <Github size={16} />
                      <span>View Profile</span>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="card text-center hover:scale-105 transition-transform">
            <div className="text-5xl font-bold text-glow-orange mb-2">100+</div>
            <div className="text-text-medium font-medium">Active Members</div>
          </div>
          <div className="card text-center hover:scale-105 transition-transform">
            <div className="text-5xl font-bold text-glow-orange mb-2">50+</div>
            <div className="text-text-medium font-medium">Projects</div>
          </div>
          <div className="card text-center hover:scale-105 transition-transform">
            <div className="text-5xl font-bold text-glow-orange mb-2">20+</div>
            <div className="text-text-medium font-medium">Events Hosted</div>
          </div>
          <div className="card text-center hover:scale-105 transition-transform">
            <div className="text-5xl font-bold text-glow-orange mb-2">3</div>
            <div className="text-text-medium font-medium">Community Managers</div>
          </div>
        </div>
      </section>
    </div>
  )
}
