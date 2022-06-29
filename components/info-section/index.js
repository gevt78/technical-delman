import React, { useCallback, useState } from 'react'
import { observer } from 'mobx-react'
import { useRouter } from 'next/router'

import { IconButton } from '@chakra-ui/button'
import { CloseIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react'

import { useApiRequest, useStores } from '../../hooks'
import * as srv from '../../services'

import DeleteDialog from '../modal'

const Content = ({ data }) => {
  return (
    <Box mt="1em">
      {data && data.map((item) => (
        <Stack direction="row" key={item.id}>
          <Text w="40%">{item.title}</Text>
          <Text w="60%">
            :
            {item.value}
          </Text>
        </Stack>
      ))}
    </Box>
  )
}

const InfoSection = ({ onClose, title, data }) => {
  const { infoSectionStore } = useStores()
  const [openDialog, setOpenDialog] = useState(false)
  const router = useRouter()
  const toast = useToast()

  const {
    request: deleteUser,
  } = useApiRequest(srv.deleteUser, { blocking: true })

  const onDelete = useCallback(async () => {
    if (
      !infoSectionStore.selected
      || !infoSectionStore.selected.id
    ) return

    const response = await deleteUser({
      id: infoSectionStore.selected.id,
      name: infoSectionStore.selected.name,
      email: infoSectionStore.selected.email,
    })

    toast({
      duration: 4000,
      isClosable: true,
      position: 'top-right',
      variant: !response ? 'error' : 'success',
      status: !response ? 'error' : 'success',
      title: !response ? 'Error!' : 'User deleted',
      containerStyle: { backgroundColor: '#fff' },
      colorScheme: '#fff',
    })
    if (response) infoSectionStore.reset()

    if (!response) return

    setOpenDialog(false)
    router.push('/user')
  }, [infoSectionStore.selected])

  const close = useCallback(() => {
    infoSectionStore.reset()
    if (onClose) onClose()
  }, [])

  return (
    <Stack
      pos="fixed"
      top="-55px"
      bottom={0}
      right={0}
      left="initial"
      zIndex="1110"
      w="33.3%"
      bg="mandala-black.100"
      transition="transform 0.4s"
      willChange="transform"
      boxShadow="-4px 40px 8px 2px rgba(50, 68, 82, 0.2)"
      p="2em"
      transform={!!infoSectionStore.selected && 'translate3d(0, 0, 0)'}
    >
      <Stack
        pb="1em"
        justifyContent="space-between"
        direction="row"
      >
        <div>
          <Text
            fontSize="2xl"
            fontWeight={600}
          >
            {title}
          </Text>
          <Text fontSize="sm">
            {`This is inquiry about user with email: ${data.email}.`}
          </Text>
        </div>
        <IconButton
          variant="ghost"
          color="mandala-black.400"
          fontSize="0.8rem"
          _hover={{ bgColor: 'none' }}
          onClick={close}
          icon={<CloseIcon />}
        />
      </Stack>
      <Box
        h="80%"
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="mandala-black.300"
        overflow="scroll"
      >
        <Content
          data={[
            {
              title: 'Id',
              value: data.id,
            },
            {
              title: 'Name',
              value: data.name,
            },
            {
              title: 'Email',
              value: data.email,
            },
            {
              title: 'Country Name',
              value: data.country_name,
            },
            {
              title: 'Bitcoin Address',
              value: data.bitcoin_address,
            },
            {
              title: 'Avatar',
              value: data.avatar,
            },
            {
              title: 'Login IP',
              value: data.login_ip,
            },
            {
              title: 'Active Device Mac',
              value: data.active_device_mac,
            },
            {
              title: 'notes',
              value: data.notes,
            },
            {
              title: 'Age',
              value: data.age,
            },
            {
              title: 'Referral Id',
              value: data.referral_id,
            },
            {
              title: 'Locale',
              value: data.locale,
            },
            {
              title: 'Favorite Music',
              value: data.favorite_music,
            },
            {
              title: 'Phone Number',
              value: data.phone_number,
            },
            {
              title: 'Twitter Username',
              value: data.twitter_username,
            },
            {
              title: 'Job',
              value: data.job,
            },
            {
              title: 'Invoice Email Address',
              value: data.invoice_email_address,
            },
            {
              title: 'Hmac Secret',
              value: data.hmac_secret,
            },
            {
              title: 'Favorite Quote',
              value: data.favorite_quote,
            },
            {
              title: 'Primary Color',
              value: data.primary_color,
            },
            {
              title: 'Secondary Color',
              value: data.secondary_color,
            },
            {
              title: 'Material',
              value: data.material,
            },
            {
              title: 'Shipping Address',
              value: data.shipping_address,
            },
            {
              title: 'Zip Code',
              value: data.zip_code,
            },
            {
              title: 'Latitude',
              value: data.latitude,
            },
            {
              title: 'Longitude',
              value: data.longitude,
            },
            {
              title: 'Favorite Animal',
              value: data.favorite_animal,
            },
            {
              title: 'App Version',
              value: data.app_version,
            },
            {
              title: 'Timezone',
              value: data.timezone,
            },
          ]}
        />
      </Box>
      <Stack
        direction="row"
        w="100%"
        h="10%"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Button
          variant="ghost"
          _hover={{ bgColor: 'none' }}
          onClick={() => { infoSectionStore.reset() }}
        >
          Cancel
        </Button>
        <Button
          colorScheme="red"
          onClick={() => { setOpenDialog(true) }}
        >
          Delete User
        </Button>
      </Stack>
      <DeleteDialog
        isOpen={openDialog}
        name={data.name}
        onClose={() => {
          setOpenDialog(false)
        }}
        onDelete={onDelete}
      />
    </Stack>
  )
}

export default observer(InfoSection)
