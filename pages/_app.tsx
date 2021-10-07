import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { OpenClosePpt } from '../hooks'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <OpenClosePpt.Provider value={useState(Boolean(false))}>
        <Component {...pageProps} />
      </OpenClosePpt.Provider>
    </ThemeProvider>
  )
}
export default MyApp
