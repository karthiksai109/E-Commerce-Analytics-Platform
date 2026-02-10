import { DashboardStats, ProductData, CustomerData } from '@/types/analytics'

export type { DashboardStats }

const productNames = [
  'Wireless Headphones', 'Smart Watch', 'Laptop Stand', 'USB-C Hub', 
  'Mechanical Keyboard', 'Webcam HD', 'Mouse Pad XL', 'Phone Case'
]

const categories = ['Electronics', 'Accessories', 'Office', 'Mobile']

const customerNames = [
  'John Smith', 'Sarah Johnson', 'Mike Chen', 'Emily Davis', 
  'Robert Wilson', 'Lisa Anderson', 'David Brown', 'Jennifer Taylor'
]

const customerSegments: Array<'Premium' | 'Regular' | 'New'> = ['Premium', 'Regular', 'New']

const statuses: Array<'In Stock' | 'Low Stock' | 'Out of Stock'> = ['In Stock', 'Low Stock', 'Out of Stock']

function generateRandomProducts(count: number): ProductData[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `product-${i + 1}`,
    name: productNames[i % productNames.length],
    category: categories[Math.floor(Math.random() * categories.length)],
    stock: Math.floor(Math.random() * 100) + 1,
    price: Math.floor(Math.random() * 500) + 50,
    sold: Math.floor(Math.random() * 200) + 10,
    revenue: Math.floor(Math.random() * 50000) + 5000,
    status: statuses[Math.floor(Math.random() * statuses.length)]
  }))
}

function generateRandomCustomers(count: number): CustomerData[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `customer-${i + 1}`,
    name: customerNames[i % customerNames.length],
    email: `customer${i + 1}@example.com`,
    totalSpent: Math.floor(Math.random() * 5000) + 100,
    orders: Math.floor(Math.random() * 20) + 1,
    lastPurchase: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
    segment: customerSegments[Math.floor(Math.random() * customerSegments.length)]
  }))
}

export function generateMockData(): DashboardStats {
  return {
    totalRevenue: Math.floor(Math.random() * 50000) + 100000,
    totalOrders: Math.floor(Math.random() * 500) + 1000,
    totalCustomers: Math.floor(Math.random() * 1000) + 2000,
    conversionRate: Math.floor(Math.random() * 5) + 2,
    avgOrderValue: Math.floor(Math.random() * 100) + 50,
    topProducts: generateRandomProducts(5),
    recentCustomers: generateRandomCustomers(4)
  }
}
