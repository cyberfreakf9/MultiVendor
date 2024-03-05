import React from 'react'
import { ShoppingCart } from 'lucide-react'
const SmallCard = ({ data }) => {
  const { title, iconBg, sales, Icon } = data
  return (
    <div className="rounded-lg shadow-lg bg-slate-700 p-4">
      <div className="flex space-x-4">
        <div
          className={`${iconBg} w-12 h-12 flex rounded-full p-2 items-center justify-center`}
        >
          <Icon />
        </div>
        <div className="">
          <p>{title}</p>
          <h3 className="text-2xl font-bold">{sales}</h3>
        </div>
      </div>
    </div>
  )
}

export default SmallCard
