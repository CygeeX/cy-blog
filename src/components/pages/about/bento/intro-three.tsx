import * as React from 'react'
import { cn } from '~/utils'
import IntroCard from './intro-card'

const IntroThree: React.FC = () => {
  return (
    <>
      <IntroCard
        className="col-span-1 h-[260px] rounded-3xl p-5 text-white backdrop-blur-xs md:col-span-1 lg:col-span-3"
        subheading="幸福感"
        title="捕捉美好瞬间"
        desc="感受生活"
        isColor
      >
        <div className={cn('absolute top-0 left-0 z-[-2] h-full w-full')}>
          <img
            className="w-full min-w-[260px] h-full object-cover"
            src="/images/about/life.jpg"
            alt="Life"
          />
        </div>
      </IntroCard>
      <IntroCard
        className="col-span-1 h-[165px] rounded-3xl p-5 text-white backdrop-blur-xs sm:h-[260px] md:col-span-3 lg:col-span-5"
        subheading="爱好"
        title="GUITAR 吉他"
        desc="乐器"
        isColor
      >
        <div className={cn('absolute top-0 left-0 z-[-2] h-full w-full')}>
          <img
            className="min-h-full w-full min-w-65 object-cover"
            src="/images/about/guitar.jpg"
            alt="Guitar"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
      </IntroCard>
    </>
  )
}

export default IntroThree
