import Navbar from '@/components/backend/Navbar'
import SideBar from '@/components/backend/sidebar'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="flex ">
      <SideBar />
      <div className="w-full">
        {/* Header */}
        <Navbar />
        {/* Main */}
        <main className=" ml-52 p-8 bg-slate-900 text-slate-50 min-h-screen mt-16">
          {children}
        </main>
      </div>
    </div>
  )
}
export default Layout
