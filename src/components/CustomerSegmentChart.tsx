'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { Users } from 'lucide-react'

const customerData = [
  { name: 'Premium', value: 35, color: '#3b82f6' },
  { name: 'Regular', value: 45, color: '#10b981' },
  { name: 'New', value: 20, color: '#f59e0b' },
]

export default function CustomerSegmentChart() {
  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Customer Segments</h3>
          <p className="text-sm text-gray-600 mt-1">Distribution by customer type</p>
        </div>
        <div className="p-2 bg-blue-100 rounded-lg">
          <Users className="w-5 h-5 text-blue-600" />
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={customerData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {customerData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      
      <div className="grid grid-cols-3 gap-4 mt-6">
        {customerData.map((segment, index) => (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: segment.color }}
              ></div>
              <span className="text-sm font-medium text-gray-900">{segment.name}</span>
            </div>
            <p className="text-lg font-bold text-gray-900">{segment.value}%</p>
          </div>
        ))}
      </div>
    </div>
  )
}
