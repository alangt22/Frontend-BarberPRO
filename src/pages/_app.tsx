import type { AppProps } from 'next/app'
import { ChakraProvider, Spinner, Center } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { AuthProvider } from '../context/AuthContext'

/* ===== Theme ===== */

const styles = {
  global: {
    body: {
      color: 'gray.100',
      bg: 'barber.900',
    },
    a: {
      color: '#FFF',
    },
  },
}

const colors = {
  barber: {
    900: '#12131b',
    400: '#1b1c29',
    100: '#c6c6c6',
  },
  button: {
    cta: '#fba931',
    default: '#FFF',
    gray: '#DFDFDF',
    danger: '#FF4040',
  },
  orange: {
    900: '#fba931',
  },
}

const theme = extendTheme({ styles, colors })

/* ===== App ===== */

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleEnd = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleEnd)
    router.events.on('routeChangeError', handleEnd)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleEnd)
      router.events.off('routeChangeError', handleEnd)
    }
  }, [router])

  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        {loading && (
          <Center
            position="fixed"
            top={0}
            left={0}
            w="100vw"
            h="100vh"
            bg="rgba(18, 19, 27, 0.6)" // combina com barber.900
            zIndex={9999}
          >
            <Spinner
              size="xl"
              thickness="4px"
              speed="0.65s"
              color="orange.900"
            />
          </Center>
        )}

        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
