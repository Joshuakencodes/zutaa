import { Card, CardContent } from '@/components/ui/card'
import { Pencil } from 'lucide-react'

interface AddressCardProps {
  address: {
    street: string
    city: string
    state: string
    postalCode: string
    country: string
  }
}

export function AddressCard({ address }: AddressCardProps) {
  return (
    <Card className="bg-[#1A1E35] border-none rounded-lg">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-gray-400 text-sm">Default Address</h2>
          <button className="text-gray-400 hover:text-white">
            <Pencil className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-1 text-sm">
          <p className="text-white">{address.street}</p>
          <p className="text-white">{address.city}, {address.state} {address.postalCode}</p>
          <p className="text-white">{address.country}</p>
        </div>
      </CardContent>
    </Card>
  )
}

