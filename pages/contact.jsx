import React, { useState } from 'react'
import Map from '../src/components/Map'
import Title from '../src/components/Title'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import PhonePic from '../public/assets/phone.png'

import styles from './pages.module.scss'
import Image from 'next/image'
import Popup from '../src/components/Popup'
import ContactUs from '../src/components/ContactUs'

const PHONE_LINES = [
  {
    id: '1',
    path: '/assets/1.png',
    height: '120',
  },
  {
    id: '2',
    path: '/assets/2.png',
    height: '90',
  },
  {
    id: '3',
    path: '/assets/3.png',
    height: '60',
  },
  {
    id: '4',
    path: '/assets/4.png',
    height: '60',
  },
  {
    id: '5',
    path: '/assets/5.png',
    height: '90',
  },
  {
    id: '6',
    path: '/assets/6.png',
    height: '120',
  },
]

function Contactpage() {
  const [isOpen, setOpen] = useState(false)

  const onClose = (e) => {
    e.preventDefault()
    setOpen(false)
  }

  return (
    <div className={`${styles.contact} row`}>
      <Title custom={1}>Контакты</Title>
      <div className={`${styles.info_wrapper} col s12`}>
        <div className={styles.info_content_wrapper}>
          <a
            href='tel:+79851401200'
            className={`${styles.info_content} pink-text text-accent-2`}>
            <span style={{ color: 'inherit' }}>
              <i className='material-icons'>local_phone</i> Телефон:{' '}
            </span>
            <span>8-985-140-12-00</span>
          </a>
          <a
            className={`${styles.info_content} pink-text text-accent-2 `}
            href='https://api.whatsapp.com/send?phone=89851401200'
            target='_blank'
            rel='noopener'>
            <span>
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp:{' '}
            </span>

            <span>8-985-140-12-00</span>
          </a>
          {/* <a
              className={`${styles.info_wrapper} col s6`}
              href='mailto:nataraure@mail.ru'>
              <FontAwesomeIcon icon={faEnvelope} />{' '}
              <span>nataraure@mail.ru</span>
            </a> */}
        </div>
        <div className={`${styles.img_wrapper} hide-on-med-and-down`}>
          {PHONE_LINES.map((line) => (
            <div className={`${styles['line_' + line.id]}`} key={line.id}>
              <Image
                src={line.path}
                id={line.id}
                width={20}
                height={line.height}
              />
            </div>
          ))}
          <div className={styles.phone}>
            <Image src={PhonePic} width={300} height={450} />
          </div>
        </div>
      </div>
      <div className={styles.map_wrapper}>
        <span>
          <FontAwesomeIcon icon={faMapLocation} /> Адрес:{' '}
          <span>г.Москва, улица Чертановская, д.21, к.1</span>
        </span>
        <div className={styles.map}>
          <Map />
        </div>
      </div>
      <button onClick={() => setOpen(true)}>Click me</button>

      <Popup isOpened={isOpen} onClose={onClose} title={'Contact!'}>
        <ContactUs />
      </Popup>
    </div>
  )
}

export default Contactpage
