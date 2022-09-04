import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image'
import { useTransform, motion } from 'framer-motion'

import LogoPic from '../../public/assets/logo.png'

import styles from './layout.module.scss'

const Header = ({ scrollY }) => {
  const router = useRouter()
  const [slider, setSlider] = useState(true)
  const [isReady, setReady] = useState(false)
  const isMain = useMemo(() => {
    if (router.pathname !== '/') {
      return false
    } else {
      return true
    }
  }, [router.pathname])

  const backgroundColors = ['rgba(0,0,0,0)', '#cddc39']
  const textColors = ['rgba(0, 0, 0, 0.87)', '#fff']
  const boxShadows = [
    '0 2px 2px 0 rgba(0,0,0,0), 0 3px 1px -2px rgba(0,0,0,0), 0 1px 5px 0 rgba(0,0,0,0)',
    '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
  ]
  const OffsetY = [0, 100]
  const background = useTransform(scrollY, OffsetY, backgroundColors)
  const boxShadow = useTransform(scrollY, OffsetY, boxShadows)
  const color = useTransform(scrollY, OffsetY, textColors)

  const cart = useSelector((state) => state.cart.items)

  useEffect(() => {
    setSlider(false)
    setReady(true)
  }, [])

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0)
  }

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
          <Link href='/'>
            <a className={`${styles.logo} brand-logo`}>
              <Image src={LogoPic} alt='logo' width={80} height={60} />
            </a>
          </Link>

          <motion.span
            style={{ color }}
            className={`${styles.burger} sidenav-trigger hide-on-large-only`}
            onClick={() => setSlider((s) => !s)}>
            <motion.i
              className='material-icons'
              style={isMain ? { color: '#fff' } : { color: 'inherit' }}>
              menu
            </motion.i>
          </motion.span>
          <ul
            className={`${styles.links_wrapper} right hide-on-med-and-down text_bold`}>
            <motion.li style={{ color }}>
              <Link href='/about'>
                <a style={isMain ? { color: '#fff' } : { color: 'inherit' }}>
                  О нас
                </a>
              </Link>
            </motion.li>
            <motion.li style={{ color }}>
              <Link href='/items'>
                <a style={isMain ? { color: '#fff' } : { color: 'inherit' }}>
                  Флорариумы
                </a>
              </Link>
            </motion.li>
            <motion.li style={{ color }}>
              <Link href='/contact'>
                <a style={isMain ? { color: '#fff' } : { color: 'inherit' }}>
                  Контакты
                </a>
              </Link>
            </motion.li>
            <motion.li className={styles.cart} style={{ color }}>
              <Link href='/cart'>
                <a style={isMain ? { color: '#fff' } : { color: 'inherit' }}>
                  <i className='material-icons'>shopping_cart</i>
                  {cart.length ? (
                    <div className={styles.label}>{getItemsCount()}</div>
                  ) : null}
                </a>
              </Link>
            </motion.li>
          </ul>

          <motion.span
            style={{ color }}
            className={`${styles.cart_mobile} hide-on-large-only right`}>
            <Link href='/cart'>
              <a style={isMain ? { color: '#fff' } : { color: 'inherit' }}>
                <i className='material-icons'>shopping_cart</i>
                {cart.length ? (
                  <div className={styles.label}>{getItemsCount()}</div>
                ) : null}
              </a>
            </Link>
          </motion.span>
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
            <a onClick={() => setSlider((s) => !s)}>Главная</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a onClick={() => setSlider((s) => !s)}>О нас</a>
          </Link>
        </li>
        <li>
          <Link href='/items'>
            <a onClick={() => setSlider((s) => !s)}>Флорариумы</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a onClick={() => setSlider((s) => !s)}>Контакты</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
