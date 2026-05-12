import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Image from '@/components/Image'

const MAX_DISPLAY = 6

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <section className="grid gap-5 border-b border-stone-900 py-8 dark:border-stone-200 lg:grid-cols-[1.2fr,0.8fr] lg:gap-8 lg:py-10">
        <div className="space-y-5 border border-stone-900 bg-yellow-50 p-5 dark:border-stone-200 dark:bg-stone-900 sm:space-y-6 sm:p-7">
          <p className="mono-label">Umer Farooq / umr.io</p>
          <h1 className="font-mono text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-stone-900 dark:text-stone-50 sm:text-4xl md:text-5xl">
            Strategy notes and product essays from San Francisco.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-stone-700 dark:text-stone-300 sm:text-lg">
            Notes on product, markets, and incentives.
          </p>
          <div className="border-t border-stone-900 pt-4 font-mono text-xs uppercase tracking-[0.12em] text-stone-700 dark:border-stone-200 dark:text-stone-300">
            <p>Product @ Cover Genius / San Francisco</p>
          </div>
          <a
            href="https://www.Xcover.com/?utm_campaign=umer-cv"
            className="inline-block border-t border-stone-900 pt-4 font-mono text-[13px] uppercase tracking-[0.12em] text-signal-700 underline decoration-signal-700 transition-colors hover:text-signal-600 hover:decoration-signal-600 dark:border-stone-200 dark:text-signal-300 dark:decoration-signal-300 dark:hover:text-signal-200 dark:hover:decoration-signal-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Current Work
          </a>
        </div>

        <aside className="border border-stone-900 bg-yellow-50 p-4 dark:border-stone-200 dark:bg-stone-900 sm:p-5">
          <Image
            src="/static/images/avatar.jpg"
            alt="Umer Farooq portrait"
            width="360px"
            height="360px"
            className="w-full border border-stone-900 grayscale dark:border-stone-200"
          />
        </aside>
      </section>

      <section className="py-10 sm:py-12">
        <div className="mb-6 flex flex-col gap-3 border-b border-stone-900 pb-4 dark:border-stone-200 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-mono text-2xl font-bold uppercase tracking-[-0.02em] text-stone-900 dark:text-stone-50 sm:text-3xl">
              Recent Writing
            </h2>
            <p className="mono-label mt-2">{posts.length} published notes</p>
          </div>
          {posts.length > MAX_DISPLAY && (
            <Link href="/blog" className="raw-link">
              Browse Full Archive
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {!posts.length && (
            <p className="border border-dashed border-stone-400 p-4 font-mono text-sm text-stone-600 dark:text-stone-400">
              No posts found.
            </p>
          )}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter

            return (
              <Link key={slug} href={`/blog/${slug}`} className="group block">
                <article className="flex h-full flex-col border-2 border-stone-900 bg-yellow-50 p-4 transition-transform duration-200 hover:-translate-y-0.5 dark:border-stone-200 dark:bg-stone-900 sm:p-5">
                  <time className="mono-label">
                    {new Date(date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  <h3 className="pt-3 font-mono text-xl font-semibold leading-tight text-stone-900 group-hover:text-signal-700 dark:text-stone-50 dark:group-hover:text-signal-300">
                    {title}
                  </h3>
                  <p className="pt-3 text-sm leading-7 text-stone-700 dark:text-stone-300">
                    {summary}
                  </p>
                  {tags && tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2 border-t border-stone-200 pt-3 dark:border-stone-700">
                      {tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] uppercase tracking-[0.14em] text-stone-600 dark:text-stone-400"
                        >
                          [{tag}]
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
