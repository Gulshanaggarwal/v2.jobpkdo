import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/Header/header'
import SignIn from '../components/signin'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Header />
    <SignIn />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
