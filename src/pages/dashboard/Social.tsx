import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useSound } from '@/contexts/SoundContext'
import {
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Share2,
  Bookmark,
  MoreVertical,
  Plus,
  X,
  Image as ImageIcon,
  Send,
  Smile,
  XCircle,
} from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

// Post interface
interface Post {
  id: string
  author: {
    name: string
    avatar?: string
    id: string
    role?: string
  }
  content: string
  image?: string
  upvotes: number
  downvotes: number
  comments: Comment[]
  shares: number
  saved: boolean
  upvoted: boolean
  downvoted: boolean
  createdAt: Date
}

interface Comment {
  id: string
  author: {
    name: string
    avatar?: string
    id: string
  }
  content: string
  createdAt: Date
}

// Mock posts with LinkedIn-like content
const mockPosts: Post[] = [
  {
    id: '1',
    author: {
      name: 'Sara Ahmed',
      avatar: 'https://i.pravatar.cc/150?img=20',
      id: '1',
      role: 'Full Stack Developer at UIU',
    },
    content:
      'Just completed an amazing project using React and TypeScript! The component architecture we built is scalable and maintainable. Excited to share more about this journey! 🚀 #React #TypeScript #WebDevelopment',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    upvotes: 42,
    downvotes: 2,
    comments: [
      {
        id: 'c1',
        author: { name: 'Rifat Hossain', avatar: 'https://i.pravatar.cc/150?img=51', id: '2' },
        content: 'This looks amazing! Can you share the repository?',
        createdAt: new Date(Date.now() - 3600000),
      },
      {
        id: 'c2',
        author: { name: 'Tasnim Islam', avatar: 'https://i.pravatar.cc/150?img=9', id: '3' },
        content: 'Great work! The UI looks really clean.',
        createdAt: new Date(Date.now() - 1800000),
      },
    ],
    shares: 8,
    saved: false,
    upvoted: false,
    downvoted: false,
    createdAt: new Date(Date.now() - 7200000),
  },
  {
    id: '2',
    author: {
      name: 'Arif Mahmud',
      avatar: 'https://i.pravatar.cc/150?img=68',
      id: '4',
      role: 'Backend Developer',
    },
    content:
      'Just learned about microservices architecture and implemented it in our latest project. The scalability improvements are incredible! Anyone else working with microservices?',
    upvotes: 28,
    downvotes: 1,
    comments: [
      {
        id: 'c3',
        author: { name: 'Nadia Chowdhury', avatar: 'https://i.pravatar.cc/150?img=32', id: '5' },
        content: 'I am! What tech stack are you using?',
        createdAt: new Date(Date.now() - 5400000),
      },
    ],
    shares: 5,
    saved: false,
    upvoted: true,
    downvoted: false,
    createdAt: new Date(Date.now() - 10800000),
  },
  {
    id: '3',
    author: {
      name: 'Karim Uddin',
      avatar: 'https://i.pravatar.cc/150?img=15',
      id: '6',
      role: 'Mobile Developer',
    },
    content:
      'Our team just launched a new mobile app! Check out the screenshots below. Built with React Native and TypeScript. 🎉',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    upvotes: 56,
    downvotes: 0,
    comments: [],
    shares: 12,
    saved: true,
    upvoted: false,
    downvoted: false,
    createdAt: new Date(Date.now() - 14400000),
  },
  {
    id: '4',
    author: {
      name: 'Lubna Akter',
      avatar: 'https://i.pravatar.cc/150?img=45',
      id: '7',
      role: 'Data Scientist',
    },
    content:
      'Just finished a machine learning project that predicts user behavior. The accuracy is 94%! Excited to present this at our next meetup. #MachineLearning #DataScience',
    upvotes: 35,
    downvotes: 1,
    comments: [
      {
        id: 'c4',
        author: { name: 'Shakib Hasan', avatar: 'https://i.pravatar.cc/150?img=13', id: '8' },
        content: 'That is impressive! What algorithm did you use?',
        createdAt: new Date(Date.now() - 9000000),
      },
    ],
    shares: 7,
    saved: false,
    upvoted: false,
    downvoted: false,
    createdAt: new Date(Date.now() - 18000000),
  },
]

