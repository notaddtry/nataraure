import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Title from '../src/components/Title'

import backgroundPic from '../public/assets/background.jpg'

import styles from './pages.module.scss'

const textAnimation = {
  hidden: {
    opacity: 0,
  },

  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 1 },
  }),
}
const backgroundAnimation = {
  hidden: {
    opacity: 0,
    background: 'rgba(0,0,0,0)',
  },
  visible: (custom) => ({
    opacity: 1,
    background: 'rgba(0, 0, 0, 0.25)',
    transition: { delay: custom * 1 },
  }),
}
const titleAnimation = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 1 },
  }),
}

const Homepage = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.parallax')
    M.Parallax.init(elems, {})
  }, [])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: 0.5, duration: 1 }}>
        <Image src={backgroundPic} layout='fill' />
      </motion.div>
      <motion.div
        initial='hidden'
        whileInView='visible'
        custom={2}
        viewport={{ amount: 0.2, once: true }}
        variants={backgroundAnimation}
        className={styles.background_wrapper}>
        <motion.h1
          variants={textAnimation}
          custom={3}
          className={styles.background_text}>
          Hello,Nataraure!
        </motion.h1>
        <motion.h2
          variants={textAnimation}
          custom={3.5}
          className={styles.background_text}>
          we are glad to see you!
        </motion.h2>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.2, once: true }}
        className={styles.index_content_wrapper}>
        <motion.span variants={titleAnimation} custom={1}>
          <Title>Step1</Title>
        </motion.span>
        <motion.span variants={titleAnimation} custom={2}>
          <Title>Step2</Title>
        </motion.span>
        <motion.span variants={titleAnimation} custom={3}>
          <Title>Step3</Title>
        </motion.span>
        <motion.span variants={titleAnimation} custom={4}>
          <Title>Step4</Title>
        </motion.span>
      </motion.div>
    </>
  )
}

export default Homepage
