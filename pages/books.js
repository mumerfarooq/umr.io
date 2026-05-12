import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import { recommendedBooks } from '@/data/booksData'

export default function Books() {
  return (
    <>
      <PageSEO title={`Books - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="space-y-4 border border-stone-900 bg-yellow-50 p-6 dark:border-stone-200 dark:bg-stone-900 sm:p-8">
        <h1 className="font-mono text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-stone-900 dark:text-stone-50 sm:text-5xl">
          Bookshelf{' '}
          <span role="img" aria-label="books">
            📚
          </span>
        </h1>
        <p className="text-base leading-8 text-stone-700 dark:text-stone-300 sm:text-lg">
          A living list of books worth your time.
        </p>
        <div>
          <ul className="space-y-2 border-t border-stone-300 pt-4 dark:border-stone-700">
            {recommendedBooks.map((d) => (
              <li key={d.title}>
                <Link
                  href={d.href}
                  className="text-stone-800 underline decoration-1 underline-offset-4 hover:text-signal-600 dark:text-stone-100 dark:hover:text-signal-300"
                >
                  {d.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
