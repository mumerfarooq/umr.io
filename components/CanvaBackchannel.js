import React from 'react'

const CanvaBackchannel = (url) => {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: `
        <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
        padding-bottom: 48px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
        border-radius: 8px; will-change: transform;">
         <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
           src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE6QKYMy3k&#x2F;6gAW5qSez8JmZgYSH3Z-iA&#x2F;view?embed">
         </iframe>
        </div>
       `,
        }}
      />
    </div>
  )
}

export default CanvaBackchannel
