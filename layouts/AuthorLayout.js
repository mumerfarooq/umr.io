import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div>
        <h1 className="page-heading">About</h1>
        <div className="mt-10 items-start sm:grid sm:grid-cols-[10rem,1fr] sm:gap-10">
          <div className="mb-8 sm:mb-0">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width="160px"
                height="160px"
                className="h-40 w-40 rounded-sm object-cover"
              />
            )}
            <h2 className="mt-5 font-display text-2xl">{name}</h2>
            {occupation && <div className="mt-1 text-sm text-muted">{occupation}</div>}
            {company && <div className="text-sm text-muted">{company}</div>}
            <div className="mt-5 flex space-x-3">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none dark:prose-dark">{children}</div>
        </div>
      </div>
    </>
  )
}
