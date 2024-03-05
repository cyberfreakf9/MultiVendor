import { Layers } from 'lucide-react'
import React from 'react'

const LargeCard = ({ data }) => {
  return (
    <div
      className={`rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-2 ${data.color}`}
    >
      <Layers />
      <h4>{data.period}</h4>
      <h2 className="lg:text-3xl text-2xl">Rs.{data.sales}</h2>
    </div>
  )
}

export default LargeCard
