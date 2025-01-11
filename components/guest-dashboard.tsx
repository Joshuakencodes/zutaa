import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { QuickActions } from '@/components/quick-actions'
import Image from 'next/image'

interface GuestDashboardProps {
  onLoginClick: () => void
}

export function GuestDashboard({ onLoginClick }: GuestDashboardProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center mb-6">
        <Image 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zuta%20white%20text%20logo-WhR77f1iNBP2KQRpxXVQJtR3SHMObY.png"
          alt="Zutaa Logo"
          width={120}
          height={40}
          className="mb-2"
          priority
        />
      </div>

      <Card className="bg-[#1A1E35] border-none rounded-lg overflow-hidden">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-3 text-white">Welcome to Zutaa</h2>
          <p className="text-gray-400 mb-4">Log in or sign up to access your dashboard and manage your finances.</p>
          <Button 
            onClick={onLoginClick}
            className="w-full"
          >
            Log In / Sign Up
          </Button>
        </CardContent>
      </Card>

      <QuickActions isGuest={true} />
    </div>
  )
}

