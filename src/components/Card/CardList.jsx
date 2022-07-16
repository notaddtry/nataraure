import React from 'react'
import useSWR from 'swr'
import Title from '../Title'
import Card from './Card'

import styles from './card.module.scss'

// const fetcher = (...args) => fetch(...args).then((res) => res.json())

const CardList = ({ cards }) => {
  // const { data, error } = useSWR('/api/items/', fetcher)

  // if (error) {
  //   return <h1>Ошибка загрузки,попробуйте позже</h1>
  // }
  // if (!data) {
  //   return <span>Загрузка...</span>
  // }

  return (
    <>
      <Title custom={1}>Наши проекты</Title>
      <div className={styles.card_wrapper}>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </>
  )
}

export default CardList
