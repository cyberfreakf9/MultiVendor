import React from 'react'
import WeeklySalesChart from './WeeklySalesChart'
import BestSellingProductsChart from './BestSellingProductsChart'

const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <WeeklySalesChart />
      <BestSellingProductsChart />
    </div>
  )
}

export default DashboardCharts
