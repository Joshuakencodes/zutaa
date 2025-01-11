import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' })

export const metadata: Metadata = {
  title: 'Zutaa Dashboard',
  description: 'Manage your crypto and fiat transactions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className="bg-[#0A0A1B] text-white flex justify-center items-start min-h-screen font-sans">
        <main className="w-full max-w-md p-4">
          {children}
        </main>
      </body>
    </html>
  )
}

