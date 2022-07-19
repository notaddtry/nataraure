import React, { useEffect } from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../store/slices/cartSlice'

import styles from './pages.module.scss'

const Cartpage = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.cost,
      0
    )
  }

  return (
    <div className={styles.cart_wrapper}>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          <div className={styles.items_wrapper}>
            {cart.map((item) => (
              <div className={styles.item} key={item.id}>
                <div className={styles.image}>
                  <Image
                    src='https://picsum.photos/300/200'
                    height='90'
                    width='65'
                  />
                </div>
                <p>{item.name}</p>
                <p>{item.cost} Р</p>
                <p>{item.quantity}</p>
                <div className={styles.buttons}>
                  <button
                    className='waves-effect waves-light btn pink accent-2'
                    onClick={() => dispatch(incrementQuantity(item.id))}>
                    <i class='material-icons'>add</i>
                  </button>
                  <button
                    className='waves-effect waves-light btn pink accent-2'
                    onClick={() => dispatch(decrementQuantity(item.id))}>
                    <i class='material-icons'>remove</i>
                  </button>
                  <button
                    className='waves-effect waves-light btn pink accent-2'
                    onClick={() => dispatch(removeFromCart(item.id))}>
                    <i class='material-icons'>delete</i>
                  </button>
                </div>
                <p>{item.quantity * item.cost} Р</p>
              </div>
            ))}
          </div>

          <h2>Grand Total: {getTotalPrice()} Р</h2>
        </>
      )}
    </div>
  )
}

export default Cartpage
