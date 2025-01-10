import { Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function WalletCard() {
  return (
    <Card className="bg-[#00A859] border-0 overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-3 sm:space-y-4">
          <div className="space-y-1 sm:space-y-2">
            <p className="text-xs sm:text-sm text-white/90">Naira Wallet Balance</p>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">₦ 1,236,949.91</h2>
              <Button variant="ghost" size="sm" className="text-white/90">
                <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button className="flex-1 bg-white text-[#00A859] hover:bg-white/90 transition-colors text-xs sm:text-sm">
              Withdraw Funds
            </Button>
            <Button className="flex-1 bg-transparent border-white hover:bg-white/10 transition-colors text-xs sm:text-sm">
              Deposit Funds
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

