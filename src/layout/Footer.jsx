import React from 'react'

import styles from './layout.module.scss'

const Footer = () => {
  return (
    <footer className={`${styles.footer} page-footer lime darken-1`}>
      <div className='footer-copyright'>
        <div className='container'>© 2022 Copyright Text</div>
      </div>
    </footer>
  )
}

export default Footer
