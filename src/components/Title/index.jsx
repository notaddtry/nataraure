import React from 'react'

import moduleStyle from './title.module.scss'

const Title = ({ className, children, styles }) => {
  const propStyles = { ...styles }

  return (
    <h2 style={{ ...styles }} className={`${moduleStyle.title} ${className}`}>
      {children}
    </h2>
  )
}

export default Title
