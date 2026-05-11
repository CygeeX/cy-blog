'use client'

import { useEffect } from 'react'

function Hello() {
  useEffect(() => {
    console.log(
      `welcome to my blog
`,
      'font-size: 16px',
    )
  }, [])

  return null
}

export default Hello
