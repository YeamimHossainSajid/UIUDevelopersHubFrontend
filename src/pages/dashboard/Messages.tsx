import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useSound } from '@/contexts/SoundContext'
import {
  Search,
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Users,
  User,
  MessageCircle,
  Phone,
  Video,
  Check,
  CheckCheck,
} from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface Message {
  id: string
  content: string
  senderId: string
  senderName: string
  senderAvatar?: string
  timestamp: Date
  read: boolean
}

interface Chat {
  id: string
  name: string
  avatar?: string
  lastMessage: string
  lastMessageTime: Date
  unreadCount: number
  isGroup: boolean
  members?: string[]
  messages: Message[]
}

// Mock chats - individual and group
const mockChats: Chat[] = [
  {
    id: '1',
    name: 'Sara Ahmed',
    avatar: 'https://i.pravatar.cc/150?img=20',
    lastMessage: 'Hey! Are you available for the meeting?',
    lastMessageTime: new Date(Date.now() - 300000),
    unreadCount: 2,
    isGroup: false,
    messages: [
      {
        id: 'm1',
        content: 'Hey! Are you available for the meeting?',
        senderId: 'user1',
        senderName: 'Sara Ahmed',
        timestamp: new Date(Date.now() - 300000),
        read: false,
      },
      {
        id: 'm2',
        content: 'Sure, I can join at 3 PM',
        senderId: 'current-user',
        senderName: 'You',
        timestamp: new Date(Date.now() - 240000),
        read: true,
      },
    ],
  },
  {
    id: '2',
    name: 'React Developers',
    avatar: undefined,
    lastMessage: 'John: The new component is ready for review',
    lastMessageTime: new Date(Date.now() - 600000),
    unreadCount: 5,
    isGroup: true,
    members: ['Sara Ahmed', 'John Doe', 'Rifat Hossain', 'You'],
    messages: [
      {
        id: 'm3',
        content: 'The new component is ready for review',
        senderId: 'user2',
        senderName: 'John Doe',
        timestamp: new Date(Date.now() - 600000),
        read: false,
      },
    ],
  },
  {
    id: '3',
    name: 'Rifat Hossain',
    avatar: 'https://i.pravatar.cc/150?img=51',
    lastMessage: 'Thanks for the help!',
    lastMessageTime: new Date(Date.now() - 3600000),
    unreadCount: 0,
    isGroup: false,
    messages: [
      {
        id: 'm4',
        content: 'Thanks for the help!',
        senderId: 'user3',
        senderName: 'Rifat Hossain',
        timestamp: new Date(Date.now() - 3600000),
        read: true,
      },
    ],
  },
  {
    id: '4',
    name: 'UIU Dev Team',
    avatar: undefined,
    lastMessage: 'Sara: Meeting scheduled for tomorrow',
    lastMessageTime: new Date(Date.now() - 7200000),
    unreadCount: 0,
    isGroup: true,
    members: ['Sara Ahmed', 'Tasnim Islam', 'Arif Mahmud', 'You'],
    messages: [
      {
        id: 'm5',
        content: 'Meeting scheduled for tomorrow',
        senderId: 'user1',
        senderName: 'Sara Ahmed',
        timestamp: new Date(Date.now() - 7200000),
        read: true,
      },
    ],
  },
  {
    id: '5',
    name: 'Tasnim Islam',
    avatar: 'https://i.pravatar.cc/150?img=9',
    lastMessage: 'Can you review my PR?',
    lastMessageTime: new Date(Date.now() - 86400000),
    unreadCount: 1,
    isGroup: false,
    messages: [
      {
        id: 'm6',
        content: 'Can you review my PR?',
        senderId: 'user4',
        senderName: 'Tasnim Islam',
        timestamp: new Date(Date.now() - 86400000),
        read: false,
      },
    ],
  },
]

