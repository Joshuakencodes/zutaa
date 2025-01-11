import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CreditCard, Gift, Smartphone, Users, Settings, LogOut, Send, FileText, Phone } from 'lucide-react'
import Link from 'next/link'

interface QuickActionsProps {
  isGuest: boolean
  onLogout?: () => void
}

const actionItems = [
  { icon: Send, label: 'Transfer', href: '/transfer' },
  { icon: FileText, label: 'Pay Bills', href: '/pay-bills' },
  { icon: Phone, label: 'Buy Airtime', href: '/buy-airtime' },
  { icon: CreditCard, label: 'Cards', href: '/cards' },
  { icon: Gift, label: 'Gift Cards', href: '/gift-cards' },
  { icon: Smartphone, label: 'Airtime/Data', href: '/airtime-data' },
  { icon: Users, label: 'Referrals', href: '/referrals' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export function QuickActions({ isGuest, onLogout }: QuickActionsProps) {
  return (
    <Card className="bg-[#1A1E35] border-none rounded-lg">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-3 text-white">Quick Actions</h2>
        <div className="grid grid-cols-4 gap-2">
          {actionItems.map((item) => (
            <Link key={item.href} href={isGuest ? '#' : item.href}>
              <Button 
                variant="outline" 
                className="w-full h-full flex flex-col items-center justify-center py-2 bg-[#0A0A1B] hover:bg-[#2A2E45] border-none text-white"
                disabled={isGuest}
              >
                <item.icon className="h-5 w-5 mb-1" />
                <span className="text-[10px] text-center">{item.label}</span>
              </Button>
            </Link>
          ))}
          {!isGuest && onLogout && (
            <Button 
              variant="outline" 
              className="w-full h-full flex flex-col items-center justify-center py-2 bg-[#0A0A1B] hover:bg-[#2A2E45] border-none text-white"
              onClick={onLogout}
            >
              <LogOut className="h-5 w-5 mb-1" />
              <span className="text-[10px] text-center">Log out</span>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

