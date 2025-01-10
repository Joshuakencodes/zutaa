import { BalanceCard } from '@/components/balance-card'
import { AddressCard } from '@/components/address-card'
import { QuickActions } from '@/components/quick-actions'
import { RecentTransactions } from '@/components/recent-transactions'
import Image from 'next/image'

export default function DashboardPage() {
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
        <div className="text-gray-400 text-sm">user@example.com</div>
      </div>

      <BalanceCard
        balances={[
          {
            title: "Naira Balance",
            amount: 1236949.91,
            currency: "₦"
          },
          {
            title: "USD Balance",
            amount: 2500.00,
            currency: "$"
          },
          {
            title: "Crypto Balance (USD)",
            amount: 0,
            currency: "$",
            comingSoon: true
          }
        ]}
      />

      <AddressCard
        address={{
          street: "123 Main Street",
          city: "Lagos",
          state: "Lagos State",
          postalCode: "100001",
          country: "Nigeria"
        }}
      />

      <QuickActions />
      <RecentTransactions />
    </div>
  )
}

