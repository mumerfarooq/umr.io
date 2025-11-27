import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Image from '@/components/Image'
import SocialIcon from '@/components/social-icons'

const MAX_DISPLAY = 6

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      {/* Hero Section - Editorial Introduction */}
      <section className="grid grid-cols-1 gap-6 border-b border-stone-200 py-10 dark:border-stone-800 sm:gap-8 sm:py-12 md:py-14 lg:grid-cols-12 lg:gap-10 lg:py-12 xl:gap-12">
        {/* Avatar - Mobile First (appears above on mobile) */}
        <div className="flex items-center justify-center lg:order-2 lg:col-span-5">
          <div className="relative">
            {/* Decorative background element - smaller on mobile */}
            <div className="absolute -right-3 -top-3 h-32 w-32 rounded-full bg-wine-100 opacity-20 blur-3xl dark:bg-wine-900 sm:-right-4 sm:-top-4 sm:h-48 sm:w-48"></div>
            <div className="absolute -bottom-3 -left-3 h-40 w-40 rounded-full bg-terracotta-100 opacity-20 blur-3xl dark:bg-terracotta-900 sm:-bottom-4 sm:-left-4 sm:h-64 sm:w-64"></div>

            {/* Avatar - responsive sizing */}
            <div className="relative z-10">
              <Image
                src="/static/images/avatar.jpg"
                alt="Umer Farooq"
                width="320px"
                height="320px"
                className="mx-auto w-48 rounded-2xl shadow-2xl sm:w-64 md:w-72 lg:w-80"
              />
            </div>
          </div>
        </div>

        {/* Text Content - appears below avatar on mobile */}
        <div className="flex flex-col justify-center lg:order-1 lg:col-span-7">
          <div className="space-y-5 sm:space-y-6 lg:space-y-6">
            {/* Overline */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-px w-8 bg-wine-600 dark:bg-wine-400 sm:w-12"></div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 sm:text-xs sm:tracking-widest">
                Strategy × Fintech × Product
              </span>
            </div>

            {/* Main Heading - optimized scaling */}
            <h1 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl sm:leading-[1.1] md:text-5xl lg:text-6xl xl:text-7xl">
              I'm Umer Farooq
            </h1>

            {/* Subheading - better mobile readability */}
            <div className="max-w-2xl space-y-4 sm:space-y-5 lg:space-y-4">
              <p className="text-lg leading-relaxed text-stone-700 dark:text-stone-300 sm:text-xl md:text-2xl md:leading-relaxed">
                I'm trying to make sense of strategy, fintech, and how people work.{' '}
                <span className="italic">Writing helps me think.</span>
              </p>

              <p className="text-base leading-loose text-stone-600 dark:text-stone-400 sm:text-base">
                Currently based in San Francisco, working at{' '}
                <a
                  href="https://www.Xcover.com/?utm_campaign=umer-cv"
                  className="group relative font-medium text-wine-600 dark:text-wine-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10">Cover Genius</span>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-wine-600 transition-all duration-300 group-hover:w-full dark:bg-wine-400"></span>
                </a>
                . Previously building products at Freelancer.com and doing software engineering.
              </p>
            </div>

            {/* Social Links - larger touch targets */}
            <div className="flex items-center gap-5 pt-2 sm:gap-4 sm:pt-4">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
              <SocialIcon kind="github" href={siteMetadata.github} size="6" />
            </div>
          </div>
        </div>
      </section>

      {/* Writing Section - Magazine Grid */}
      <section className="py-12 sm:py-16 lg:py-14">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between lg:mb-10">
          <div>
            <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-50 sm:text-4xl md:text-5xl">
              Recent Writing
            </h2>
            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-stone-500 sm:mt-3 sm:text-sm sm:tracking-widest">
              {posts.length} Essays
            </p>
          </div>

          {posts.length > MAX_DISPLAY && (
            <Link
              href="/blog"
              className="group flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-wider text-wine-600 transition-colors hover:text-wine-700 dark:text-wine-400 dark:hover:text-wine-300 sm:text-sm sm:tracking-widest"
            >
              View All
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          )}
        </div>

        {/* Magazine-style Grid - mobile optimized */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {!posts.length && <p className="text-stone-500">No posts found.</p>}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter, index) => {
            const { slug, date, title, summary, tags } = frontMatter

            // First post is featured (larger) - only on tablet and up
            const isFeatured = index === 0

            return (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className={`group relative block ${
                  isFeatured ? 'md:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <article className="flex h-full flex-col border-l-2 border-stone-200 py-5 pl-4 transition-all duration-300 hover:border-wine-600 active:border-wine-600 dark:border-stone-800 dark:hover:border-wine-400 dark:active:border-wine-400 sm:py-6 sm:pl-6">
                  {/* Date */}
                  <time className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 sm:mb-3 sm:text-xs sm:tracking-widest">
                    {new Date(date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>

                  {/* Title - better mobile sizing */}
                  <h3
                    className={`mb-2 font-serif font-bold leading-tight text-stone-900 transition-colors group-hover:text-wine-600 group-active:text-wine-600 dark:text-stone-50 dark:group-hover:text-wine-400 dark:group-active:text-wine-400 sm:mb-3 ${
                      isFeatured
                        ? 'text-2xl sm:text-3xl md:text-4xl'
                        : 'text-xl sm:text-xl md:text-2xl'
                    }`}
                  >
                    {title}
                  </h3>

                  {/* Summary - responsive text size */}
                  <p
                    className={`text-sm leading-relaxed text-stone-600 dark:text-stone-400 sm:text-base ${
                      isFeatured ? 'mb-5 sm:mb-6 sm:text-lg' : 'mb-3 sm:mb-4'
                    }`}
                  >
                    {summary}
                  </p>

                  {/* Tags - smaller on mobile */}
                  {tags && tags.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-1.5 sm:gap-2">
                      {tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] uppercase tracking-wide text-stone-500 dark:text-stone-400 sm:text-xs sm:tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Read More Indicator - visible on mobile tap */}
                  <div className="mt-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-wine-600 opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100 dark:text-wine-400 sm:mt-4 sm:text-sm sm:tracking-widest">
                    Read
                    <svg
                      className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,700;9..144,900&family=Newsreader:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap');

        .font-serif {
          font-family: 'Fraunces', ui-serif, Georgia, serif;
        }

        .font-sans {
          font-family: 'Newsreader', ui-serif, Georgia, serif;
        }

        .font-mono {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom selection color */
        ::selection {
          background-color: rgba(139, 38, 53, 0.2);
          color: inherit;
        }

        /* Mobile-specific optimizations */
        @media (max-width: 640px) {
          /* Better text rendering on mobile */
          body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
          }

          /* Prevent zoom on input focus on iOS */
          input,
          select,
          textarea {
            font-size: 16px;
          }

          /* Better tap highlighting */
          * {
            -webkit-tap-highlight-color: rgba(139, 38, 53, 0.1);
          }

          /* Remove default link highlight on iOS */
          a {
            -webkit-tap-highlight-color: transparent;
          }

          /* Improve touch scrolling momentum */
          * {
            -webkit-overflow-scrolling: touch;
          }
        }

        /* Prevent horizontal scroll on mobile */
        body {
          overflow-x: hidden;
        }

        /* Ensure images don't overflow on mobile */
        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </>
  )
}
