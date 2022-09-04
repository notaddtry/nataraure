import React from 'react'

import Title from '../UI/Title'
import Card from './Card'
import CardOnCartPage from './CardOnCartPage'

import styles from './card.module.scss'

const CardList = ({ cards, isCartPage = false }) => {
  return (
    <>
      {!isCartPage && <Title custom={1}>Наши проекты</Title>}
      <div className={styles.card_wrapper}>
        {cards.map((card) =>
          !isCartPage ? (
            <Card key={card.id} {...card} />
          ) : (
            <CardOnCartPage key={card.id} {...card} />
          )
        )}
      </div>
    </>
  )
}

export default CardList
