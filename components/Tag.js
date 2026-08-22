import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm text-muted underline decoration-rule underline-offset-[0.2em] hover:text-ink">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
