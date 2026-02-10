export interface SalesData {
  date: string;
  sales: number;
  orders: number;
  revenue: number;
}

export interface CustomerData {
  id: string;
  name: string;
  email: string;
  totalSpent: number;
  orders: number;
  lastPurchase: string;
  segment: 'Premium' | 'Regular' | 'New';
}

export interface ProductData {
  id: string;
  name: string;
  category: string;
  stock: number;
  price: number;
  sold: number;
  revenue: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
}

export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  totalCustomers: number;
  conversionRate: number;
  avgOrderValue: number;
  topProducts: ProductData[];
  recentCustomers: CustomerData[];
}
