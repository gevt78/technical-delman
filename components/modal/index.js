/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Stack,
  Text,
} from '@chakra-ui/react'
import { TbTrashX } from 'react-icons/tb'

const DeleteDialog = ({
  name,
  isOpen,
  onClose,
  onDelete,
}) => {
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader
            fontSize="2xl"
            fontWeight={600}
          >
            Delete User
          </AlertDialogHeader>
          <AlertDialogCloseButton />

          <AlertDialogBody>
            <Stack
              justifyContent="center"
              alignItems="center"
            >
              <TbTrashX
                size="5rem"
                style={{
                  backgroundColor: '#F6F6F9',
                  padding: '5px',
                  borderRadius: '3rem',
                }}
              />
              <Text fontWeight={700} fontSize="xl">
                Are you sure you want this user ?
              </Text>
              <Text>
                {`This action will delete: ${name} from the database`}
              </Text>
            </Stack>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Stack
              justifyContent="center"
              alignItems="center"
              direction="row"
              w="100%"
            >
              <Button
                variant="ghost"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={onDelete} ml={3}>
                Delete User
              </Button>
            </Stack>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default DeleteDialog
