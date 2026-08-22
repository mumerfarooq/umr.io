import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Page Not Found - ${siteMetadata.title}`} />
      <div className="py-10">
        <p className="meta">Lost</p>
        <h1 className="page-heading mt-4">404</h1>
        <p className="mt-6 max-w-md text-lg leading-8 text-muted">
          This page is not here. The writing still is.
        </p>
        <Link href="/" className="mt-8 inline-block text-lg text-ink hover:text-muted">
          ← Back home
        </Link>
      </div>
    </>
  )
}
