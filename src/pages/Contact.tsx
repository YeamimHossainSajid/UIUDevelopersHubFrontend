import { useState } from 'react'
import Real3DText from '@/components/Real3DText'
import { useSound } from '@/contexts/SoundContext'
import { Mail, MessageCircle, Send } from 'lucide-react'
import { toast } from '@/components/ui/Toaster'

export default function Contact() {
  const { playKeyClick } = useSound()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    playKeyClick()
    // TODO: Implement form submission
    toast('Thank you for your message! We will get back to you soon.', 'success')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="pt-16">
      <section className="section-container">
        <div className="section-header">
          <Real3DText className="section-title">Contact Us</Real3DText>
          <p className="section-subtitle">
            Get in touch with us. We'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-glow-orange">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="text-accent-blue mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:uiuhackdayinfo@gmail.com"
                      className="text-accent-blue hover:underline"
                    >
                      uiuhackdayinfo@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MessageCircle className="text-accent-blue mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Discord</p>
                    <a href="#" className="text-accent-blue hover:underline">
                      Join our Discord server
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-glow-orange">Response Time</h3>
              <p className="text-gray-300">
                We typically respond within 24-48 hours. For urgent matters, please reach out
                via Discord.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-glow-orange">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-primary-dark/50 border border-accent-blue/30 text-white focus:outline-none focus:border-accent-blue"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-primary-dark/50 border border-accent-blue/30 text-white focus:outline-none focus:border-accent-blue"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-primary-dark/50 border border-accent-blue/30 text-white focus:outline-none focus:border-accent-blue"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-primary-dark/50 border border-accent-blue/30 text-white focus:outline-none focus:border-accent-blue resize-none"
                />
              </div>
              <button
                type="submit"
                onClick={playKeyClick}
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

