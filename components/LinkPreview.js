import { useState, useEffect } from 'react'

const LinkPreview = ({ href, children, ...props }) => {
  const [preview, setPreview] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  // Check if href is a valid external URL
  const isValidUrl = (string) => {
    try {
      const url = new URL(string)
      return url.protocol === 'http:' || url.protocol === 'https:'
    } catch (_) {
      return false
    }
  }

  const isExternalUrl = isValidUrl(href)

  const fetchPreview = async (url) => {
    if (!isExternalUrl) return

    setIsLoading(true)
    try {
      const response = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`)
      const data = await response.json()
      setPreview(data)
    } catch (error) {
      console.error('Failed to fetch preview:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleMouseEnter = () => {
    if (isExternalUrl && !preview && !isLoading) {
      fetchPreview(href)
    }
    setShowPreview(true)
  }

  const handleMouseLeave = () => {
    setShowPreview(false)
  }

  return (
    <div className="relative inline-block">
      <a
        href={href}
        {...(isExternalUrl ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-primary-500 underline hover:text-primary-600 dark:hover:text-primary-400"
        {...props}
      >
        {children}
      </a>

      {showPreview && isExternalUrl && (preview || isLoading) && (
        <div
          className="absolute z-50 mt-2 w-80 rounded-lg border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800"
          style={{
            borderColor: preview?.themeColor ? `${preview.themeColor}40` : undefined,
            borderLeftWidth: preview?.themeColor ? '4px' : undefined,
          }}
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-500 border-t-transparent"></div>
              <span className="text-sm text-gray-500">Loading preview...</span>
            </div>
          ) : preview ? (
            <div className="space-y-3">
              {preview.image && (
                <img
                  src={preview.image}
                  alt={preview.title}
                  className="h-32 w-full rounded object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              )}
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  {preview.favicon && (
                    <img
                      src={preview.favicon}
                      alt=""
                      className="mt-0.5 h-4 w-4 flex-shrink-0"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  )}
                  <h3 className="line-clamp-2 text-sm font-semibold leading-tight text-gray-900 dark:text-gray-100">
                    {preview.title}
                  </h3>
                </div>
                {preview.description && (
                  <p className="line-clamp-3 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                    {preview.description}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-500">
                    {new URL(href).hostname}
                  </p>
                  {preview.themeColor && (
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: preview.themeColor }}
                    />
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}

export default LinkPreview
