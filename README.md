# E-Commerce Analytics Platform

A sophisticated, real-time analytics dashboard built with **Next.js 14**, **TypeScript**, and **Recharts**. Designed to help e-commerce businesses track sales performance, customer behavior, and inventory management with stunning visualizations and a professional interface.

## ✨ Features

### 📊 **Analytics Dashboard**
- **Real-time Metrics** - Live tracking of revenue, orders, customers, and conversion rates
- **Interactive Charts** - Beautiful sales trends and customer segment visualizations
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Glass Morphism UI** - Modern, professional design with smooth animations

### 📈 **Sales Analytics**
- Monthly sales performance tracking
- Revenue vs Sales comparison charts
- Trend indicators with percentage changes
- Real-time data updates every 30 seconds

### 👥 **Customer Insights**
- Customer segmentation analysis (Premium, Regular, New)
- Recent customer activity tracking
- Purchase behavior analytics
- Customer lifetime value metrics

### 📦 **Inventory Management**
- Top performing products table
- Stock level monitoring with status indicators
- Revenue tracking per product
- Low stock alerts and management

### 🎨 **Professional UI/UX**
- Glass morphism design with backdrop blur effects
- Smooth animations and micro-interactions
- Color-coded metrics and status indicators
- Mobile-responsive sidebar navigation
- Loading states and error handling

## 🛠 Tech Stack

| Layer       | Technology                        | Version |
|-------------|-----------------------------------|---------|
| Framework   | Next.js                           | 14.x    |
| Language    | TypeScript                        | 5.x     |
| Styling     | Tailwind CSS                      | 3.x     |
| Charts      | Recharts                          | 2.x     |
| Animations  | Framer Motion                     | 12.x    |
| Icons       | Lucide React                      | 0.x     |
| Date Utils  | date-fns                          | 4.x     |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/karthiksai109/E-Commerce-Analytics-Platform.git
cd E-Commerce-Analytics-Platform

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
E-Commerce-Analytics-Platform/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and glass morphism
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main dashboard page
│   ├── components/
│   │   ├── MetricCard.tsx       # KPI metric cards
│   │   ├── SalesChart.tsx       # Sales performance chart
│   │   ├── CustomerSegmentChart.tsx # Customer segmentation pie chart
│   │   ├── ProductTable.tsx     # Products inventory table
│   │   └── RecentCustomers.tsx  # Recent customers list
│   ├── lib/
│   │   └── mockData.ts          # Mock data generator
│   ├── types/
│   │   └── analytics.ts         # TypeScript type definitions
│   └── hooks/                   # Custom React hooks
├── public/                      # Static assets
├── tailwind.config.js           # Tailwind configuration
├── next.config.js               # Next.js configuration
└── package.json                 # Dependencies and scripts
```

## 🎯 Key Components

### MetricCard
Displays KPI metrics with trend indicators and progress bars:
- Revenue, Orders, Customers, Conversion Rate tracking
- Animated trend arrows (up/down/neutral)
- Hover effects and micro-interactions

### SalesChart
Interactive area chart showing:
- Monthly sales trends
- Revenue comparison
- Gradient fills and smooth animations
- Responsive tooltips

### CustomerSegmentChart
Pie chart visualization for:
- Customer distribution (Premium/Regular/New)
- Interactive labels and legends
- Color-coded segments

### ProductTable
Advanced data table featuring:
- Product performance metrics
- Stock status indicators
- Revenue tracking
- Sortable columns

## 🔧 Configuration

### Tailwind CSS
Custom theme with:
- Extended color palette (primary, secondary)
- Custom animations (fade-in, slide-up)
- Glass morphism utilities

### Next.js
Optimized configuration:
- App Router enabled
- Image optimization
- TypeScript support

## 📊 Mock Data

The application uses realistic mock data that:
- Updates every 30 seconds to simulate real-time data
- Includes varied customer segments and product categories
- Generates random but plausible metrics

## 🎨 Design System

### Colors
- **Primary Blue**: #3b82f6 - #1e40af gradient
- **Success Green**: #10b981
- **Warning Yellow**: #f59e0b
- **Danger Red**: #ef4444

### Animations
- **Fade In**: Smooth opacity transitions
- **Slide Up**: Vertical entrance animations
- **Scale**: Hover effects on interactive elements
- **Pulse**: Live indicator animations

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
# Build for production
npm run build

# The .next folder contains the optimized build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Recharts](https://recharts.org/) - Chart library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library

## 📞 Contact

- **Portfolio**: [karthikramadugu.vercel.app](https://karthikramadugu.vercel.app/)
- **Email**: karthiksaidham2001@gmail.com
- **LinkedIn**: [linkedin.com/in/ramadugukarthik](https://www.linkedin.com/in/ramadugukarthik/)
- **GitHub**: [github.com/karthiksai109](https://github.com/karthiksai109)

---

⭐ **Star this repository if it helped you!**
