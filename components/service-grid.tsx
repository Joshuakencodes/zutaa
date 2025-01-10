import Link from 'next/link'
import { DollarSign, Bitcoin, Gift, Smartphone, Wifi, ScrollText, Users, TrendingUp } from 'lucide-react'

const services = [
  { icon: Bitcoin, label: 'Crypto', href: '/crypto', comingSoon: false },
  { icon: DollarSign, label: 'Fiat', href: '/fiat', comingSoon: true },
  { icon: Gift, label: 'Gift cards', href: '/gift-cards', comingSoon: true },
  { icon: Smartphone, label: 'Airtime', href: '/airtime-data', comingSoon: true },
  { icon: Wifi, label: 'Data', href: '/airtime-data', comingSoon: true },
  { icon: ScrollText, label: 'Bills', href: '/bills', comingSoon: true },
  { icon: Users, label: 'Referral', href: '/referral', comingSoon: true },
  { icon: TrendingUp, label: 'Markets', href: '/markets', comingSoon: true },
]

export function ServiceGrid() {
  return (
    <div className="mb-6 sm:mb-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
        {services.map((service) => (
          <Link
            key={service.label}
            href={service.href}
            className="flex flex-col items-center p-3 sm:p-4 lg:p-6 rounded-lg hover:bg-gray-800/50 cursor-pointer relative group transition-all duration-200 hover:scale-[1.02] h-full"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-white/10 flex items-center justify-center mb-2 sm:mb-3 transition-transform duration-200 group-hover:scale-110">
              <service.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-center">{service.label}</span>
            {service.comingSoon && (
              <span className="absolute top-1 right-1 text-[10px] sm:text-xs bg-[#00A859] px-1 sm:px-2 py-0.5 rounded-full">
                Coming Soon
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