export default function Social() {
  const { user } = useAuth()
  const { playKeyClick } = useSound()
  const [posts, setPosts] = useState<Post[]>(mockPosts)
  const [filter, setFilter] = useState<'all' | 'following' | 'trending' | 'my_posts'>('all')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newPostContent, setNewPostContent] = useState('')
  const [newPostImage, setNewPostImage] = useState<string | null>(null)
  const [expandedComments, setExpandedComments] = useState<Set<string>>(new Set())
  const [commentTexts, setCommentTexts] = useState<Record<string, string>>({})

  const handleUpvote = (postId: string) => {
    playKeyClick()
    setPosts(
      posts.map((post) => {
        if (post.id !== postId) return post
        const wasUpvoted = post.upvoted
        const wasDownvoted = post.downvoted
        return {
          ...post,
          upvoted: !wasUpvoted,
          downvoted: false,
          upvotes: wasUpvoted ? post.upvotes - 1 : post.upvotes + 1,
          downvotes: wasDownvoted ? post.downvotes - 1 : post.downvotes,
        }
      })
    )
  }

  const handleDownvote = (postId: string) => {
    playKeyClick()
    setPosts(
      posts.map((post) => {
        if (post.id !== postId) return post
        const wasDownvoted = post.downvoted
        const wasUpvoted = post.upvoted
        return {
          ...post,
          downvoted: !wasDownvoted,
          upvoted: false,
          downvotes: wasDownvoted ? post.downvotes - 1 : post.downvotes + 1,
          upvotes: wasUpvoted ? post.upvotes - 1 : post.upvotes,
        }
      })
    )
  }

  const handleSave = (postId: string) => {
    playKeyClick()
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, saved: !post.saved } : post
      )
    )
  }

  const handleShare = (postId: string) => {
    playKeyClick()
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, shares: post.shares + 1 } : post
      )
    )
    // In a real app, this would open a share dialog
    navigator.clipboard.writeText(window.location.href)
  }

  const toggleComments = (postId: string) => {
    playKeyClick()
    setExpandedComments((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) {
        newSet.delete(postId)
      } else {
        newSet.add(postId)
      }
      return newSet
    })
  }

  const handleAddComment = (postId: string) => {
    const commentText = commentTexts[postId]?.trim()
    if (!commentText) return

    playKeyClick()
    const newComment: Comment = {
      id: `c${Date.now()}`,
      author: {
        name: user?.name || 'You',
        avatar: user?.avatar,
        id: user?.id || 'current-user',
      },
      content: commentText,
      createdAt: new Date(),
    }

    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    )
    setCommentTexts({ ...commentTexts, [postId]: '' })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewPostImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCreatePost = () => {
    if (!newPostContent.trim() && !newPostImage) return

    playKeyClick()
    const newPost: Post = {
      id: `post-${Date.now()}`,
      author: {
        name: user?.name || 'You',
        avatar: user?.avatar,
        id: user?.id || 'current-user',
        role: user?.role || 'Member',
      },
      content: newPostContent,
      image: newPostImage || undefined,
      upvotes: 0,
      downvotes: 0,
      comments: [],
      shares: 0,
      saved: false,
      upvoted: false,
      downvoted: false,
      createdAt: new Date(),
    }

    setPosts([newPost, ...posts])
    setNewPostContent('')
    setNewPostImage(null)
    setShowCreateModal(false)
  }

  const filteredPosts = posts.filter((post) => {
    if (filter === 'my_posts') {
      return post.author.id === user?.id
    }
    return true
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-text-dark">Feed</h1>
          <button
            onClick={() => {
              setShowCreateModal(true)
              playKeyClick()
            }}
            className="btn-primary flex items-center space-x-2 px-4 py-2 rounded-lg hover:scale-105 transition-transform"
          >
            <Plus size={20} />
            <span>Create Post</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {(['all', 'following', 'trending', 'my_posts'] as const).map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f)
                playKeyClick()
              }}
              className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                filter === f
                  ? 'bg-accent-orange text-white shadow-md'
                  : 'bg-white text-text-medium hover:bg-primary-soft border border-accent-blue/20'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1).replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Create Post Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-accent-blue/20 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-text-dark">Create a Post</h2>
              <button
                onClick={() => {
                  setShowCreateModal(false)
                  playKeyClick()
                }}
                className="text-text-light hover:text-text-dark transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-orange to-accent-purple flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {(user?.name || 'U').charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1">
                  <textarea
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="What do you want to talk about?"
                    className="w-full min-h-[120px] p-3 border border-accent-blue/20 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-accent-orange text-text-dark placeholder-text-light"
                  />
                </div>
              </div>

              {newPostImage && (
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <img
                    src={newPostImage}
                    alt="Preview"
                    className="w-full max-h-96 object-cover"
                  />
                  <button
                    onClick={() => {
                      setNewPostImage(null)
                      playKeyClick()
                    }}
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                  >
                    <XCircle size={20} />
                  </button>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-accent-blue/20">
                <div className="flex items-center space-x-4">
                  <label className="cursor-pointer flex items-center space-x-2 text-text-medium hover:text-accent-orange transition-colors">
                    <ImageIcon size={20} />
                    <span>Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                  <button className="flex items-center space-x-2 text-text-medium hover:text-accent-orange transition-colors">
                    <Smile size={20} />
                    <span>Emoji</span>
                  </button>
                </div>
                <button
                  onClick={handleCreatePost}
                  disabled={!newPostContent.trim() && !newPostImage}
                  className="btn-primary px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Posts Feed */}
      <div className="space-y-4">
        {filteredPosts.map((post) => {
          const isCommentsExpanded = expandedComments.has(post.id)
          const netVotes = post.upvotes - post.downvotes

          return (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md border border-accent-blue/10 hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Post Header */}
              <div className="p-4 pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-orange to-accent-purple flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {post.author.avatar ? (
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                            e.currentTarget.parentElement!.innerHTML =
                              `<div class="w-full h-full flex items-center justify-center text-white font-bold text-lg">${post.author.name.charAt(0).toUpperCase()}</div>`
                          }}
                        />
                      ) : (
                        <span className="text-white font-bold text-lg">
                          {post.author.name.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-text-dark text-lg">{post.author.name}</h3>
                      {post.author.role && (
                        <p className="text-text-light text-sm">{post.author.role}</p>
                      )}
                      <p className="text-text-light text-xs mt-1">
                        {formatDistanceToNow(post.createdAt, { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={playKeyClick}
                    className="text-text-light hover:text-text-dark transition-colors p-1"
                  >
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>

              {/* Post Content */}
              <div className="px-4 pb-3">
                <p className="text-text-dark whitespace-pre-wrap leading-relaxed">{post.content}</p>
                {post.image && (
                  <div className="mt-4 rounded-lg overflow-hidden">
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full max-h-96 object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Post Stats */}
              <div className="px-4 py-2 border-t border-accent-blue/10 flex items-center justify-between text-sm text-text-light">
                <div className="flex items-center space-x-4">
                  {netVotes > 0 && (
                    <span className="flex items-center space-x-1">
                      <ThumbsUp size={14} className="text-accent-orange" />
                      <span>{netVotes}</span>
                    </span>
                  )}
                  {post.comments.length > 0 && (
                    <span>{post.comments.length} comment{post.comments.length !== 1 ? 's' : ''}</span>
                  )}
                  {post.shares > 0 && <span>{post.shares} share{post.shares !== 1 ? 's' : ''}</span>}
                </div>
              </div>

              {/* Post Actions */}
              <div className="px-2 py-2 border-t border-accent-blue/10">
                <div className="grid grid-cols-4 gap-2">
                  <button
                    onClick={() => handleUpvote(post.id)}
                    className={`flex items-center justify-center space-x-2 py-2 rounded-lg transition-all ${
                      post.upvoted
                        ? 'bg-accent-orange/10 text-accent-orange'
                        : 'text-text-medium hover:bg-primary-soft'
                    }`}
                  >
                    <ThumbsUp size={20} fill={post.upvoted ? 'currentColor' : 'none'} />
                    <span className="text-sm font-medium">Upvote</span>
                  </button>
                  <button
                    onClick={() => handleDownvote(post.id)}
                    className={`flex items-center justify-center space-x-2 py-2 rounded-lg transition-all ${
                      post.downvoted
                        ? 'bg-red-500/10 text-red-500'
                        : 'text-text-medium hover:bg-primary-soft'
                    }`}
                  >
                    <ThumbsDown size={20} fill={post.downvoted ? 'currentColor' : 'none'} />
                    <span className="text-sm font-medium">Downvote</span>
                  </button>
                  <button
                    onClick={() => toggleComments(post.id)}
                    className="flex items-center justify-center space-x-2 py-2 rounded-lg text-text-medium hover:bg-primary-soft transition-all"
                  >
                    <MessageCircle size={20} />
                    <span className="text-sm font-medium">Comment</span>
                  </button>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleShare(post.id)}
                      className="flex items-center justify-center space-x-2 py-2 rounded-lg text-text-medium hover:bg-primary-soft transition-all flex-1"
                    >
                      <Share2 size={20} />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button
                      onClick={() => handleSave(post.id)}
                      className={`p-2 rounded-lg transition-all ${
                        post.saved
                          ? 'bg-accent-orange/10 text-accent-orange'
                          : 'text-text-medium hover:bg-primary-soft'
                      }`}
                    >
                      <Bookmark size={20} fill={post.saved ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              {isCommentsExpanded && (
                <div className="border-t border-accent-blue/10 bg-primary-soft/50">
                  {/* Existing Comments */}
                  {post.comments.length > 0 && (
                    <div className="px-4 py-3 space-y-3 max-h-96 overflow-y-auto">
                      {post.comments.map((comment) => (
                        <div key={comment.id} className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center flex-shrink-0">
                            {comment.author.avatar ? (
                              <img
                                src={comment.author.avatar}
                                alt={comment.author.name}
                                className="w-full h-full object-cover rounded-full"
                              />
                            ) : (
                              <span className="text-white font-bold text-xs">
                                {comment.author.name.charAt(0).toUpperCase()}
                              </span>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="bg-white rounded-lg p-3">
                              <p className="font-semibold text-text-dark text-sm mb-1">
                                {comment.author.name}
                              </p>
                              <p className="text-text-medium text-sm">{comment.content}</p>
                            </div>
                            <p className="text-text-light text-xs mt-1 ml-1">
                              {formatDistanceToNow(comment.createdAt, { addSuffix: true })}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add Comment */}
                  <div className="px-4 py-3 border-t border-accent-blue/10">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-orange to-accent-purple flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">
                          {(user?.name || 'U').charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1 flex items-center space-x-2">
                        <input
                          type="text"
                          value={commentTexts[post.id] || ''}
                          onChange={(e) =>
                            setCommentTexts({ ...commentTexts, [post.id]: e.target.value })
                          }
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              handleAddComment(post.id)
                            }
                          }}
                          placeholder="Write a comment..."
                          className="flex-1 px-4 py-2 border border-accent-blue/20 rounded-full focus:outline-none focus:ring-2 focus:ring-accent-orange text-text-dark placeholder-text-light text-sm"
                        />
                        <button
                          onClick={() => handleAddComment(post.id)}
                          disabled={!commentTexts[post.id]?.trim()}
                          className="p-2 bg-accent-orange text-white rounded-full hover:bg-accent-orange-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Send size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}

        {filteredPosts.length === 0 && (
          <div className="bg-white rounded-xl shadow-md border border-accent-blue/10 p-12 text-center">
            <p className="text-text-medium text-lg">No posts found. Be the first to post!</p>
          </div>
        )}
      </div>
    </div>
  )
}
