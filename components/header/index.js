import React from 'react'

import {
  Box,
  Link,
  Stack,
} from '@chakra-ui/react'

const Header = () => {
  return (
    <Box
      borderBottom="1px solid"
      borderColor="mandala-black.300"
      h="55px"
      justifyContent="flex-end"
    >
      <Stack
        justifyContent="flex-end"
        h="100%"
        pl="2rem"
        pb="0.5rem"
      >
        <Link
          fontSize="2xl"
          href="https://delman.io"
          _hover={{
            textDecoration: 'none',
          }}
        >
          delman.io
        </Link>
      </Stack>
    </Box>
  )
}

export default Header
