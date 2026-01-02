import { useState } from 'react'
import Real3DText from '@/components/Real3DText'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

type EventType = 'all' | 'workshop' | 'meetup' | 'hackathon' | 'competition'

// Mock events data - replace with actual data from Firebase
const mockEvents = [
  {
    id: '1',
    title: 'React Workshop',
    description: 'Learn React fundamentals and build your first app',
    type: 'workshop' as const,
    date: new Date('2024-12-15'),
    location: 'UIU Campus',
    image: '/Events/event1.jpg',
  },
  {
    id: '2',
    title: 'Monthly Meetup',
    description: 'Monthly developer meetup and networking',
    type: 'meetup' as const,
    date: new Date('2024-12-20'),
    location: 'Online',
    image: '/Events/event2.jpg',
  },
]

export default function Events() {
  const [filter, setFilter] = useState<EventType>('all')

  const filteredEvents = mockEvents.filter(
    (event) => filter === 'all' || event.type === filter
  )

  return (
    <div className="pt-16">
      <section className="section-container">
        <div className="section-header">
          <Real3DText className="section-title">Events</Real3DText>
          <p className="section-subtitle">
            Join us for workshops, meetups, hackathons, and more
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {(['all', 'workshop', 'meetup', 'hackathon', 'competition'] as EventType[]).map(
            (type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  filter === type
                    ? 'bg-accent-orange text-white'
                    : 'bg-white/80 text-text-medium hover:bg-accent-blue/20 border border-accent-blue/20'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="card overflow-hidden">
              {event.image && (
                <div className="w-full h-48 bg-primary-navy mb-4 rounded-lg overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
              )}
              <div className="flex items-center space-x-2 text-sm text-text-medium mb-2">
                <Calendar size={16} />
                <span>{event.date.toLocaleDateString()}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-text-dark">{event.title}</h3>
              <p className="text-text-medium text-sm mb-4">{event.description}</p>
              <div className="flex items-center space-x-2 text-sm text-text-medium mb-4">
                <MapPin size={16} />
                <span>{event.location}</span>
              </div>
              <button className="btn-secondary w-full flex items-center justify-center space-x-2">
                <span>Learn More</span>
                <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-medium text-lg">No events found for this filter.</p>
          </div>
        )}
      </section>
    </div>
  )
}

