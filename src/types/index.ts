export type UserRole = 'guest' | 'member' | 'moderator' | 'admin' | 'super_admin'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  avatar?: string
  bio?: string
  createdAt: Date
  updatedAt: Date
}

export interface Post {
  id: string
  authorId: string
  author?: User
  content: string
  images?: string[]
  likes: string[]
  comments: Comment[]
  createdAt: Date
  updatedAt: Date
  type: 'text' | 'image' | 'code' | 'announcement' | 'poll'
}

export interface Comment {
  id: string
  authorId: string
  author?: User
  content: string
  createdAt: Date
  replies?: Comment[]
}

export interface Meeting {
  id: string
  title: string
  description: string
  hostId: string
  host?: User
  participants: string[]
  scheduledAt: Date
  duration: number
  type: 'public' | 'private'
  status: 'scheduled' | 'ongoing' | 'completed' | 'cancelled'
  meetingUrl?: string
  createdAt: Date
}

export interface Task {
  id: string
  title: string
  description: string
  projectId: string
  assigneeId?: string
  assignee?: User
  status: 'backlog' | 'todo' | 'in_progress' | 'in_review' | 'done'
  priority: 'low' | 'medium' | 'high' | 'critical'
  dueDate?: Date
  labels: string[]
  attachments: string[]
  subtasks: Subtask[]
  createdAt: Date
  updatedAt: Date
}

export interface Subtask {
  id: string
  title: string
  completed: boolean
}

export interface Project {
  id: string
  name: string
  description: string
  members: string[]
  createdAt: Date
  updatedAt: Date
}

export interface Notification {
  id: string
  userId: string
  type: 'like' | 'comment' | 'mention' | 'follow' | 'task_assigned' | 'meeting_reminder'
  message: string
  read: boolean
  createdAt: Date
  link?: string
}

export interface Event {
  id: string
  title: string
  description: string
  image?: string
  date: Date
  type: 'workshop' | 'meetup' | 'hackathon' | 'competition'
  location?: string
  registrationLink?: string
}

