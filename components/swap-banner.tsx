import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

export function SwapBanner() {
  return (
    <Card className="bg-gray-200 border-0">
      <CardContent className="p-6 lg:p-8 flex items-center justify-between">
        <div className="space-y-2 lg:space-y-4">
          <h3 className="text-xl lg:text-2xl font-bold text-black">SWAP E-WALLET</h3>
          <h4 className="text-lg lg:text-xl font-bold text-black">FUNDS TO NAIRA</h4>
          <div className="flex gap-2 lg:gap-3">
            {['paypal', 'transferwise', 'skrill', 'perfect-money'].map((provider) => (
              <div
                key={provider}
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white shadow flex items-center justify-center"
              >
                <Image
                  src={`/placeholder.svg?height=24&width=24`}
                  alt={provider}
                  width={24}
                  height={24}
                  className="lg:scale-125"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 lg:gap-6">
          <Image
            src="/placeholder.svg?height=120&width=120"
            alt="Swap Promo"
            width={120}
            height={120}
            className="lg:w-[160px] lg:h-[160px]"
          />
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="WhatsApp"
            width={32}
            height={32}
            className="lg:w-10 lg:h-10"
          />
        </div>
      </CardContent>
    </Card>
  )
}

