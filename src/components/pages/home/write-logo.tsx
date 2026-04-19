import * as React from 'react'
import '~/styles/page/write-logo.css'

interface WriteLogoProps {
  className?: string
}

const WriteLogo: React.FC<WriteLogoProps> = ({ className }) => {
  return (
    <svg
      id="eGgXFSmcNq71"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 60"
    >
      <text x="10" y="45">Gorge</text>
    </svg>
  )
}

export default WriteLogo
