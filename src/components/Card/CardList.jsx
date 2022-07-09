import React from 'react'
import useSWR from 'swr'
import Card from './Card'

import styles from './card.module.scss'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const CardList = () => {
  const { data, error } = useSWR('/api/items/', fetcher)

  if (error) {
    return <h1>Ошибка загрузки,попробуйте позже</h1>
  }
  if (!data) {
    return <span>Загрузка...</span>
  }

  return (
    <>
      <h2>Наши проекты</h2>
      <div className={styles.card_wrapper}>
        {data.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </>
  )
}

export default CardList
