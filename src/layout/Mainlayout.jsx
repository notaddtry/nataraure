import React from 'react'
import { useTransform, motion, useViewportScroll } from 'framer-motion'

import Footer from './Footer'
import Header from './Header'

import styles from './layout.module.scss'

const Mainlayout = ({ children }) => {
  const { scrollY } = useViewportScroll()
  

  return (
    <>
      <Header scrollY={scrollY}  />
      <main className={`${styles.container} container`}>{children}</main>
      <Footer />
    </>
  )
}

export default Mainlayout
