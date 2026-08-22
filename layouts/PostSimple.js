import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import Tag from '@/components/Tag'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

export default function PostSimple({ frontMatter, next, prev, children }) {
  const { date, title, tags } = frontMatter

  return (
    <>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
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
          {tags && (
            <div>
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          )}
        </footer>
      </article>
    </>
  )
}
