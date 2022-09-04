import React from 'react'

import OverlayingPopup from './OverlayingPopup'
import Title from '../UI/Title'

import styles from './popup.module.scss'

const Popup = ({ isOpened, title, onClose, className, children }) => {
  return (
    <OverlayingPopup isOpened={isOpened} onClose={onClose}>
      <div className={`${className} ${styles.popup_container}`}>
        <Title>{title}</Title>
        {children}
      </div>
    </OverlayingPopup>
  )
}

export default Popup
