import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import Tag from '@/components/Tag'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { date, title, tags } = frontMatter

  return (
    <>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-2 border border-stone-900 bg-yellow-50 px-4 py-8 text-center dark:border-stone-200 dark:bg-stone-900 sm:px-6">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="font-mono text-xs uppercase tracking-[0.12em] text-stone-500 dark:text-stone-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              {tags && (
                <div className="py-2">
                  <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-stone-500 dark:text-stone-400">
                    Tags
                  </h2>
                  <div className="flex-wrap pt-2 tracking-wide">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              )}
              <div></div>
            </div>
          </header>
          <div className="divide-y divide-stone-300 border-x border-b border-stone-900 bg-yellow-50 pb-8 dark:divide-stone-700 dark:border-stone-200 dark:bg-stone-900">
            <div className="divide-y divide-stone-300 dark:divide-stone-700">
              <div className="prose max-w-none px-5 pt-10 pb-8 dark:prose-dark sm:px-8">
                {children}
              </div>
            </div>
            {/* <Comments frontMatter={frontMatter} /> */}
            <footer className="px-5 pt-4 sm:px-8 sm:pt-5">
              <div
                className={`grid grid-cols-1 gap-3 text-sm font-medium ${
                  prev && next ? 'sm:grid-cols-2 sm:text-base' : 'sm:text-base'
                }`}
              >
                {prev && (
                  <div>
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="font-mono text-xs uppercase tracking-[0.12em] text-stone-800 hover:text-signal-600 dark:text-stone-100 dark:hover:text-signal-300"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className={prev ? 'sm:text-right' : ''}>
                    <Link
                      href={`/blog/${next.slug}`}
                      className="font-mono text-xs uppercase tracking-[0.12em] text-stone-800 hover:text-signal-600 dark:text-stone-100 dark:hover:text-signal-300"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
              {tags && (
                <div className="mt-4 border-t border-stone-300 pt-3 dark:border-stone-700">
                  <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-stone-500 dark:text-stone-400">
                    Tags
                  </h2>
                  <div className="flex-wrap pt-2 tracking-wide">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              )}
            </footer>
          </div>
        </div>
      </article>
    </>
  )
}
