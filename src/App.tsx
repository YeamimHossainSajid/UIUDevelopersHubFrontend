import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { SoundProvider } from './contexts/SoundContext'
import CustomCursor from './components/CustomCursor'
import { Toaster } from './components/ui/Toaster'

// Public pages
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Community from './pages/Community'
import Contact from './pages/Contact'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'

// Protected pages
import Dashboard from './pages/dashboard/Dashboard'
import DashboardHome from './pages/dashboard/DashboardHome'
import Social from './pages/dashboard/Social'
import Meetings from './pages/dashboard/Meetings'
import Tasks from './pages/dashboard/Tasks'
import Profile from './pages/dashboard/Profile'
import Settings from './pages/dashboard/Settings'
import AdminRoles from './pages/dashboard/admin/Roles'

// Layouts
import PublicLayout from './layouts/PublicLayout'
import DashboardLayout from './layouts/DashboardLayout'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <SoundProvider>
        <CustomCursor />
        <Routes>
          {/* Public routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
          </Route>

          {/* Protected routes */}
          <Route
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<DashboardHome />} />
              <Route path="social" element={<Social />} />
              <Route path="meetings" element={<Meetings />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="admin/roles" element={<AdminRoles />} />
            </Route>
          </Route>
        </Routes>
        <Toaster />
      </SoundProvider>
    </AuthProvider>
  )
}

export default App

