import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function DashboardHeader() {
  return (
    <header className="fixed right-0 left-0 top-0 z-30 bg-[#0a0a1b] border-b border-gray-800 transition-all duration-300">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-14 sm:h-16 px-3 sm:px-4 lg:px-8 flex items-center justify-end">
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-red-500 text-[8px] sm:text-[10px] flex items-center justify-center">
                1
              </span>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full p-0">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Profile"
                width={28}
                height={28}
                className="rounded-full sm:w-8 sm:h-8"
              />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

