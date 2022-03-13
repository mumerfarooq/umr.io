import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import { currentBooks, recommendedBooks, backlogBooks } from '@/data/booksData'

export default function Books() {
  return (
    <>
      <PageSEO title={`Books - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Bookshelf{' '}
          <span role="img" aria-label="books">
            📚
          </span>
        </h1>
        <p className="ph-6 text-lg leading-7 text-gray-500 dark:text-gray-400">
          I hope you will find something interesting.
        </p>
        <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
          Currently Reading:
        </h3>
        <div className="ml-8">
          <ul className="list-arabic space-y-1">
            {currentBooks.map((d) => (
              <li
                key={d.title}
                className="text-blue-600 visited:text-purple-600 hover:text-blue-800"
              >
                <Link href={d.href}>{d.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
          Recommend:
        </h3>
        <div className="ml-8">
          <ul className="list-arabic space-y-1">
            {recommendedBooks.map((d) => (
              <li
                key={d.title}
                className="text-blue-600 visited:text-purple-600 hover:text-blue-800"
              >
                <Link href={d.href}>{d.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
          Backlog:
        </h3>
        <div className="ml-8">
          <ul className="list-arabic space-y-1">
            {backlogBooks.map((d) => (
              <li
                key={d.title}
                className="text-blue-600 visited:text-purple-600 hover:text-blue-800"
              >
                <Link href={d.href}>{d.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
