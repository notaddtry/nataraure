import React from 'react'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import ContactUs from '../src/components/ContactUs'
import Title from '../src/components/UI/Title'
import Map from '../src/components/Map'
import PhonePic from '../public/assets/phone.png'

import styles from './pages.module.scss'

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
            rel='noreferrer'>
            <span>
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp:{' '}
            </span>

            <span>8-985-140-12-00</span>
          </a>
        </div>
        <div className={`${styles.img_wrapper} hide-on-med-and-down`}>
          {PHONE_LINES.map((line) => (
            <div className={`${styles['line_' + line.id]}`} key={line.id}>
              <Image
                src={line.path}
                id={line.id}
                width={20}
                height={line.height}
                alt='phone_line'
              />
            </div>
          ))}
          <div className={styles.phone}>
            <Image src={PhonePic} width={300} height={450} alt='phone' />
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

      <div className={styles.contactus_wrapper}>
        <Title custom={2}>Оставьте контакты,мы свяжемся с Вами!</Title>
        <ContactUs buttonName={'Оформить заявку'} withBackground={true} />
      </div>
    </div>
  )
}

export default Contactpage
