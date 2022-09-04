import React from 'react'
import Image from 'next/image'

import { useDispatch } from 'react-redux'
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../../store/slices/cartSlice'
import Button from '../UI/Button'

import styles from './card.module.scss'

const CardOnCartPage = ({
  name,
  id,
  img,
  desc,
  canBePurchased,
  cost,
  quantity,
}) => {
  const dispatch = useDispatch()

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

          <div className={styles.buy_info_wrapper}>
            <span className={styles.cost}>Цена: {cost}р</span>
            <span className={styles.quantity}>Количество: {quantity}</span>
          </div>

          <div className={styles.buttons}>
            <Button
              icon={'add'}
              onSubmit={() => dispatch(incrementQuantity(id))}
            />
            <Button
              icon={'remove'}
              onSubmit={() => dispatch(decrementQuantity(id))}
            />
            <Button
              icon={'delete'}
              onSubmit={() => dispatch(removeFromCart(id))}
            />
          </div>

          <span className={styles.final_sum}>Итог: {quantity * cost} Р</span>
        </div>
      </div>
    </div>
  )
}

export default CardOnCartPage
