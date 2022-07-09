import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import CardOnPage from '../../src/components/Card/CardOnPage'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Itempage = () => {
  const router = useRouter()
  const { data, error } = useSWR(`/api/items/${router.query.id}`, fetcher)

  if (error) {
    return <h1>Ошибка загрузки,попробуйте позже</h1>
  }
  if (!data) {
    return <span>Загрузка...</span>
  }

  return (
    <div>
      <CardOnPage {...data} />
    </div>
  )
}

export default Itempage
