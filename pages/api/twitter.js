import { getTweets } from '@/lib/twitter'

export default async (_, res) => {
  const tweets = await getTweets(['1295746433350397952'])

  return res.status(200).json(tweets)
}
