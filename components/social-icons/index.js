import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]
  const sizeClass =
    {
      5: 'h-5 w-5',
      6: 'h-6 w-6',
      7: 'h-7 w-7',
      8: 'h-8 w-8',
    }[size] || 'h-8 w-8'

  return (
    <a
      className="text-sm text-stone-700 transition hover:text-signal-600 dark:text-stone-100 dark:hover:text-signal-300"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg className={`fill-current ${sizeClass}`} />
    </a>
  )
}

export default SocialIcon
