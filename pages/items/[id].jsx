import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../../src/components/UI/Button'
import Title from '../../src/components/UI/Title'
import { addToCart, removeFromCart } from '../../store/slices/cartSlice'
import db from '../../db.json'

import styles from './items.module.scss'

export async function getStaticPaths() {
  const paths = db.map((card) => {
    return {
      params: { id: card.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const card = db.find((item) => item.id === +id)

  if (!card) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      card,
    },
  }
}

const Itempage = ({ card }) => {
  const cart = useSelector((state) => state.cart.items)
  const cartItem = cart.find((item) => item.id === card.id)

  const dispatch = useDispatch()

  const addHandler = (e) => {
    e.preventDefault()
    dispatch(addToCart(card))
  }

  const removeHandler = (e) => {
    e.preventDefault()
    dispatch(removeFromCart(card.id))
  }

  return (
    <div className={styles.item_wrapper}>
      <div className={styles.item_content}>
        <Link href='/items'>
          <a className={styles.link}>
            <Button>
              <i className='material-icons'>arrow_back</i>
            </Button>
          </a>
        </Link>

        <Title custom={1} className={styles.title}>
          {card.name}
        </Title>
        <div className={styles.item_info}>
          <div className={styles.image}>
            <Image
              src='https://picsum.photos/300/200'
              width={300}
              height={200}
              alt='florarium'
            />
          </div>

          <span className={styles.desc}>
            {card.desc} Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae velit nesciunt laborum nemo voluptate. Laborum optio ducimus
            ea soluta. Facilis veritatis temporibus veniam, repellat dolor
            asperiores, laborum qui voluptatum, velit quis voluptate dolorum
            sequi commodi id itaque debitis illo hic sed. Nesciunt possimus
            consequuntur ratione obcaecati atque dicta! Est, distinctio.
          </span>
        </div>
      </div>

      <div className={styles.buy_wrapper}>
        <span className={styles.cost}>Цена: {card.cost}р</span>
        {cartItem?.quantity ? (
          <Button onSubmit={(e) => removeHandler(e)}>Удалить из корзины</Button>
        ) : (
          <Button onSubmit={(e) => addHandler(e)}>Добавить в корзину</Button>
        )}
      </div>
    </div>
  )
}

export default Itempage
