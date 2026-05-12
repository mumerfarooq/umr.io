import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

export default function ListLayout({
  prefix,
  posts,
  title,
  description,
  initialDisplayPosts = [],
  pagination,
}) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  const urlPrefix = prefix
  return (
    <>
      <div className="divide-y divide-stone-900 dark:divide-stone-200">
        <div className="space-y-4 border border-stone-900 bg-yellow-50 p-5 dark:border-stone-200 dark:bg-stone-900 sm:p-6">
          <h1 className="font-mono text-3xl font-bold uppercase tracking-[-0.02em] text-stone-900 dark:text-stone-50 sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <div className="max-w-3xl text-base leading-8 text-stone-700 dark:text-stone-300">
            {description}
          </div>
          <div className="relative max-w-lg">
            <input
              aria-label="Search"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              className="block w-full border border-stone-900 bg-yellow-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-500 focus:border-signal-500 focus:ring-signal-500 dark:border-stone-200 dark:bg-stone-900 dark:text-stone-100 dark:placeholder:text-stone-500"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-stone-500 dark:text-stone-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul className="pt-4 sm:pt-5">
          {!filteredBlogPosts.length && (
            <li className="border border-dashed border-stone-400 p-4 font-mono text-sm text-stone-600 dark:text-stone-400">
              No posts found.
            </li>
          )}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li
                key={slug}
                className="border-b border-stone-300 py-5 last:border-b-0 dark:border-stone-700"
              >
                <article className="space-y-3 xl:grid xl:grid-cols-[170px,1fr] xl:gap-5 xl:space-y-0">
                  <dl className="pt-0.5">
                    <dt className="sr-only">Published on</dt>
                    <dd className="font-mono text-xs uppercase tracking-[0.12em] text-stone-500 dark:text-stone-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-2.5">
                    <div>
                      <h3 className="font-mono text-2xl font-semibold leading-[1.22] tracking-[-0.02em] sm:text-[1.75rem]">
                        <Link
                          href={`/${urlPrefix}/${slug}`}
                          className="text-stone-900 hover:text-signal-700 dark:text-stone-100 dark:hover:text-signal-300"
                        >
                          {title}
                        </Link>
                      </h3>
                      <div className="mt-2.5 flex flex-wrap gap-y-1.5">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <p className="max-w-3xl text-base leading-8 text-stone-700 dark:text-stone-300">
                      {summary}
                    </p>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
