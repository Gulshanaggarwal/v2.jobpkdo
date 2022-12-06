import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AuthContextProvider from '../context/AuthContext'
import BookMarkContextProvider from '../context/BookMarkContext'

function MyApp({ Component, pageProps }: AppProps) {

  return <AuthContextProvider>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </AuthContextProvider>
}

export default MyApp
