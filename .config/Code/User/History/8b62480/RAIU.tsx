import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from "../context/Auth";

function MyApp({ Component, pageProps }: AppProps) {
  return 
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
}

export default MyApp
