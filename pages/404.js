/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */

import {
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'

import Link from 'next/link'

const MyCustom404Page = () => {
  return (
    <Stack
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        fontSize="4xl"
      >
        delman.io
      </Text>
      <Stack
        bgColor="mandala-black.100"
        border="1px solid"
        borderColor="mandala-black.300"
        p={6}
      >
        <Heading
          as="h3"
          size="md"
        >
          Oops, We couldn't find that page
        </Heading>
        <Text>It seems the URL you’re looking for doesn’t exist.</Text>
        <Link href="/">Back to Home</Link>
      </Stack>
    </Stack>
  )
}

export default MyCustom404Page
