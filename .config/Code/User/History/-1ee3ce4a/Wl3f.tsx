import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ProvideTheme } from '../utils/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProvideTheme>
      <Component {...pageProps} />
    </ProvideTheme>
  )
}

export default MyApp