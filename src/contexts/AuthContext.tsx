import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User } from '@/types'
import { auth } from '@/config/firebase'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name: string) => Promise<void>
  signOut: () => Promise<void>
  updateUser: (updates: Partial<User>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Listen for auth state changes
    // TODO: Implement Firebase auth state listener
    if (!auth) {
      setLoading(false)
      return
    }

    // @ts-ignore - Firebase auth will be available after package installation
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser: any) => {
      if (firebaseUser) {
        // TODO: Fetch user data from Firestore
        setUser({
          id: firebaseUser.uid,
          email: firebaseUser.email || '',
          name: firebaseUser.displayName || 'User',
          role: 'member',
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const signIn = async (email: string, _password: string) => {
    // TODO: Implement Firebase sign in
    // For now, create a mock user for development
    console.log('Sign in:', email)
    setUser({
      id: 'mock-user-id',
      email,
      name: email.split('@')[0],
      role: 'member',
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }

  const signUp = async (email: string, _password: string, name: string) => {
    // TODO: Implement Firebase sign up
    // For now, create a mock user for development
    console.log('Sign up:', email, name)
    setUser({
      id: 'mock-user-id',
      email,
      name,
      role: 'member',
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }

  const signOut = async () => {
    // TODO: Implement Firebase sign out
    setUser(null)
  }

  const updateUser = async (_updates: Partial<User>) => {
    // TODO: Implement user update
    throw new Error('Not implemented')
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

