import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-rule pt-8 pb-12 sm:mt-24">
      <div className="flex items-center gap-4">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="5" />
        <SocialIcon kind="github" href={siteMetadata.github} size="5" />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} size="5" />
      </div>
      <p className="mt-5 text-sm text-muted">
        {siteMetadata.author}
        <span className="mx-2 text-rule">·</span>
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}
