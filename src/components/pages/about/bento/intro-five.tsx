import * as React from 'react'
import QuoteCard from '../quote-card'
import IntroCard from './intro-card'

const IntroFive: React.FC = () => {
  return (
    <>
      <IntroCard
        className="col-span-1 flex h-56 items-center justify-center rounded-3xl bg-[#FDE047] text-[110px] backdrop-blur-xs md:col-span-2 lg:col-span-3"
        isColor
      >
        😆
      </IntroCard>
      <QuoteCard
        className="col-span-1 h-56 rounded-3xl backdrop-blur-xs md:col-span-2 lg:col-span-5"
        by="me"
      >
        按住w往前走
      </QuoteCard>
    </>
  )
}

export default IntroFive
