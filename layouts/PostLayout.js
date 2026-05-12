import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, images, tags } = frontMatter

  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-stone-900 xl:dark:divide-stone-200">
          <header className="pt-2 sm:pt-4 xl:pb-8">
            <div className="space-y-1 text-center">
              <dl className="space-y-4">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="font-mono text-xs uppercase tracking-[0.14em] text-stone-500 dark:text-stone-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="divide-y divide-stone-300 border border-stone-900 bg-yellow-50 pb-8 dark:divide-stone-700 dark:border-stone-200 dark:bg-stone-900">
            {/* <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width="38px"
                          height="38px"
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-blue-800 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {author.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl> */}
            <div className="divide-y divide-stone-300 dark:divide-stone-700">
              <div className="prose max-w-none px-5 pt-8 pb-8 dark:prose-dark sm:px-8 sm:pt-10 sm:pb-10">
                {children}
              </div>
              {/* <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(slug)} rel="nofollow">
                  {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
              </div>
              <Comments frontMatter={frontMatter} /> */}
            </div>
            <footer className="px-5 pt-4 sm:px-8 sm:pt-5">
              <div className="space-y-4 text-sm font-medium leading-6">
                {tags && (
                  <div className="border-b border-stone-300 pb-3 dark:border-stone-700">
                    <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-stone-500 dark:text-stone-400">
                      Tags
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-y-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className={`grid grid-cols-1 gap-3 ${next && prev ? 'sm:grid-cols-2' : ''}`}>
                    {prev && (
                      <div>
                        <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-stone-500 dark:text-stone-400">
                          Previous Article
                        </h2>
                        <div className="pt-2 text-stone-800 hover:text-signal-600 dark:text-stone-100 dark:hover:text-signal-300">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div className={prev ? 'sm:text-right' : ''}>
                        <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-stone-500 dark:text-stone-400">
                          Next Article
                        </h2>
                        <div className="pt-2 text-stone-800 hover:text-signal-600 dark:text-stone-100 dark:hover:text-signal-300">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-2">
                <Link
                  href="/blog"
                  className="font-mono text-xs uppercase tracking-[0.12em] text-stone-800 hover:text-signal-600 dark:text-stone-100 dark:hover:text-signal-300"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </>
  )
}
