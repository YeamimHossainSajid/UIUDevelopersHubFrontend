import { Outlet } from 'react-router-dom'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import DashboardTopBar from '@/components/dashboard/DashboardTopBar'

export default function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardTopBar />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

