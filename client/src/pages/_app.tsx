import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AuthContextProvider from '../context/AuthContext'
import ScrollToTop from '../components/ScrollToTop'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return <AuthContextProvider>
    <Header />
    <Component {...pageProps} />
    <Footer />
    {(router.pathname === '/jobmarket' || router.pathname === '/bookmarks') && <ScrollToTop />}
  </AuthContextProvider>
}

export default MyApp
