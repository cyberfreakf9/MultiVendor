import React from 'react'
import LargeCard from './LargeCard'

const LargeCards = () => {
  const orderStatus = [
    {
      period: 'Today Sale',
      sales: 2500,
      color: 'bg-green-600',
    },
    {
      period: 'Yesterday Sale',
      sales: 3500,
      color: 'bg-blue-600',
    },
    {
      period: 'This month Sale',
      sales: 5500,
      color: 'bg-orange-600',
    },
    {
      period: 'All Time Sale',
      sales: 6500,
      color: 'bg-purple-600',
    },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
      {/* Large Cards */}
      {orderStatus.map((item, i) => {
        return <LargeCard className="bg-green-600" data={item} key={i} />
      })}
    </div>
  )
}

export default LargeCards
