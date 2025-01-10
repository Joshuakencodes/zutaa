import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function ReviewCard() {
  return (
    <Card className="bg-gray-200 border-0 overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
      <CardContent className="p-4 sm:p-6">
        <div className="text-black space-y-3 sm:space-y-4">
          <div className="space-y-0 sm:space-y-1">
            <h3 className="text-lg sm:text-xl font-bold">GOT A MINUTE?</h3>
            <h4 className="text-base sm:text-lg font-bold">GIVE US A REVIEW</h4>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex gap-1">
              {Array(5).fill(null).map((_, i) => (
                <Star 
                  key={i} 
                  className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-[#00A859] fill-[#00A859] transition-transform duration-200 hover:scale-110 cursor-pointer" 
                />
              ))}
            </div>
            <span className="text-2xl sm:text-3xl lg:text-4xl animate-bounce">🙏</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

