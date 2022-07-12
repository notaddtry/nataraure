import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './card.module.scss'

const Card = ({ canBePurchased, id, name, img, desc, cost }) => {
  return (
    <div className='row'>
      <div className='col s12'>
        <div className={`${styles.card} card hoverable`}>
          <div className='card-image'>
            <Image
              src='https://picsum.photos/300/200'
              width={300}
              height={200}
              alt='florarium'
            />
          </div>
          <div className={`${styles.card_content} card-content`}>
            <span className='card-title'>{name}</span>
          </div>

          <div className={styles.buy_wrapper}>
            <span className={styles.cost}>Цена: {cost}р</span>
            <button className='waves-effect waves-light btn  pink accent-2 right'>
              <i className='material-icons'>shopping_cart</i>
            </button>
          </div>
          <div className={`${styles.card_action} card-action`}>
            <Link href={`/items/${id}`}>
              <a className='pink-text text-accent-2 remove_margin'>
                Прочитай про меня
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
