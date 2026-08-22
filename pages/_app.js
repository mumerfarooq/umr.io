import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const restoreMode =
      typeof window !== 'undefined' && 'scrollRestoration' in window.history
        ? window.history.scrollRestoration
        : null

    if (restoreMode !== null) {
      window.history.scrollRestoration = 'manual'
    }

    const handleRouteChangeComplete = (url) => {
      if (url.includes('#')) return
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }

    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      if (restoreMode !== null) {
        window.history.scrollRestoration = restoreMode
      }
    }
  }, [router.events])

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
