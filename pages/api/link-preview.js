export default async function handler(req, res) {
  const { url } = req.query

  if (!url) {
    return res.status(400).json({ error: 'URL is required' })
  }

  try {
    const urlObj = new URL(url)
    const domain = urlObj.hostname.toLowerCase()

    // Special handling for different domains
    let headers = {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      'Accept-Encoding': 'gzip, deflate',
      Connection: 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
    }

    // Special headers for Wikipedia
    if (domain.includes('wikipedia.org')) {
      headers['User-Agent'] = 'Mozilla/5.0 (compatible; LinkPreview/1.0; +https://example.com/bot)'
    }

    const response = await fetch(url, { headers })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const html = await response.text()

    // Enhanced HTML parsing to extract metadata
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
    const descriptionMatch = html.match(
      /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i
    )
    const ogImageMatch = html.match(
      /<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i
    )
    const ogTitleMatch = html.match(
      /<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i
    )
    const ogDescriptionMatch = html.match(
      /<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i
    )
    const twitterTitleMatch = html.match(
      /<meta[^>]*name=["']twitter:title["'][^>]*content=["']([^"']+)["']/i
    )
    const twitterDescriptionMatch = html.match(
      /<meta[^>]*name=["']twitter:description["'][^>]*content=["']([^"']+)["']/i
    )
    const twitterImageMatch = html.match(
      /<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["']/i
    )

    // Extract favicon
    const faviconMatch = html.match(
      /<link[^>]*rel=["'](?:shortcut )?icon["'][^>]*href=["']([^"']+)["']/i
    )
    const appleTouchIconMatch = html.match(
      /<link[^>]*rel=["']apple-touch-icon["'][^>]*href=["']([^"']+)["']/i
    )

    // Extract theme color
    const themeColorMatch = html.match(
      /<meta[^>]*name=["']theme-color["'][^>]*content=["']([^"']+)["']/i
    )

    // Special handling for Wikipedia
    let title = ''
    let description = ''

    if (domain.includes('wikipedia.org')) {
      // Wikipedia specific parsing
      const wikiTitleMatch = html.match(
        /<h1[^>]*class=["'][^"']*firstHeading[^"']*["'][^>]*>([^<]+)<\/h1>/i
      )
      const wikiDescriptionMatch = html.match(
        /<div[^>]*class=["'][^"']*mw-parser-output[^"']*["'][^>]*>[\s\S]*?<p[^>]*>([^<]+)<\/p>/i
      )

      title = wikiTitleMatch?.[1] || titleMatch?.[1] || 'Wikipedia Article'
      description = wikiDescriptionMatch?.[1] || descriptionMatch?.[1] || 'Wikipedia article'

      // Clean Wikipedia title (remove " - Wikipedia" suffix)
      title = title.replace(/\s*-\s*Wikipedia.*$/i, '').trim()
    } else {
      // Standard parsing for other sites
      title = ogTitleMatch?.[1] || twitterTitleMatch?.[1] || titleMatch?.[1] || 'No title'
      description =
        ogDescriptionMatch?.[1] || twitterDescriptionMatch?.[1] || descriptionMatch?.[1] || ''
    }

    // Clean HTML entities
    const cleanText = (text) => {
      return text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .trim()
    }

    title = cleanText(title)
    description = cleanText(description)

    const image = (ogImageMatch?.[1] || twitterImageMatch?.[1] || '').trim()

    const favicon = (faviconMatch?.[1] || appleTouchIconMatch?.[1] || '').trim()

    const themeColor = themeColorMatch?.[1]?.trim() || ''

    // Make relative URLs absolute
    const makeAbsolute = (url, base) => {
      if (!url) return ''
      if (url.startsWith('http')) return url
      if (url.startsWith('//')) return `https:${url}`
      if (url.startsWith('/')) return new URL(url, base).href
      return new URL(url, base).href
    }

    const baseUrl = new URL(url).origin
    const absoluteImage = makeAbsolute(image, baseUrl)
    const absoluteFavicon = makeAbsolute(favicon, baseUrl)

    // Special favicon for Wikipedia if none found
    let finalFavicon = absoluteFavicon
    if (domain.includes('wikipedia.org') && !finalFavicon) {
      finalFavicon = 'https://en.wikipedia.org/static/favicon/wikipedia.ico'
    }

    res.json({
      title,
      description,
      image: absoluteImage,
      favicon: finalFavicon,
      themeColor,
      url: url,
      domain: domain,
    })
  } catch (error) {
    console.error('Error fetching preview:', error)
    res.status(500).json({ error: 'Failed to fetch preview' })
  }
}
