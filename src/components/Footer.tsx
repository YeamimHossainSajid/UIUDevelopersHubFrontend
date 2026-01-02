import { Link } from 'react-router-dom'
import { useSound } from '@/contexts/SoundContext'

export default function Footer() {
  const { playKeyClick } = useSound()

  return (
    <footer className="bg-white/80 backdrop-blur-xl border-t border-accent-blue/20 mt-auto shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-glow-orange">UIU Developers Hub</h3>
            <p className="text-text-medium text-sm">
              Empowering developers, building communities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-text-dark">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" onClick={playKeyClick} className="text-text-medium hover:text-accent-blue transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/events" onClick={playKeyClick} className="text-text-medium hover:text-accent-blue transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/community" onClick={playKeyClick} className="text-text-medium hover:text-accent-blue transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={playKeyClick} className="text-text-medium hover:text-accent-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-text-dark">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:uiuhackdayinfo@gmail.com" className="text-text-medium hover:text-accent-blue transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="text-text-medium hover:text-accent-blue transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-text-medium hover:text-accent-blue transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-text-medium hover:text-accent-blue transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-text-dark">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/auth/signup" onClick={playKeyClick} className="text-text-medium hover:text-accent-blue transition-colors">
                  Join Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-text-medium hover:text-accent-blue transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-accent-blue/20 text-center text-sm text-text-medium">
          <p>Built with ❤️ by UIU Developers Hub</p>
          <p className="mt-2">© {new Date().getFullYear()} UIU Developers Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

