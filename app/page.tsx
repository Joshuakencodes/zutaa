'use client'

import { useState, useEffect } from 'react'
import { GuestDashboard } from '@/components/guest-dashboard'
import { BalanceCard } from '@/components/balance-card'
import { AddressCard } from '@/components/address-card'
import { QuickActions } from '@/components/quick-actions'
import { RecentTransactions } from '@/components/recent-transactions'
import { LoginSignupPopup } from '@/components/login-signup-popup'
import { getUser } from '@/lib/kv'
import Image from 'next/image'

export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginSignup, setShowLoginSignup] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail')
    if (storedEmail) {
      setUserEmail(storedEmail)
      setIsLoggedIn(true)
      fetchUserData(storedEmail)
    }
  }, [])

  const fetchUserData = async (email: string) => {
    const user = await getUser(email)
    if (user) {
      setUserData(user)
    }
  }

  const handleLogin = (email: string) => {
    setUserEmail(email)
    setIsLoggedIn(true)
    localStorage.setItem('userEmail', email)
    fetchUserData(email)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserEmail('')
    setUserData(null)
    localStorage.removeItem('userEmail')
  }

  if (!isLoggedIn) {
    return (
      <GuestDashboard onLoginClick={() => setShowLoginSignup(true)} />
    )
  }

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
        <div className="text-gray-400 text-sm">{userEmail}</div>
      </div>

      <BalanceCard
        balances={[
          {
            title: "Naira Balance",
            amount: userData?.nairaBalance || 0,
            currency: "₦"
          },
          {
            title: "USD Balance",
            amount: userData?.usdBalance || 0,
            currency: "$"
          },
          {
            title: "Crypto Balance (USD)",
            amount: userData?.cryptoBalance || 0,
            currency: "$",
            comingSoon: !userData?.cryptoBalance
          }
        ]}
      />

      <AddressCard
        address={userData?.address || {
          street: "Not set",
          city: "Not set",
          state: "Not set",
          postalCode: "Not set",
          country: "Not set"
        }}
      />

      <QuickActions isGuest={false} onLogout={handleLogout} />
      <RecentTransactions transactions={userData?.recentTransactions || []} />

      {showLoginSignup && (
        <LoginSignupPopup 
          onClose={() => setShowLoginSignup(false)} 
          onLogin={handleLogin}
        />
      )}
    </div>
  )
}

