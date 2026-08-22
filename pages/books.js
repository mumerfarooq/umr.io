import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import { recommendedBooks } from '@/data/booksData'

export default function Books() {
  return (
    <>
      <PageSEO
        title={`Bookshelf - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <h1 className="page-heading">Bookshelf</h1>
      <ul className="mt-12 space-y-5">
        {recommendedBooks.map((d) => (
          <li key={d.title}>
            <Link href={d.href} className="quiet-link text-[1.05rem] leading-7">
              {d.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
