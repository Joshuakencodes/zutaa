import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ManualDeposit } from '@/components/manual-deposit'

interface BalanceCardProps {
  balances: {
    title: string
    amount: number
    currency: string
    comingSoon?: boolean
  }[]
}

export function BalanceCard({ balances }: BalanceCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDeposit, setShowDeposit] = useState(false);

  return (
    <Card className="bg-[#1A1E35] border-none rounded-lg overflow-hidden">
      <CardContent className="p-4">
        <div className="relative">
          {balances.map((balance, index) => (
            <div 
              key={index} 
              className={`w-full ${index === activeIndex ? 'block' : 'hidden'}`}
            >
              <h2 className="text-gray-400 text-sm mb-2">{balance.title}</h2>
              {balance.comingSoon ? (
                <p className="text-3xl font-bold mb-4 text-white">Coming Soon</p>
              ) : (
                <p className="text-3xl font-bold mb-4 text-white">
                  {balance.currency} {balance.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              )}
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  className="flex-1 bg-white text-black hover:bg-gray-100 text-sm" 
                  disabled={balance.comingSoon}
                  onClick={() => setShowDeposit(true)}
                >
                  Deposit
                </Button>
                <Button variant="outline" className="flex-1 bg-white text-black hover:bg-gray-100 text-sm" disabled={balance.comingSoon}>
                  Withdraw
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {balances.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`View ${balances[index].title}`}
            />
          ))}
        </div>
        {showDeposit && (
          <div className="mt-4">
            <ManualDeposit />
            <Button 
              variant="link" 
              onClick={() => setShowDeposit(false)}
              className="mt-2 text-white"
            >
              Cancel
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

