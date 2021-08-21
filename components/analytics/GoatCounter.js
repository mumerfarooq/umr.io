import Script from 'next/script'

const GoatCounter = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://gc.zgo.at/count.js"
        data-goatcounter="https://umer.goatcounter.com/count"
      />
    </>
  )
}

export default GoatCounter
