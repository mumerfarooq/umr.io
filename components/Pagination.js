import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <nav className="mt-12 flex items-baseline justify-between text-[1.05rem]">
      {!prevPage && <span className="text-muted">Previous</span>}
      {prevPage && (
        <Link
          href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}
          className="quiet-link"
        >
          Previous
        </Link>
      )}
      <span className="text-sm text-muted">
        {currentPage} of {totalPages}
      </span>
      {!nextPage && <span className="text-muted">Next</span>}
      {nextPage && (
        <Link href={`/blog/page/${currentPage + 1}`} className="quiet-link">
          Next
        </Link>
      )}
    </nav>
  )
}
