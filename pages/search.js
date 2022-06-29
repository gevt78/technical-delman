import React, {
  useMemo,
  useState,
  useEffect,
} from 'react'
import { observer } from 'mobx-react'

// import element
import {
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Stack,
  Text,
  Box,
} from '@chakra-ui/react'

// import icon
import { BsSearch } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'

import { useStores } from '../hooks'
import InfoSection from '../components/info-section'

const Search = () => {
  const {
    userStore,
    infoSectionStore,
  } = useStores()

  const [email, setEmail] = useState('')
  const [list, setList] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const res = await userStore.fetchUser({})
      setList(res.data)
    }
    fetch()
  }, [])

  const search = useMemo(() => {
    if (list.length) return list.find(item => item.email === email)
    return null
  }, [email])

  return (
    <Stack
      w="50%"
      spacing={12}
      mt="0.5em"
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
        >
          <BsSearch
            color="gray.300"
          />
        </InputLeftElement>
        <Input
          id="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
        {email && (
          <InputRightElement>
            <Button
              h="1.75rem"
              size="sm"
              _hover={{ color: 'red' }}
              bgColor="transparent"
              color="#848D98"
              onClick={() => { setEmail('') }}
            >
              <AiFillCloseCircle />
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      <Box
        mt="1em"
        minHeight="15em"
        alignItems="center"
        bgColor={search?.name ? 'transparent' : 'mandala-black.100'}
        borderWidth={search?.name && '1px'}
        display="flex"
        flexDirection="column"
      >
        <Stack
          h="15em"
          w="100%"
        >
          {search?.name ? (
            <>
              <Stack
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                h="100%"
              >
                <Heading
                  as="h2"
                  size="lg"
                >
                  {search.name}
                </Heading>
                <Text>{search.email}</Text>
              </Stack>
              <Stack
                style={{
                  marginInline: '25%',
                  marginTop: '0.5em',
                  height: '1px',
                  borderTop: '1px solid #D0D6DC',
                }}
              />
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt="1em"
                w="100%"
              >
                <Button
                  onClick={() => {
                    infoSectionStore.select(search)
                  }}
                  mb="1em"
                  colorScheme="blue"
                >
                  View User Profile
                </Button>
              </Box>

            </>
          ) : (
            <Stack
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              h="100%"
            >
              <Heading
                as="h2"
                size="lg"
              >
                No result was found
              </Heading>
              <Text>Please try again with different email</Text>
            </Stack>
          )}
        </Stack>
      </Box>
      {!!infoSectionStore.selected && (
        <InfoSection
          title="User Details"
          onClose={() => { infoSectionStore.reset() }}
          data={search}
        />
      )}
    </Stack>
  )
}

export default observer(Search)
