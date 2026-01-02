import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useSound } from '@/contexts/SoundContext'
import { Heart, MessageCircle, Share2, Bookmark, MoreVertical, Plus } from 'lucide-react'

// Mock posts - replace with actual data from Firebase
const mockPosts = [
  {
    id: '1',
    author: { name: 'John Doe', avatar: '', id: '1' },
    content: 'Just finished building an amazing React component! 🚀',
    likes: 12,
    comments: 3,
    createdAt: new Date(),
    liked: false,
  },
]

export default function Social() {
  const { user } = useAuth()
  const { playKeyClick } = useSound()
  const [posts, setPosts] = useState(mockPosts)
  const [filter, setFilter] = useState<'all' | 'following' | 'trending' | 'my_posts'>('all')

  const handleLike = (postId: string) => {
    playKeyClick()
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-glow-orange">Social Feed</h1>
        <button onClick={playKeyClick} className="btn-primary flex items-center space-x-2">
          <Plus size={20} />
          <span>Create Post</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex space-x-4 mb-6">
        {(['all', 'following', 'trending', 'my_posts'] as const).map((f) => (
          <button
            key={f}
            onClick={() => {
              setFilter(f)
              playKeyClick()
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === f
                ? 'bg-accent-orange text-white'
                : 'bg-primary-navy/50 text-gray-300 hover:bg-accent-blue/20'
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1).replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center flex-shrink-0">
                <span className="text-accent-orange font-bold">
                  {post.author.name.charAt(0)}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-semibold">{post.author.name}</p>
                    <p className="text-sm text-gray-400">
                      {post.createdAt.toLocaleDateString()}
                    </p>
                  </div>
                  <button onClick={playKeyClick} className="text-gray-400 hover:text-white">
                    <MoreVertical size={20} />
                  </button>
                </div>
                <p className="text-gray-300 mb-4">{post.content}</p>
                <div className="flex items-center space-x-6">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center space-x-2 ${
                      post.liked ? 'text-accent-orange' : 'text-gray-400'
                    } hover:text-accent-orange transition-colors`}
                  >
                    <Heart size={20} fill={post.liked ? 'currentColor' : 'none'} />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-accent-blue transition-colors">
                    <MessageCircle size={20} />
                    <span>{post.comments}</span>
                  </button>
                  <button className="text-gray-400 hover:text-accent-blue transition-colors">
                    <Share2 size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-accent-blue transition-colors">
                    <Bookmark size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {posts.length === 0 && (
          <div className="card text-center py-12">
            <p className="text-gray-400 text-lg">No posts found. Be the first to post!</p>
          </div>
        )}
      </div>
    </div>
  )
}