export default function Messages() {
  const { user } = useAuth()
  const { playKeyClick } = useSound()
  const [chats, setChats] = useState<Chat[]>(mockChats)
  const [selectedChat, setSelectedChat] = useState<Chat | null>(chats[0] || null)
  const [messageText, setMessageText] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredChats = chats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSendMessage = () => {
    if (!messageText.trim() || !selectedChat) return

    playKeyClick()
    // In a real app, this would send the message to the backend
    const newMessage: Message = {
      id: `m${Date.now()}`,
      content: messageText,
      senderId: user?.id || 'current-user',
      senderName: user?.name || 'You',
      timestamp: new Date(),
      read: false,
    }

    // Update the selected chat's messages
    const updatedChat = {
      ...selectedChat,
      messages: [...selectedChat.messages, newMessage],
      lastMessage: messageText,
      lastMessageTime: new Date(),
    }

    // Update chats array
    const updatedChats = chats.map((chat) =>
      chat.id === selectedChat.id ? updatedChat : chat
    )

    setChats(updatedChats)
    setSelectedChat(updatedChat)
    setMessageText('')
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] max-w-7xl mx-auto">
      {/* Chat List Sidebar */}
      <div className="w-80 border-r border-accent-blue/20 bg-white flex flex-col">
        {/* Search */}
        <div className="p-4 border-b border-accent-blue/20">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light" size={18} />
            <input
              type="text"
              placeholder="Search chats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-accent-blue/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange text-text-dark placeholder-text-light"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {filteredChats.map((chat) => {
            const isSelected = selectedChat?.id === chat.id
            return (
              <div
                key={chat.id}
                onClick={() => {
                  setSelectedChat(chat)
                  playKeyClick()
                }}
                className={`p-4 border-b border-accent-blue/10 cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-accent-orange/10 border-l-4 border-l-accent-orange'
                    : 'hover:bg-primary-soft'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {chat.isGroup ? (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                        <Users className="text-white" size={20} />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-orange to-accent-purple overflow-hidden">
                        {chat.avatar ? (
                          <img
                            src={chat.avatar}
                            alt={chat.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                              e.currentTarget.parentElement!.innerHTML =
                                `<div class="w-full h-full flex items-center justify-center text-white font-bold">${chat.name.charAt(0).toUpperCase()}</div>`
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-white font-bold">
                            {chat.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-text-dark truncate">{chat.name}</h3>
                      <span className="text-xs text-text-light flex-shrink-0 ml-2">
                        {formatDistanceToNow(chat.lastMessageTime, { addSuffix: true })}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-text-medium truncate">{chat.lastMessage}</p>
                      {chat.unreadCount > 0 && (
                        <span className="bg-accent-orange text-white text-xs font-bold rounded-full px-2 py-0.5 flex-shrink-0 ml-2">
                          {chat.unreadCount}
                        </span>
                      )}
                    </div>
                    {chat.isGroup && chat.members && (
                      <p className="text-xs text-text-light mt-1">
                        {chat.members.length} members
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-accent-blue/20 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {selectedChat.isGroup ? (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                    <Users className="text-white" size={18} />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-orange to-accent-purple overflow-hidden">
                    {selectedChat.avatar ? (
                      <img
                        src={selectedChat.avatar}
                        alt={selectedChat.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm">
                        {selectedChat.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                )}
                <div>
                  <h2 className="font-semibold text-text-dark">{selectedChat.name}</h2>
                  {selectedChat.isGroup && selectedChat.members && (
                    <p className="text-xs text-text-light">{selectedChat.members.length} members</p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={playKeyClick}
                  className="p-2 rounded-lg hover:bg-primary-soft transition-colors"
                >
                  <Phone size={20} className="text-text-medium" />
                </button>
                <button
                  onClick={playKeyClick}
                  className="p-2 rounded-lg hover:bg-primary-soft transition-colors"
                >
                  <Video size={20} className="text-text-medium" />
                </button>
                <button
                  onClick={playKeyClick}
                  className="p-2 rounded-lg hover:bg-primary-soft transition-colors"
                >
                  <MoreVertical size={20} className="text-text-medium" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-primary-light/30">
              {selectedChat.messages.map((message) => {
                const isOwnMessage = message.senderId === user?.id || message.senderName === 'You'
                return (
                  <div
                    key={message.id}
                    className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[70%] ${isOwnMessage ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      {!isOwnMessage && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">
                            {message.senderName.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <div className={`rounded-lg px-4 py-2 ${isOwnMessage ? 'bg-accent-orange text-white' : 'bg-white border border-accent-blue/20'}`}>
                        {!isOwnMessage && (
                          <p className="text-xs font-semibold mb-1 text-text-dark">{message.senderName}</p>
                        )}
                        <p className={`text-sm ${isOwnMessage ? 'text-white' : 'text-text-dark'}`}>
                          {message.content}
                        </p>
                        <div className={`flex items-center justify-end mt-1 space-x-1 ${isOwnMessage ? 'text-white/70' : 'text-text-light'}`}>
                          <span className="text-xs">
                            {formatDistanceToNow(message.timestamp, { addSuffix: true })}
                          </span>
                          {isOwnMessage && (
                            message.read ? (
                              <CheckCheck size={12} />
                            ) : (
                              <Check size={12} />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-accent-blue/20 bg-white">
              <div className="flex items-center space-x-2">
                <button
                  onClick={playKeyClick}
                  className="p-2 rounded-lg hover:bg-primary-soft transition-colors"
                >
                  <Paperclip size={20} className="text-text-medium" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage()
                      }
                    }}
                    placeholder="Type a message..."
                    className="w-full px-4 py-2 pr-10 border border-accent-blue/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange text-text-dark placeholder-text-light"
                  />
                  <button
                    onClick={playKeyClick}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded hover:bg-primary-soft transition-colors"
                  >
                    <Smile size={18} className="text-text-medium" />
                  </button>
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!messageText.trim()}
                  className="p-2 bg-accent-orange text-white rounded-lg hover:bg-accent-orange-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageCircle size={64} className="text-text-light mx-auto mb-4" />
              <p className="text-text-medium text-lg">Select a chat to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

