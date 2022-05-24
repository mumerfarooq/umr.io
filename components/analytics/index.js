import GA from './GoogleAnalytics'
import Plausible from './Plausible'
import SimpleAnalytics from './SimpleAnalytics'
import GoatCounter from './GoatCounter'
import Umami from './Umami'
import siteMetadata from '@/data/siteMetadata'
import Clarity from './Clarity'

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  return (
    <>
      {isProduction && siteMetadata.analytics.plausibleDataDomain && <Plausible />}
      {isProduction && siteMetadata.analytics.simpleAnalytics && <SimpleAnalytics />}
      {isProduction && siteMetadata.analytics.umamiWebsiteId && <Umami />}
      {isProduction && siteMetadata.analytics.googleAnalyticsId && <GA />}
      {isProduction && <GoatCounter />}
      {isProduction && <Clarity />}
    </>
  )
}

export default Analytics
