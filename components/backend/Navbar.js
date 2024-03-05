'use client'
import {
  Sun,
  Menu,
  Bell,
  User,
  LayoutDashboard,
  FilePenLine,
  LogOut,
  X,
} from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { initFlowbite } from 'flowbite'
import { Dropdown } from 'flowbite-react'
const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50 h-16 px-8 py-4 fixed top-0 w-[calc(100%_-_200px)] ml-[208px]">
      <Menu className="text-green-700" />

      <div className="flex space-x-3">
        <button>
          <Sun className="text-green-700" />
        </button>

        <button
          type="button"
          data-dropdown-toggle="dropdown-bell"
          className="relative inline-flex items-center p-1 text-sm font-medium text-center text-white bg-transparent rounded-lg  focus:ring-0 focus:outline-none "
        >
          <Bell className="text-green-700 focus:outline-none" />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-red-500 rounded-full -top-2 end-4 dark:border-gray-900">
            20
          </div>
        </button>
        <div
          id="dropdown-bell"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-80 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 p-2 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <div className="flex gap-1">
              <div>
                <Image
                  data-dropdown-toggle="dropdown"
                  src={'/images/user.jpg'}
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <p>Seet Cort Stock Out</p>
                <div className="flex">
                  <p className="text-sm  whitespace-nowrap mr-1 bg-red-500 p-.3 rounded-md px-1 text-slate-50">
                    Stock Out
                  </p>
                  <p className="text-sm whitespace-nowrap">
                    Feb 20 2024 12:00 AM
                  </p>
                </div>
              </div>
              <X className="cursor-pointer text-red-600" />
            </div>
            <div className="flex gap-1">
              <div>
                <Image
                  data-dropdown-toggle="dropdown"
                  src={'/images/user.jpg'}
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <p>Seet Cort Stock Out</p>
                <div className="flex">
                  <p className="text-sm  whitespace-nowrap mr-1 bg-red-500 p-.3 rounded-md px-1 text-slate-50">
                    Stock Out
                  </p>
                  <p className="text-sm whitespace-nowrap">
                    Feb 20 2024 12:00 AM
                  </p>
                </div>
              </div>
              <X className="cursor-pointer text-red-600" />
            </div>
          </ul>
        </div>
        <button>
          <Image
            data-dropdown-toggle="dropdown"
            src={'/images/user.jpg'}
            alt="User Profile"
            width={200}
            height={200}
            className="w-8 h-8 rounded-full"
          />
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <h2 className="text-center">My Account</h2>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <LayoutDashboard className="inline-block mr-1" />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <FilePenLine className="inline-block mr-1" />
                Edit Profile
              </a>
            </li>

            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <LogOut className="inline-block mr-0" />
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
