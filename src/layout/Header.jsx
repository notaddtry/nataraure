import Link from 'next/link'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import useWindowSize from '../hooks'
import Image from 'next/image'
import LogoPic from '../../public/assets/logo.png'

import styles from './layout.module.scss'

const Header = () => {
  const [slider, setSlider] = useState(true)
  const [isReady, setReady] = useState(false)

  useEffect(() => {
    setSlider(false)
    setReady(true)
  }, [])

  if (!isReady) {
    return <span></span>
  }

  return (
    <header>
      <nav className='navbar-fixed lime'>
        <div className='nav-wrapper'>
          <Link href='/' className={`${styles.logo} brand-logo`}>
            <a>
              <Image src={LogoPic} alt='logo' width={80} height={60} />
            </a>
          </Link>
          <span
            className='sidenav-trigger hide-on-large-only'
            onClick={() => setSlider((s) => !s)}>
            <i className='material-icons'>menu</i>
          </span>
          <ul className='right hide-on-med-and-down'>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/items'>
                <a>Products</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
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
        <li className={styles.close_wrapper}>
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
