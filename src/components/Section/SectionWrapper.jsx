import React from 'react'

import styles from './info.module.scss'

const SectionWrapper = ({ children }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
    </section>
  )
}

export default SectionWrapper
