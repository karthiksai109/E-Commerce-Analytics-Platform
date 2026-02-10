'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ShoppingCart, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Package, 
  Activity,
  BarChart3,
  PieChart,
  ArrowUp,
  ArrowDown,
  Menu,
  X
} from 'lucide-react'
import MetricCard from '@/components/MetricCard'
import SalesChart from '@/components/SalesChart'
import CustomerSegmentChart from '@/components/CustomerSegmentChart'
import ProductTable from '@/components/ProductTable'
import RecentCustomers from '@/components/RecentCustomers'
import { generateMockData, DashboardStats } from '@/lib/mockData'

export default function Dashboard() {
  const [data, setData] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setData(generateMockData())
      setLoading(false)
    }
    
    loadData()
    
    // Simulate real-time updates
    const interval = setInterval(() => {
      setData(generateMockData())
    }, 30000)
    
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading analytics dashboard...</p>
        </div>
      </div>
    )
  }

  if (!data) return null

  const metrics = [
    {
      title: 'Total Revenue',
      value: `$${data.totalRevenue.toLocaleString()}`,
      change: 12.5,
      trend: 'up' as const,
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: 'Total Orders',
      value: data.totalOrders.toLocaleString(),
      change: 8.2,
      trend: 'up' as const,
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: 'Total Customers',
      value: data.totalCustomers.toLocaleString(),
      change: -2.4,
      trend: 'down' as const,
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Conversion Rate',
      value: `${data.conversionRate}%`,
      change: 5.7,
      trend: 'up' as const,
      icon: <TrendingUp className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="glass-morphism border-b border-white/20">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <h1 className="text-2xl font-bold text-gradient">E-Commerce Analytics</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Live</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-50 w-64 glass-morphism transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <nav className="p-4 space-y-2 mt-16 lg:mt-0">
            <a href="#" className="sidebar-item active">
              <BarChart3 className="w-5 h-5" />
              Dashboard
            </a>
            <a href="#" className="sidebar-item">
              <ShoppingCart className="w-5 h-5" />
              Sales
            </a>
            <a href="#" className="sidebar-item">
              <Users className="w-5 h-5" />
              Customers
            </a>
            <a href="#" className="sidebar-item">
              <Package className="w-5 h-5" />
              Inventory
            </a>
            <a href="#" className="sidebar-item">
              <PieChart className="w-5 h-5" />
              Reports
            </a>
            <a href="#" className="sidebar-item">
              <Activity className="w-5 h-5" />
              Real-time
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Metrics Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </motion.div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <SalesChart />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CustomerSegmentChart />
              </motion.div>
            </div>

            {/* Tables Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <ProductTable products={data.topProducts} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <RecentCustomers customers={data.recentCustomers} />
              </motion.div>
            </div>
          </div>
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
