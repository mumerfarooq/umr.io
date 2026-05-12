import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-1.5 inline-block border border-stone-300 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-stone-700 transition-colors hover:border-signal-500 hover:text-signal-600 dark:border-stone-700 dark:text-stone-300 dark:hover:border-signal-300 dark:hover:text-signal-300">
        {`#${text.split(' ').join('-')}`}
      </a>
    </Link>
  )
}

export default Tag
