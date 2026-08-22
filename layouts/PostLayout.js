import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import formatDate from '@/lib/utils/formatDate'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, date, title, tags } = frontMatter

  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <header>
          <time className="meta" dateTime={date}>
            {formatDate(date, { month: 'short' })}
          </time>
          <div className="mt-2">
            <PageTitle>{title}</PageTitle>
          </div>
        </header>
        <div className="prose max-w-none pt-8 pb-4 dark:prose-dark">{children}</div>
        <footer className="mt-12 space-y-6">
          {tags && (
            <div>
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          )}
          {(next || prev) && (
            <div className="space-y-3 text-[1.05rem]">
              {prev && (
                <div>
                  <Link href={`/blog/${prev.slug}`} className="quiet-link">
                    {prev.title}
                  </Link>
                </div>
              )}
              {next && (
                <div>
                  <Link href={`/blog/${next.slug}`} className="quiet-link">
                    {next.title}
                  </Link>
                </div>
              )}
            </div>
          )}
          <div>
            <Link href="/blog" className="quiet-link text-[1.05rem]">
              More writing
            </Link>
          </div>
        </footer>
      </article>
    </>
  )
}
