import React from 'react'
import LargeCard from './LargeCard'
import SmallCard from './smallcard'
import { ShoppingCart, CheckCheck, RefreshCw, Loader2 } from 'lucide-react'
const SmallCards = () => {
  const orderStatus = [
    {
      title: 'Total Order',
      sales: 250,
      iconBg: 'bg-green-600',
      Icon: ShoppingCart,
    },
    {
      title: 'Orders Pending',
      sales: 350,
      iconBg: 'bg-blue-600',
      Icon: Loader2,
    },
    {
      title: 'Orders Processing',
      sales: 450,
      iconBg: 'bg-orange-600',
      Icon: RefreshCw,
    },
    {
      title: 'Orders Delivered',
      sales: 550,
      iconBg: 'bg-purple-600',
      Icon: CheckCheck,
    },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
      {/* Large Cards */}
      {orderStatus.map((item, i) => {
        return <SmallCard data={item} key={i} />
      })}
    </div>
  )
}

export default SmallCards
