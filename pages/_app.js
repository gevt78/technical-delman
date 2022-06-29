/* eslint-disable react/react-in-jsx-scope */
import { useRouter } from 'next/router'

import { ChakraProvider } from '@chakra-ui/react'

import Layout from '../components/layout'
import theme from '../theme/theme'
import '../styles/globals.css'

const PAGES = ['/', '/registration', '/search', '/user']

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  const item = PAGES.find(path => router.pathname === path)

  return (
    <ChakraProvider theme={theme} resetCss={false} w="100%">
      {item ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </ChakraProvider>
  )
}

export default MyApp
