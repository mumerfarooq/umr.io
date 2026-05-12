import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import { useRouter } from 'next/router'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  const isActiveLink = (href) =>
    href.startsWith('/') && (router.pathname === href || router.pathname.startsWith(`${href}/`))

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="mt-4 border border-stone-900 bg-yellow-50 px-4 py-4 dark:border-stone-200 dark:bg-stone-900 sm:mt-6 sm:px-6">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">{/* <Logo /> */}</div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden font-mono text-lg font-semibold uppercase tracking-[0.12em] text-stone-900 dark:text-stone-50 sm:block">
                    [{siteMetadata.headerTitle}]
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden items-center gap-1 sm:flex">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  target="_self"
                  className={`px-2 py-1 font-mono text-xs uppercase tracking-[0.12em] transition-colors sm:px-2.5 ${
                    isActiveLink(link.href)
                      ? 'text-signal-700 dark:text-signal-300'
                      : 'text-stone-700 hover:text-signal-600 dark:text-stone-300 dark:hover:text-signal-300'
                  }`}
                >
                  [{link.title}]
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto pt-6 sm:pt-8">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
