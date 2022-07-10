import Link from 'next/link'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useTransform, motion, useAnimation } from 'framer-motion'
import useWindowSize from '../hooks'
import Image from 'next/image'
import LogoPic from '../../public/assets/logo.png'

import styles from './layout.module.scss'
import { useRouter } from 'next/router'

const Header = ({ scrollY }) => {
  const router = useRouter()
  const [slider, setSlider] = useState(true)
  const [isReady, setReady] = useState(false)

  const backgroundColors = ['rgba(0,0,0,0)', '#cddc39']
  const textColors = ['rgba(0, 0, 0, 0.87)', '#fff']
  const reverseTextColors = ['#fff', 'rgba(0, 0, 0, 0.87)']
  const boxShadows = [
    '0 2px 2px 0 rgba(0,0,0,0), 0 3px 1px -2px rgba(0,0,0,0), 0 1px 5px 0 rgba(0,0,0,0)',
    '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
  ]
  const backgroundOffsetY = [0, 200]
  const colorOffsetY = [0, 50]
  const background = useTransform(scrollY, backgroundOffsetY, backgroundColors)
  const boxShadow = useTransform(scrollY, backgroundOffsetY, boxShadows)
  const color = useTransform(scrollY, colorOffsetY, textColors)
  const reverseColor = useTransform(scrollY, colorOffsetY, reverseTextColors)

  useEffect(() => {
    setSlider(false)
    setReady(true)
  }, [])

  if (!isReady) {
    return <span></span>
  }

  return (
    <header className='navbar-fixed'>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: 2 }}
        style={{ background, boxShadow }}>
        <div className='nav-wrapper'>
          <Link href='/' className={`${styles.logo} brand-logo`}>
            <a>
              <Image src={LogoPic} alt='logo' width={80} height={60} />
            </a>
          </Link>
          <span
            className={`${styles.burger} sidenav-trigger hide-on-large-only`}
            onClick={() => setSlider((s) => !s)}>
            <i className='material-icons'>menu</i>
          </span>
          <ul className='right hide-on-med-and-down'>
            <li>
              <Link href='/about'>
                <motion.a
                  style={
                    router.pathname === '/' ? { color: '#fff' } : { color }
                  }>
                  About
                </motion.a>
              </Link>
            </li>
            <li>
              <Link href='/items'>
                <motion.a
                  style={
                    router.pathname === '/' ? { color: '#fff' } : { color }
                  }>
                  Products
                </motion.a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <motion.a
                  style={
                    router.pathname === '/' ? { color: '#fff' } : { color }
                  }>
                  Contact
                </motion.a>
              </Link>
            </li>
          </ul>
        </div>
      </motion.nav>
      <div
        className='sidenav-overlay'
        onClick={() => setSlider((s) => !s)}
        style={{
          display: slider ? 'block' : 'none',
          opacity: '1',
        }}
      />
      <ul
        id='slide-out'
        className='sidenav'
        style={{
          transform: slider ? 'translateX(0%)' : '',
          transitionProperty: 'transform',
          transitionDuration: '.25s',
        }}>
        <li className={`${styles.close_wrapper} ${styles.burger}`}>
          <div className={styles.close} onClick={() => setSlider((s) => !s)}>
            <i className='material-icons'>close</i>
          </div>
        </li>
        <li>
          <Link href='/'>
            <a onClick={() => setSlider((s) => !s)}>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a onClick={() => setSlider((s) => !s)}>About us</a>
          </Link>
        </li>
        <li>
          <Link href='/items'>
            <a onClick={() => setSlider((s) => !s)}>Products</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a onClick={() => setSlider((s) => !s)}>Contact</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
