import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
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
      <div className="flex min-h-screen flex-col justify-between">
        <header className="flex items-center justify-between gap-4 border-b border-rule pt-8 pb-5 sm:pt-10">
          <Link
            href="/"
            aria-label={siteMetadata.headerTitle}
            className="text-lg tracking-tight text-ink hover:text-muted"
          >
            {siteMetadata.headerTitle}
          </Link>
          <div className="flex items-center gap-1">
            <nav className="hidden items-baseline gap-5 sm:flex">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  className={`text-sm transition-colors ${
                    isActiveLink(link.href) ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto pt-10 sm:pt-14">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
