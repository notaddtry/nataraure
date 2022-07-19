import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { addToCart, removeFromCart } from '../../../store/slices/cartSlice'

import styles from './card.module.scss'
import { useDispatch, useSelector } from 'react-redux'

const Card = (props) => {
  const { canBePurchased, id, name, img, desc, cost } = props

  const cart = useSelector((state) => state.cart)
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
              <button
                className='waves-effect waves-light btn pink accent-2 right'
                onClick={(e) => removeHandler(e)}>
                <i className='material-icons'>delete</i>
              </button>
            ) : (
              <button
                className='waves-effect waves-light btn pink accent-2 right'
                onClick={(e) => addHandler(e)}>
                <i className='material-icons'>shopping_cart</i>
              </button>
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
