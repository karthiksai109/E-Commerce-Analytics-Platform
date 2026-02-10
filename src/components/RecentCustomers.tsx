'use client'

import { Users, Mail, Calendar, DollarSign } from 'lucide-react'
import { CustomerData } from '@/types/analytics'
import { formatDistanceToNow } from 'date-fns'

interface RecentCustomersProps {
  customers: CustomerData[]
}

export default function RecentCustomers({ customers }: RecentCustomersProps) {
  const getSegmentColor = (segment: string) => {
    switch (segment) {
      case 'Premium':
        return 'bg-purple-100 text-purple-800'
      case 'Regular':
        return 'bg-blue-100 text-blue-800'
      case 'New':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Recent Customers</h3>
          <p className="text-sm text-gray-600 mt-1">Latest customer activity</p>
        </div>
        <div className="p-2 bg-purple-100 rounded-lg">
          <Users className="w-5 h-5 text-purple-600" />
        </div>
      </div>
      
      <div className="space-y-4">
        {customers.map((customer, index) => (
          <div key={customer.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                {customer.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-gray-900">{customer.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Mail className="w-3 h-3 text-gray-400" />
                  <span className="text-sm text-gray-600">{customer.email}</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign className="w-3 h-3 text-green-600" />
                <span className="text-sm font-medium text-gray-900">
                  ${customer.totalSpent.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium px-2 py-1 rounded-full ${getSegmentColor(customer.segment)}">
                  {customer.segment}
                </span>
                <span className="text-xs text-gray-600">
                  {customer.orders} orders
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Calendar className="w-3 h-3" />
                <span>{formatDistanceToNow(new Date(customer.lastPurchase), { addSuffix: true })}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
