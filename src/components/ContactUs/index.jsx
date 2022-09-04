import React from 'react'
import { useDispatch } from 'react-redux'

import { useForm, ValidationError } from '@formspree/react'
import { deleteCart, editSubmitForm } from '../../../store/slices/cartSlice'
import Button from '../UI/Button'

import styles from './contactUs.module.scss'

export default function ContactForm({
  cart = [],
  subject = 'Кто-то хочет совершить покупку!',
  buttonName = 'Оставить заявку',
  withBackground = false,
  isSubmitted = false,
  submitText = 'Заявка отправлена',
}) {
  const cartData = {
    data: {
      subject: subject || 'Кто-то хочет с нами связаться',
    },
  }
  if (cart.length > 0) {
    cartData.data = {
      ...cartData.data,

      cart: function () {
        const cartItems = cart.map((item) => {
          return {
            'Имя продукта:': item.name,
            'Количество:': item.quantity,
            'Цена:': item.cost,
            'Финальная цена': item.cost * item.quantity,
          }
        })

        const totalPrice = cart.reduce(
          (accumulator, item) => accumulator + item.quantity * item.cost,
          0
        )

        return JSON.stringify(
          { ...cartItems, 'Итоговая сумма:': totalPrice },
          0,
          2
        )
      },
    }
  }

  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_ID,
    cartData
  )

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(deleteCart())
    dispatch(editSubmitForm(true))
    handleSubmit(e)
  }

  if (state.succeeded || isSubmitted) {
    return (
      <div
        className={
          withBackground ? styles.form_wrapper_background : styles.form_wrapper
        }>
        <p className={`${styles.thanks} sec_text`}>{submitText}</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className={
        withBackground ? styles.form_wrapper_background : styles.form_wrapper
      }>
      <div className='row'>
        <div className='input-field col s12'>
          <input id='email' type='email' name='email' />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
          <label htmlFor='email'>E-mail</label>
        </div>
        <div className='input-field col s12'>
          <textarea
            id='message'
            name='message'
            className='materialize-textarea'
          />
          <label htmlFor='message'>Сообщение</label>
        </div>
      </div>

      <Button type='submit' disabled={state.submitting}>
        {buttonName}
      </Button>

      <ValidationError errors={state.errors} />
    </form>
  )
}
