/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import LinkPreview from './LinkPreview'
import TOCInline from './TOCInline'
import Pre from './Pre'
import Canva from './Canva'
import Canvabackchannel from './CanvaBackchannel'
import GoogleSlideSMTP from './GoogleSlideSMTP'
import { BlogNewsletterForm } from './NewsletterForm'
import Tweet from './Tweet'

export const MDXComponents = {
  Canva,
  Canvabackchannel,
  GoogleSlideSMTP,
  Image,
  TOCInline,
  a: LinkPreview,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, tweets, ...rest }) => {
  const StaticTweet = ({ id }) => {
    const tweet = tweets.find((tweet) => tweet.id === id)
    return <Tweet {...tweet} />
  }

  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={{ ...MDXComponents, StaticTweet }} {...rest} />
}
