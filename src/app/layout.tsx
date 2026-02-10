import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Commerce Analytics Platform',
  description: 'Advanced analytics dashboard for tracking sales, customer behavior, and inventory management with real-time data visualization.',
  keywords: 'E-Commerce, Analytics, Dashboard, Sales Tracking, Customer Behavior, Inventory Management',
  author: 'Karthik Ramadugu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
