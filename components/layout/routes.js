// import icon
import { HiUsers } from 'react-icons/hi'
import { MdSpaceDashboard, MdPersonAddAlt1 } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'

export const ROUTES = [
  {
    name: 'Dashboard',
    href: '/',
    icon: MdSpaceDashboard,
    title: 'Sales Dashboard',
    subtitle: 'List of Sales Data',
  },
  {
    name: 'Users',
    href: '/user',
    icon: HiUsers,
    title: 'Sales User',
    subtitle: 'List of Sales Data',
  },
  {
    name: 'Registration',
    href: '/registration',
    icon: MdPersonAddAlt1,
    title: 'User Registration',
    subtitle: 'Add new User',
  },
  {
    name: 'Search',
    href: '/search',
    icon: AiOutlineSearch,
    title: 'Search User',
    subtitle: 'Search existing user',
  },
]
