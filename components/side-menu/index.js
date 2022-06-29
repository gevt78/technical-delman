import React, {
  useEffect,
  useState,
} from 'react'
import { useRouter } from 'next/router'
import { observer } from 'mobx-react'

import { Stack } from '@chakra-ui/layout'
import { HiMenuAlt2 } from 'react-icons/hi'

import NavItem from './item'

const SideMenu = ({ routes }) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    const item = window.localStorage.getItem('SIDEBAR_STATE')
    const state = Boolean(item)
    setIsOpen(state)

    if (state) {
      window.localStorage.setItem('SIDEBAR_STATE', !isOpen)
      const sidebar = window.localStorage.getItem('SIDEBAR_STATE')

      if (sidebar === 'false') {
        setIsOpen(false)
      } else if (sidebar === 'true') {
        setIsOpen(true)
      }
    } else {
      window.localStorage.setItem('SIDEBAR_STATE', false)
    }
  }

  // fetch initial dashboard condition from localstorage
  useEffect(() => {
    const item = window.localStorage.getItem('SIDEBAR_STATE')
    if (item) {
      if (item === 'false') {
        setIsOpen(false)
      } else if (item === 'true') {
        setIsOpen(true)
      }
    } else {
      window.localStorage.setItem('SIDEBAR_STATE', false)
    }
  }, [])

  return (
    <Stack
      layerStyle="card"
      w={isOpen ? '13.5em' : '4.5em'}
      transition="width .4s ease-in-out"
      shadow="md"
      fontSize="sm"
      display={['none', 'initial']}
      overflowX={isOpen ? 'clip' : 'initial'}
      whiteSpace="nowrap"
      bgColor="mandala-black.100"
      borderRight="1px solid"
      borderColor="mandala-black.300"
    >
      <NavItem
        item={{
          name: 'Menu',
          icon: HiMenuAlt2,
          href: '',
        }}
        onClick={handleClick}
        expanded={isOpen}
        isMenu
      />
      {routes.map(item => (
        <div
          key={item.icon}
          style={{ marginTop: 0 }}
        >
          <NavItem
            active={router.pathname === item.href}
            item={item}
            expanded={isOpen}
          />
        </div>
      ))}
    </Stack>
  )
}

export default observer(SideMenu)
