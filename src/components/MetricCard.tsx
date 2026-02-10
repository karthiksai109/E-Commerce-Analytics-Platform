'use client'

import { motion } from 'framer-motion'
import { ArrowUp, ArrowDown, Minus } from 'lucide-react'
import { MetricCard as MetricCardType } from '@/types/analytics'

interface MetricCardProps extends MetricCardType {}

export default function MetricCard({ title, value, change, trend, icon }: MetricCardProps) {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <ArrowUp className="w-4 h-4 text-green-500" />
      case 'down':
        return <ArrowDown className="w-4 h-4 text-red-500" />
      default:
        return <Minus className="w-4 h-4 text-gray-500" />
    }
  }

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-500'
      case 'down':
        return 'text-red-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="metric-card"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
            {icon}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          </div>
        </div>
        
        <div className={`flex items-center gap-1 ${getTrendColor()}`}>
          {getTrendIcon()}
          <span className="text-sm font-medium">
            {Math.abs(change)}%
          </span>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${
              trend === 'up' ? 'bg-green-500' : trend === 'down' ? 'bg-red-500' : 'bg-gray-500'
            }`}
            style={{ width: `${Math.min(Math.abs(change) * 5, 100)}%` }}
          />
        </div>
      </div>
    </motion.div>
  )
}
