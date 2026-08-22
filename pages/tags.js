import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I write about" />
      <h1 className="page-heading">Tags</h1>
      <ul className="mt-12 space-y-3">
        {Object.keys(tags).length === 0 && <li className="text-muted">No tags found.</li>}
        {sortedTags.map((t) => (
          <li key={t} className="text-[1.05rem]">
            <Tag text={t} />
            <span className="text-sm text-muted">{` (${tags[t]})`}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
