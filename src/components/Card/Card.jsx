import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './card.module.scss'

const Card = ({ canBePurchased, id, name, img, desc }) => {
  return (
    <div className='row'>
      <div className='col s12'>
        <div className={`${styles.card} card`}>
          <div className='card-image'>
            <Image src='https://picsum.photos/300/200' width={300} height={200}/>
          </div>
          <div className={`${styles.card_content} card-content`}>
            <span className='card-title'>{name}</span>
            <p>{desc}</p>
          </div>
          <div className='card-action'>
            <Link href={`/items/${id}`}>
              <a>Посмотри меня</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
