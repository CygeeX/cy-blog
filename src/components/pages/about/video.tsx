'use client'
import Image from 'next/image'

interface VideoFallbackProps {
  className?: string
  fallbackImageSrc: string
}

const VideoFallback: React.FC<VideoFallbackProps> = ({
  className,
  fallbackImageSrc,
}) => {
  return (
    <div className={className}>
      <Image
        src={fallbackImageSrc}
        alt="Fallback Image"
        width={600}
        height={400}
        priority
      />
    </div>
  )
}

export default VideoFallback
