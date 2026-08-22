import Link from '@/components/Link'
import formatDate from '@/lib/utils/formatDate'

export default function PostListItem({ slug, date, title, prefix = 'blog' }) {
  return (
    <li>
      <time className="meta" dateTime={date}>
        {formatDate(date, { month: 'short' })}
      </time>
      <Link href={`/${prefix}/${slug}`} className="quiet-link text-[1.05rem] leading-7">
        {title}
      </Link>
    </li>
  )
}
