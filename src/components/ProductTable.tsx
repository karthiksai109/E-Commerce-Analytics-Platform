'use client'

import { Package, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react'
import { ProductData } from '@/types/analytics'

interface ProductTableProps {
  products: ProductData[]
}

export default function ProductTable({ products }: ProductTableProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'In Stock':
        return <TrendingUp className="w-4 h-4 text-green-500" />
      case 'Low Stock':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />
      case 'Out of Stock':
        return <TrendingDown className="w-4 h-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-800'
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-800'
      case 'Out of Stock':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
          <p className="text-sm text-gray-600 mt-1">Best performing products</p>
        </div>
        <div className="p-2 bg-green-100 rounded-lg">
          <Package className="w-5 h-5 text-green-600" />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Product</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Category</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Stock</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Sold</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Revenue</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4">
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">${product.price}</p>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-600">{product.category}</span>
                </td>
                <td className="py-3 px-4">
                  <span className={`text-sm font-medium ${
                    product.stock > 50 ? 'text-green-600' : 
                    product.stock > 10 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {product.stock}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm font-medium text-gray-900">{product.sold}</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm font-medium text-gray-900">
                    ${product.revenue.toLocaleString()}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(product.status)}
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
