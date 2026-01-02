import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

interface ProtectedRouteProps {
  children: ReactNode
  requiredRole?: 'member' | 'moderator' | 'admin' | 'super_admin'
}

export default function ProtectedRoute({ children, requiredRole = 'member' }: ProtectedRouteProps) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="spinner w-12 h-12" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/auth/signin" replace />
  }

  // Role hierarchy check
  const roleHierarchy: Record<string, number> = {
    guest: 0,
    member: 1,
    moderator: 2,
    admin: 3,
    super_admin: 4,
  }

  if (roleHierarchy[user.role] < roleHierarchy[requiredRole]) {
    return <Navigate to="/dashboard" replace />
  }

  return <>{children}</>
}

