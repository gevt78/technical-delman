import React from 'react'
import { observer } from 'mobx-react'

import {
  Box,
  Stack,
} from '@chakra-ui/react'

import Navbar from '../side-menu'
import Header from '../header'
import PageHeader from '../page-header'
import { ROUTES } from './routes'

const Layout = ({ children }) => {
  return (
    <Stack
      spacing={0}
      w="100vw"
      h="100vh"
    >
      <Header />
      <Stack
        direction="row"
        flex={1}
        spacing={0}
      >
        <Navbar
          routes={ROUTES}
        />
        <Box
          flex="1 1 auto"
        >
          <PageHeader data={ROUTES} />
          <Stack
            pl="1rem"
            pt="1rem"
          >
            {children}
          </Stack>
        </Box>
      </Stack>
    </Stack>
  )
}

export default observer(Layout)
