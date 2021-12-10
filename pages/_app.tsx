import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component className={'main'} {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
