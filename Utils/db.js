import {
  LayoutDashboard,
  BookImage,
  Store,
  CircleDollarSign,
  Tractor,
  Shuffle,
  Printer,
  Settings,
  ShoppingBag,
} from 'lucide-react'
export const SidebarLinks = [
  {
    title: 'Customers',
    icon: Store,
    href: '/dashboard/customers',
  },
  {
    title: 'Markets',
    icon: CircleDollarSign,
    href: '/dashboard/markets',
  },
  {
    title: 'Farmers',
    icon: Tractor,
    href: '/dashboard/farmers',
  },
  {
    title: 'Orders',
    icon: Shuffle,
    href: '/dashboard/orders',
  },
  {
    title: 'Staff',
    icon: Printer,
    href: '/dashboard/staff',
  },
  {
    title: 'Setting',
    icon: Settings,
    href: '/dashboard/setting',
  },
  {
    title: 'Online Store',
    icon: ShoppingBag,
    href: '/dashboard/onlinestore',
  },
]
