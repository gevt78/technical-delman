import React, {
  useMemo,
  useState,
} from 'react'

import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react'
import { IoWarningOutline } from 'react-icons/io5'

import { useStores } from '../hooks'
import { validEmail } from '../utils/helper'

const Registration = () => {
  const { userStore } = useStores()
  const toast = useToast()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const emailError = useMemo(() => {
    if (email === '') {
      return 'Email is required.'
    } if (!validEmail(email)) {
      return 'Email is not valid.'
    } return null
  }, [email])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await userStore.saveUser({ name, email })
    } catch (error) {
      // do nothing
    }
  }

  return (
    <Stack
      w="50%"
    >
      <form
        onSubmit={handleSubmit}
      >
        <FormControl isInvalid={name === ''}>
          <FormLabel htmlFor="name">
            Name
          </FormLabel>
          <Input
            id="name"
            type="name"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            style={{ width: '50%' }}
          />
          {name === '' && (
            <FormErrorMessage>
              Please provide name.
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          isInvalid={email === '' || !validEmail(email)}
        >
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            style={{ width: '50%' }}
          />
          {emailError && (
            <FormErrorMessage>
              {emailError}
            </FormErrorMessage>
          )}
        </FormControl>
        <Stack
          alignItems="flex-end"
          justifyContent="flex-end"
          w="50%"
        >
          <Button
            variant="solid"
            type="submit"
            w="150px"
            disabled={name === '' || emailError}
            onClick={() => toast({
              duration: 4000,
              isClosable: true,
              position: 'top-center',
              variant: userStore.error ? 'error' : 'success',
              status: userStore.error ? 'error' : 'success',
              title: userStore.error ? 'Email already exist!' : 'User created',
              icon: (<IoWarningOutline size="2xl" />),
              containerStyle: { backgroundColor: '#fff' },
              colorScheme: '#fff',
            })}
          >
            Submit User
          </Button>
        </Stack>
      </form>
    </Stack>
  )
}

export default Registration
