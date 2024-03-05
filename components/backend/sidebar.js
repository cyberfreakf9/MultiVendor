'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SidebarLinks } from '@/Utils/db'
import { LayoutDashboard, BookImage, LogOut } from 'lucide-react'
import { usePathname } from 'next/navigation'
const SideBar = () => {
  const pathname = usePathname()
  return (
    <div className="bg-slate-700 space-y-6 w-52 h-screen text-slate-50 py-1 fixed left-0 top-0">
      <Link className="mb-6" href="#">
        <Image
          src={'/images/logo-dark.png'}
          className="w-[80%] h-12"
          width={50}
          height={50}
          alt="site logo"
        />
      </Link>
      <div className="space-y-3 flex flex-col">
        <Link
          href="/dashboard"
          className={
            pathname === '/dashboard'
              ? 'flex space-x-1 border-l-4 border-green-300 text-lime-500'
              : 'flex space-x-1 '
          }
        >
          <LayoutDashboard className="mx-2" />
          <span>Dashboard</span>
        </Link>
        <Link href="#" className="flex space-x-1">
          <BookImage />
          <span>Catalogue</span>
        </Link>
        {SidebarLinks.map((item, i) => {
          const Icon = item.icon
          return (
            <Link
              key={i}
              href={item.href}
              // className="flex space-x-1  hover:border-l-4 border-green-300"
              className={
                item.href === pathname
                  ? 'flex space-x-1 border-l-4 border-lime-500 text-lime-500'
                  : 'flex space-x-1 '
              }
            >
              <Icon className="mx-2" />
              <span>{item.title}</span>
            </Link>
          )
        })}
        <Link href="/" className="flex space-x-1 bg-lime-600 rounded-md py-2 ">
          <LogOut className="mx-2" />
          <span>Log Out</span>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
