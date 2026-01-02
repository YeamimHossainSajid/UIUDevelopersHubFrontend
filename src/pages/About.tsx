import Real3DText from '@/components/Real3DText'

export default function About() {
  return (
    <div className="pt-16">
      <section className="section-container">
        <div className="section-header">
          <Real3DText className="section-title">About UIU Developers Hub</Real3DText>
          <p className="section-subtitle">
            Building a vibrant community of developers at UIU
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="card">
            <h2 className="text-3xl font-bold mb-4 text-glow-orange">Our Story</h2>
            <p className="text-text-medium leading-relaxed">
              UIU Developers Hub was founded with a vision to create a collaborative space
              where developers at UIU can come together to share knowledge, work on projects,
              and build meaningful connections. We believe in the power of community-driven
              development and strive to provide tools and resources that empower every member.
            </p>
          </div>

          <div className="card">
            <h2 className="text-3xl font-bold mb-4 text-glow-orange">Mission</h2>
            <p className="text-text-medium leading-relaxed">
              Our mission is to foster a culture of innovation, collaboration, and continuous
              learning within the UIU developer community. We aim to provide a platform that
              enables developers to connect, collaborate, and create amazing projects together.
            </p>
          </div>

          <div className="card">
            <h2 className="text-3xl font-bold mb-4 text-glow-orange">What We Offer</h2>
            <ul className="space-y-4 text-text-medium">
              <li className="flex items-start">
                <span className="text-accent-orange mr-3">•</span>
                <span>
                  <strong>Social Platform:</strong> Connect with fellow developers, share ideas,
                  and engage in meaningful discussions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-orange mr-3">•</span>
                <span>
                  <strong>Video Meetings:</strong> Schedule and join video conferences for
                  team collaboration and knowledge sharing.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-orange mr-3">•</span>
                <span>
                  <strong>Task Management:</strong> Organize projects with Kanban boards,
                  track progress, and manage team workflows.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-orange mr-3">•</span>
                <span>
                  <strong>Role Management:</strong> Flexible role system for organizing teams
                  and managing permissions.
                </span>
              </li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-3xl font-bold mb-4 text-glow-orange">Join Us</h2>
            <p className="text-text-medium leading-relaxed">
              Whether you're a beginner just starting your coding journey or an experienced
              developer looking to collaborate, UIU Developers Hub welcomes you. Join our
              community and be part of something amazing.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

