import React from 'react'
import Link from 'next/link'

import Button from '../src/components/UI/Button'
import { useRouter } from 'next/router'

const Undefined = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <div>
      <h1>Page is undefined...</h1>
      <Button
        onSubmit={handleClick}
        styles={{ margin: '3rem auto 0', display: 'block' }}>
        Back to homepage
      </Button>
    </div>
  )
}

export default Undefined
