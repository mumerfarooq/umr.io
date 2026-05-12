import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-14 border border-stone-900 bg-yellow-50 p-5 dark:border-stone-200 dark:bg-stone-900 sm:mt-16 sm:p-6">
        <div className="mb-4 flex items-center space-x-4 border-b border-stone-300 pb-4 dark:border-stone-700">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-stone-600 dark:text-stone-400">
          <div>{siteMetadata.author}</div>
          <div>/</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}
