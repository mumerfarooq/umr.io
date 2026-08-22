import { useRef, useState } from 'react'

import siteMetadata from '@/data/siteMetadata'

const NewsletterForm = ({ title = 'Subscribe to the newsletter' }) => {
  const inputEl = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage('Your e-mail address is invalid or you are already subscribed!')
      return
    }

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    setMessage('Successfully! 🎉 You are now subscribed.')
  }

  return (
    <div>
      <div className="pb-2 text-xl text-ink">{title}</div>
      <form className="flex flex-col sm:flex-row" onSubmit={subscribe}>
        <div>
          <label className="sr-only" htmlFor="email-input">
            Email address
          </label>
          <input
            autoComplete="email"
            className="w-72 border-0 border-b border-rule bg-transparent px-0 py-2 text-sm text-ink placeholder:text-muted focus:border-accent focus:ring-0"
            id="email-input"
            name="email"
            placeholder={subscribed ? "You're subscribed" : 'Enter your email'}
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <div className="mt-3 flex w-full sm:ml-5 sm:mt-0">
          <button
            className={`text-sm text-ink transition-colors ${
              subscribed ? 'cursor-default text-muted' : 'hover:text-accent'
            }`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed ? 'Thank you' : 'Sign up →'}
          </button>
        </div>
      </form>
      {error && <div className="w-72 pt-2 text-sm text-accent sm:w-96">{message}</div>}
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="border-y border-rule py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)
