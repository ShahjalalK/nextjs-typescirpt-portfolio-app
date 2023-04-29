import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import MetaSeo from '@/meta/metaSeo'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <main className="w-full bg-light font-Montserrat">
    <MetaSeo />
    <Navbar />
      <Component {...pageProps} />
      <Footer />
  </main>
}
