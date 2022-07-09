import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import CardOnPage from '../../src/components/Card/CardOnPage'

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/items`)
  const cards = await res.json()

  const paths = cards.map((card) => {
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

  const res = await fetch(`http://localhost:3000/api/items/${id}`)
  const card = await res.json()

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
  // const { data, error } = useSWR(`/api/items/${router.query.id}`, fetcher)

  // if (error) {
  //   return <h1>Ошибка загрузки,попробуйте позже</h1>
  // }
  // if (!data) {
  //   return <span>Загрузка...</span>
  // }

  return (
    <>
      <CardOnPage {...card} />
    </>
  )
}

export default Itempage
