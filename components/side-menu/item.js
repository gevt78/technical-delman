import React from 'react'
import NextLink from 'next/link'

import {
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from '@chakra-ui/layout'
import { Icon } from '@chakra-ui/react'

const MenuItem = ({
  active,
  item,
  expanded,
  onClick,
  isMenu,
}) => {
  return (
    <LinkBox
      onClick={onClick}
      mt={0}
    >
      <Stack
        direction="row"
        cursor="pointer"
        p={4}
        spacing={4}
        alignItems="center"
        fontWeight="bold"
        color={active ? '#1B5BA5' : '#4E5660'}
        borderLeft={active ? '3px solid #1B5BA5' : '3px solid transparent'}
        _hover={{
          backgroundColor: '#EAECF0',
          borderLeft: '3px solid #1B5BA5',
        }}
        textDecoration="none"
        mt={0}
      >
        {isMenu ? (
          <>
            <Icon
              as={item.icon}
              fontSize="1.5rem"
            />
            <Text>
              {expanded ? item.name : ''}
            </Text>
          </>
        ) : (
          <>
            <Icon
              as={item.icon}
              fontSize="1.5rem"
            />
            <NextLink
              href={item.href || ''}
              passHref
            >
              <LinkOverlay
                _hover={{
                  textDecoration: 'none',
                }}
              >
                <Text>
                  {expanded ? item.name : ''}
                </Text>
              </LinkOverlay>
            </NextLink>
          </>
        )}
      </Stack>
    </LinkBox>
  )
}

export default MenuItem
