import { Home, Users, FileText, Settings } from 'lucide-react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#09071c] p-4 h-screen fixed left-0 top-0">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#00a859]">Zutaa</h1>
      </div>
      <nav className="space-y-2">
        <Link href="#" className="flex items-center space-x-2 rounded-lg bg-[#00a859] p-2 text-white">
          <Home className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 rounded-lg p-2 text-gray-400 hover:bg-[#1a1c2b]">
          <Users className="h-5 w-5" />
          <span>Users</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 rounded-lg p-2 text-gray-400 hover:bg-[#1a1c2b]">
          <FileText className="h-5 w-5" />
          <span>Reports</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 rounded-lg p-2 text-gray-400 hover:bg-[#1a1c2b]">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  )
}

