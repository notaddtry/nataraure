import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Title from '../src/components/Title'

import backgroundPic from '../public/assets/background.jpg'

import styles from './pages.module.scss'
import LineWithArrow from '../src/components/LineWithArrow'

const helloAnimation = {
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
const textAnimation = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 10,
    opacity: 1,
    transition: { delay: custom * 0.5 },
  }),
}
const drawAnimation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (custom) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: custom * 0.5,
        type: 'spring',
        duration: 1.5,
        bounce: 0,
      },
      opacity: { delay: custom * 0.5 },
    },
  }),
}
const triangleAnimation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (custom) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: custom * 0.5 + 1.2,
        type: 'spring',
        duration: 0.1,
        bounce: 0,
      },
      opacity: { delay: custom * 0.5 + 1.2 },
    },
  }),
}

const linePath = 'M44,21 C129,229 390,0 544,148'
const reverseLinePath = 'M544,75 C371,183 183,15 44,164'

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
          variants={helloAnimation}
          custom={3}
          className={styles.background_text}>
          Hello, Nataraure!
        </motion.h1>
        <motion.h2
          variants={helloAnimation}
          custom={3.5}
          className={styles.background_text}>
          we are glad to see you!
        </motion.h2>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.3 }}
        className={styles.index_content_wrapper}>
        <motion.div
          variants={textAnimation}
          custom={1}
          className={`${styles.content_text_wrapper}`}>
          <Title>Step1</Title>
        </motion.div>
        <LineWithArrow
          triangleAnimation={triangleAnimation}
          drawAnimation={drawAnimation}
          id={1}
          linePath={linePath}
          custom={1}
        />
        <motion.div
          variants={textAnimation}
          custom={3}
          className={`${styles.content_text_wrapper} right_children`}>
          <Title>Step2</Title>
        </motion.div>
        <LineWithArrow
          triangleAnimation={triangleAnimation}
          drawAnimation={drawAnimation}
          id={3}
          linePath={reverseLinePath}
          custom={3}
        />
        <motion.div
          variants={textAnimation}
          custom={5}
          className={`${styles.content_text_wrapper}`}>
          <Title>Step3</Title>
        </motion.div>
        <LineWithArrow
          triangleAnimation={triangleAnimation}
          drawAnimation={drawAnimation}
          id={5}
          linePath={linePath}
          custom={5}
        />
        <motion.div
          variants={textAnimation}
          custom={7}
          className={`${styles.content_text_wrapper} right_children`}>
          <Title>Step4</Title>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Homepage
