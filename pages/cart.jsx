import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  editSubmitForm,
} from '../store/slices/cartSlice'

import styles from './pages.module.scss'
import Title from '../src/components/UI/Title'
import Button from '../src/components/UI/Button'
import Popup from '../src/components/Popup'
import ContactUs from '../src/components/ContactUs'
import ContactForm from '../src/components/ContactUs'
import Link from 'next/link'

import CardList from '../src/components/Card/CardList'
import { useRouter } from 'next/router'

const Cartpage = () => {
  const router = useRouter()
  const cart = useSelector((state) => state.cart.items)
  const isSubmitted = useSelector((state) => state.cart.isSubmitted)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.cost,
      0
    )
  }

  useEffect(() => {
    if (isSubmitted) {
      dispatch(editSubmitForm(false))
    }
  }, [router.pathname])

  if (isSubmitted && cart.length === 0) {
    return (
      <div className={styles.cart_wrapper}>
        <Title custom={1}>Ваша корзина пуста!</Title>
        <ContactForm withBackground={true} isSubmitted={isSubmitted} />
      </div>
    )
  }

  return (
    <div className={styles.cart_wrapper}>
      {cart.length === 0 && !isSubmitted ? (
        <>
          <Title custom={1}>Ваша корзина пуста!</Title>

          <Button className={styles.back_button}>
            <Link href='/items'>
              <a>К списку покупок</a>
            </Link>
          </Button>
        </>
      ) : (
        <>
          <Title custom={1}>Корзина</Title>
          <CardList cards={cart} isCartPage={true} />
          <div className={styles.cart_action_wrapper}>
            <Title custom={5} className={styles.cart_action_title}>
              Заказ на сумму: {getTotalPrice()} Р
            </Title>
            <div className={styles.cart_form_wrapper}>
              <ContactForm
                subject={'Кто-то хочет совершить покупку!'}
                cart={cart}
                buttonName={'Оформить заказ'}
                withBackground={true}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Cartpage
