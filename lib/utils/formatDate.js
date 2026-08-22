import siteMetadata from '@/data/siteMetadata'

const formatDate = (date, { month = 'long' } = {}) =>
  new Date(date).toLocaleDateString(siteMetadata.locale, {
    year: 'numeric',
    month,
    day: 'numeric',
  })

export default formatDate
