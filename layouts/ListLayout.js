import { useState } from 'react'
import Pagination from '@/components/Pagination'
import PostListItem from '@/components/PostListItem'

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

  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <h1 className="page-heading">{title}</h1>
      {description && <p className="mt-4 text-[1.05rem] leading-7 text-ink">{description}</p>}
      {posts.length > 10 && (
        <div className="mt-6">
          <input
            aria-label="Search"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search"
            className="block w-full max-w-md border-0 border-b border-rule bg-transparent px-0 py-2 text-[1.05rem] text-ink placeholder:text-muted focus:border-ink focus:ring-0"
          />
        </div>
      )}

      <ul className="mt-12 space-y-8">
        {!filteredBlogPosts.length && <li className="text-muted">No posts found.</li>}
        {displayPosts.map((frontMatter) => (
          <PostListItem key={frontMatter.slug} prefix={prefix} {...frontMatter} />
        ))}
      </ul>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
