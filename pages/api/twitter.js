import { getTweets, getTweetThread } from '@/lib/twitter'

export default async (_, res) => {
  const tweets = await getTweetThread('1527688400693698561')

  return res.status(200).json(tweets)
}
