'use client'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)
const BestSellingProductsChart = () => {
  const data = {
    labels: ['Cabbage', 'Watermelon', 'Broccoli', 'Maze'],
    datasets: [
      {
        label: '# of Votes',
        data: [50, 10, 20, 20],
        backgroundColor: [
          'rgba(0, 178, 203, 0.6)',
          'rgba(255,0 , 221, 0.6)',
          'rgba(2, 139, 71, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(0, 178, 203, 1)',
          'rgba(255,0 , 221, 1)',
          'rgba(2, 139, 71, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Best Selling Charts</h2>
      {/* Charts  */}
      <div className="p-8">
        <Pie data={data} />
      </div>
    </div>
  )
}

export default BestSellingProductsChart
