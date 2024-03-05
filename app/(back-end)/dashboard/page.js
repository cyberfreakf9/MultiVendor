import CustomDataTable from '@/components/backend/CustomDataTable'
import DashboardCharts from '@/components/backend/DashboardCharts'
import Heading from '@/components/backend/Heading'
import LargeCards from '@/components/backend/LargeCards'
import SmallCards from '@/components/backend/smallcards'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <Heading title="Dashboard OverView" />
      {/* Large Card */}
      <LargeCards />
      {/* small Card  */}
      <SmallCards />
      {/* Chart  */}
      <DashboardCharts />
      {/* Recent Order Table  */}
      <CustomDataTable />
    </div>
  )
}

export default Dashboard
