'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { TrendingUp } from 'lucide-react'

const salesData = [
  { date: 'Jan', sales: 4000, orders: 240, revenue: 4800 },
  { date: 'Feb', sales: 3000, orders: 180, revenue: 3600 },
  { date: 'Mar', sales: 5000, orders: 300, revenue: 6000 },
  { date: 'Apr', sales: 4500, orders: 270, revenue: 5400 },
  { date: 'May', sales: 6000, orders: 360, revenue: 7200 },
  { date: 'Jun', sales: 5500, orders: 330, revenue: 6600 },
  { date: 'Jul', sales: 7000, orders: 420, revenue: 8400 },
]

export default function SalesChart() {
  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Sales Overview</h3>
          <p className="text-sm text-gray-600 mt-1">Monthly sales performance</p>
        </div>
        <div className="flex items-center gap-2 text-green-600">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">+23.5%</span>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={salesData}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="date" 
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6b7280"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }}
          />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#3b82f6"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorSales)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#10b981"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
      
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Sales</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Revenue</span>
        </div>
      </div>
    </div>
  )
}
