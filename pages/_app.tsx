import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'

import { extendTheme } from '@chakra-ui/react'
import { Session } from 'next-auth'

const colors = {
	brand: {
	  900: '#1a365d',
	  800: '#153e75',
	  700: '#2a69ac',
	}
}
const config = {
	initialColorMode: 'dark',
}
const fonts = {
	heading: 'Helvetica',
	body: 'Helvetica'
}


const theme = extendTheme({ colors, config, fonts} )

function MyApp({Component, pageProps,}: AppProps<{ session: Session}>) {
  return (
    <ChakraProvider theme={theme}>
		<SessionProvider session={pageProps.session}>
			<Component {...pageProps} />
		</SessionProvider>
    </ChakraProvider>
  )
}

export default MyApp

