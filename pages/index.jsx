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
    transition: { delay: custom * 1 },
  }),
}
const drawAnimation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (custom) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: custom * 1,
        type: 'spring',
        duration: 1.5,
        bounce: 0,
      },
      opacity: { delay: custom * 1 },
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
        delay: custom * 1 + 1.2,
        type: 'spring',
        duration: 0.1,
        bounce: 0,
      },
      opacity: { delay: custom * 1 + 1.2 },
    },
  }),
}

const linePath = 'M44,21 C129,229 390,0 544,148'
const reverseLinePath = 'M544,75 C371,183 183,15 44,164'

const Homepage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: 0.5, duration: 1 }}>
        <Image src={backgroundPic} layout='fill' alt='florarium' />
      </motion.div>
      <motion.div
        initial='hidden'
        whileInView='visible'
        custom={2}
        viewport={{ once: true }}
        variants={backgroundAnimation}
        className={styles.background_wrapper}>
        <motion.span
          variants={helloAnimation}
          custom={3}
          className={styles.background_text}>
          <Title custom={1}>Hello, Nataraure!</Title>
        </motion.span>
        <motion.span
          variants={helloAnimation}
          custom={3.5}
          className={styles.background_text}>
          <Title>we are glad to see you!</Title>
        </motion.span>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1, once: true }}
        className={styles.index_content_wrapper}>
        <motion.span variants={helloAnimation} custom={0.2}>
          <Title className='text_center'>Процесс созидания</Title>
        </motion.span>
        <motion.div
          variants={textAnimation}
          custom={1}
          className={`${styles.content_text_wrapper}`}>
          <div className={styles.content_image_wrapper}>
            <span className={styles.content_text}>
              <Title>Step1</Title>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              illo, accusamus et dolor quisquam error delectus numquam animi
              praesentium, repudiandae ipsam minus, modi temporibus cum
              voluptatem architecto consequatur eveniet iusto odio ad fugit vel?
              Delectus, pariatur earum inventore harum rerum, deleniti,
              temporibus quam doloribus error et aut deserunt alias consequatur.
              Necessitatibus ea eos esse enim?
            </span>
            <Image
              src='https://picsum.photos/300/200'
              className={styles.content_text}
              width={300}
              height={200}
              alt='florarium'
            />
          </div>
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
          className={styles.content_text_wrapper}>
          <div className={`${styles.content_image_wrapper} ${styles.left}`}>
            <Image
              src='https://picsum.photos/300/200'
              width={300}
              height={200}
              alt='florarium'
            />
            <span className={`${styles.content_text} ${styles.right}`}>
              <Title>Step2</Title>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              illo, accusamus et dolor quisquam error delectus numquam animi
              praesentium, repudiandae ipsam minus, modi temporibus cum
              voluptatem architecto consequatur eveniet iusto odio ad fugit vel?
              Delectus, pariatur earum inventore harum rerum, deleniti,
              temporibus quam doloribus error et aut deserunt alias consequatur.
              Necessitatibus ea eos esse enim?
            </span>
          </div>
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
          className={styles.content_text_wrapper}>
          <div className={styles.content_image_wrapper}>
            <span className={styles.content_text}>
              <Title>Step3</Title>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              illo, accusamus et dolor quisquam error delectus numquam animi
              praesentium, repudiandae ipsam minus, modi temporibus cum
              voluptatem architecto consequatur eveniet iusto odio ad fugit vel?
              Delectus, pariatur earum inventore harum rerum, deleniti,
              temporibus quam doloribus error et aut deserunt alias consequatur.
              Necessitatibus ea eos esse enim?
            </span>
            <Image
              src='https://picsum.photos/300/200'
              width={300}
              height={200}
              alt='florarium'
            />
          </div>
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
          className={styles.content_text_wrapper}>
          <div className={`${styles.content_image_wrapper} ${styles.left}`}>
            <Image
              src='https://picsum.photos/300/200'
              width={300}
              height={200}
              alt='florarium'
            />
            <span className={`${styles.content_text} ${styles.right}`}>
              <Title>Step4</Title>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              illo, accusamus et dolor quisquam error delectus numquam animi
              praesentium, repudiandae ipsam minus, modi temporibus cum
              voluptatem architecto consequatur eveniet iusto odio ad fugit vel?
              Delectus, pariatur earum inventore harum rerum, deleniti,
              temporibus quam doloribus error et aut deserunt alias consequatur.
              Necessitatibus ea eos esse enim?
            </span>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Homepage
