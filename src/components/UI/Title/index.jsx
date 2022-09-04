import React from 'react'

import moduleStyle from './title.module.scss'

const Title = ({ className, children, styles, custom = 2 }) => {
  const HeadingTag = `h${custom}`

  return (
    <HeadingTag
      style={{ ...styles }}
      className={`${moduleStyle.title} ${className}`}>
      {children}
    </HeadingTag>
  )
}

export default Title
