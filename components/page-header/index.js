import React from 'react'
import { useRouter } from 'next/router'

import {
  Stack,
  Text,
} from '@chakra-ui/react'

const PageHeader = ({ data }) => {
  const router = useRouter()

  const item = data.find(path => router.pathname === path.href)

  return (
    <Stack
      w="100%"
      borderBottom="1px solid"
      borderColor="mandala-black.300"
      pl="1rem"
      pt="1rem"
      spacing={0}
    >
      <Text
        fontSize="3xl"
        fontWeight={700}
        lineHeight={1.2}
      >
        {item.title}
      </Text>
      <Text
        color="blue.700"
        fontSize="sm"
        fontWeight={700}
      >
        {item.subtitle}
      </Text>
    </Stack>
  )
}

export default PageHeader
