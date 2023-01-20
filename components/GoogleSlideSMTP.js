import React from 'react'

const GoogleSlideSMTP = (url) => {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: `
        <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
        padding-bottom: 48px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
        border-radius: 8px; will-change: transform;">
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTqh5GeKkLKf_Pdgb9sE4UJzlQqgjnLUWyVglERVsvjYnKwSa85evUZuy71RSZ0u-ZH_w2kBu2hjbfr/embed?start=true&loop=true&delayms=3000" frameborder="0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>
       `,
        }}
      />
    </div>
  )
}

export default GoogleSlideSMTP
