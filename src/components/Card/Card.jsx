import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { addToCart, removeFromCart } from '../../../store/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../UI/Button'

import styles from './card.module.scss'

const Card = (props) => {
  const { canBePurchased, id, name, img, desc, cost } = props

  const cart = useSelector((state) => state.cart.items)
  const cartItem = cart.find((item) => item.id === id)

  const dispatch = useDispatch()

  const addHandler = (e) => {
    e.preventDefault()
    dispatch(addToCart(props))
  }

  const removeHandler = (e) => {
    e.preventDefault()
    dispatch(removeFromCart(id))
  }

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
            {cartItem?.quantity ? (
              <Button
                className='right'
                icon={'delete'}
                onSubmit={(e) => removeHandler(e)}
              />
            ) : (
              <Button
                className='right'
                icon={'shopping_cart'}
                onSubmit={(e) => addHandler(e)}
              />
            )}
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
