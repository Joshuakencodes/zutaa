import { Bell } from 'lucide-react'

export default function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="flex items-center space-x-4">
        <Bell className="h-6 w-6" />
        <div className="h-8 w-8 rounded-full bg-[#00a859]" />
      </div>
    </header>
  )
}

