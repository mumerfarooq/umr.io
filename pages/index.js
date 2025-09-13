import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 6

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="pt-6">
          <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hi{' '}
            <span role="img" aria-label="wave">
              👋
            </span>{' '}
            , I’m Umer Farooq
          </h1>
          <h2 className="prose mb-16 text-lg text-gray-600 dark:text-gray-400">
            {`I’m trying to make sense of strategy, fintech, and how people work. Writing helps me think.`}
            {/* <Link
                      href={`/blog/strategy-is-not-x`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Read More"`}
              >
              here &rarr;
            </Link> */}
          </h2>
        </div>

        {/* <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div> */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                aria-label={`Read "${title}"`}
                className="block cursor-pointer rounded-lg border border-gray-200 p-2 transition-all duration-200 hover:scale-[1.02] hover:bg-gray-50 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-gray-700 dark:hover:bg-gray-800/40 sm:p-3"
              >
                <article className="flex h-full flex-col">
                  <div className="flex-grow space-y-1 sm:space-y-1.5">
                    <div>
                      <div className="space-y-1.5">
                        <h2 className="text-xl font-bold leading-7 tracking-tight text-gray-900 dark:text-gray-100">
                          {title}
                        </h2>
                        <div className="line-clamp-3 prose max-w-none text-sm text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                        {/* <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
                          {tags.map((tag, index) => (
                            <>
                              {index > 0 && <span className=\"mx-1.5\">•</span>}
                              <Tag key={tag} text={tag} />
                            </>
                          ))}
                        </div> */}
                        {/* Removed Read more link; entire card is clickable */}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
          {posts.length > MAX_DISPLAY && (
            <div className="mt-4 font-medium">
              <Link
                href="/blog"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="all posts"
              >
                All Posts &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
