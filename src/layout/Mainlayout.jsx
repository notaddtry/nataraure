import React from 'react'

import Footer from './Footer'
import Header from './Header'

import styles from './layout.module.scss'

const Mainlayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={`${styles.container} container`}>{children}</main>
      <Footer />
    </>
  )
}

export default Mainlayout
