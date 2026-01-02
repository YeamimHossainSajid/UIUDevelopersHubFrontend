import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="p-6">
      <Outlet />
    </div>
  )
}

