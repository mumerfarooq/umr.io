import Link from '@/components/Link'
import PostListItem from '@/components/PostListItem'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const MAX_DISPLAY = 8

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <h1 className="page-heading">Umer Farooq</h1>
      <p className="mt-4 text-[1.05rem] leading-7 text-ink">
        I write about product, markets, and how things get built. San Francisco.
      </p>

      <section className="pt-12">
        {!posts.length && <p className="text-muted">No posts yet.</p>}

        <ul className="space-y-8">
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => (
            <PostListItem key={frontMatter.slug} {...frontMatter} />
          ))}
        </ul>

        {posts.length > MAX_DISPLAY && (
          <p className="pt-8 text-[1.05rem]">
            <Link href="/blog" className="quiet-link">
              More here
            </Link>
          </p>
        )}
      </section>
    </>
  )
}
