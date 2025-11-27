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
        <div className="pt-8">
          <h1 className="pb-6 text-2xl font-extrabold leading-8 tracking-tight text-gray-800 dark:text-gray-100 sm:pb-8 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hi{' '}
            <span role="img" aria-label="wave">
              👋
            </span>{' '}
            , I'm Umer Farooq
          </h1>
          <h2 className="prose mb-12 text-base text-gray-700 dark:text-gray-300 sm:mb-20 sm:text-lg">
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
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                aria-label={`Read "${title}"`}
                className="block cursor-pointer rounded-lg bg-gray-50/50 p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-gray-100/80 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:bg-gray-800/30 dark:hover:bg-gray-800/50 sm:p-8"
              >
                <article className="flex h-full flex-col">
                  <div className="flex-grow space-y-1 sm:space-y-1.5">
                    <div>
                      <div className="space-y-1.5">
                        <h2 className="text-lg font-bold leading-6 tracking-tight text-gray-800 dark:text-gray-100 sm:text-xl sm:leading-7">
                          {title}
                        </h2>
                        <div className="line-clamp-3 prose max-w-none text-[15px] text-gray-600 dark:text-gray-300 sm:text-sm">
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
