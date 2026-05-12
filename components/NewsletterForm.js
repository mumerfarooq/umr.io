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
      <div className="pb-1 font-mono text-lg font-semibold uppercase tracking-[0.08em] text-stone-900 dark:text-stone-100">
        {title}
      </div>
      <form className="flex flex-col sm:flex-row" onSubmit={subscribe}>
        <div>
          <label className="sr-only" htmlFor="email-input">
            Email address
          </label>
          <input
            autoComplete="email"
            className="w-72 border border-stone-900 bg-yellow-100 px-4 py-2 text-sm text-stone-900 focus:border-signal-500 focus:outline-none focus:ring-2 focus:ring-signal-500 dark:border-stone-200 dark:bg-stone-900 dark:text-stone-100"
            id="email-input"
            name="email"
            placeholder={subscribed ? "You're subscribed !  🎉" : 'Enter your email'}
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <div className="mt-2 flex w-full sm:ml-3 sm:mt-0">
          <button
            className={`w-full border border-stone-900 bg-stone-900 px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-stone-50 dark:border-stone-200 dark:bg-stone-100 dark:text-stone-900 ${
              subscribed
                ? 'cursor-default opacity-80'
                : 'hover:bg-signal-600 hover:text-white dark:hover:bg-signal-300 dark:hover:text-stone-900'
            } focus:outline-none focus:ring-2 focus:ring-signal-500 focus:ring-offset-2 dark:ring-offset-stone-900`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed ? 'Thank you!' : 'Sign up'}
          </button>
        </div>
      </form>
      {error && (
        <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">{message}</div>
      )}
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="border border-stone-900 bg-yellow-50 p-6 dark:border-stone-200 dark:bg-stone-900 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)
