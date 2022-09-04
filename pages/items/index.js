import React from 'react'

import CardList from '../../src/components/Card/CardList'
import db from '../../db.json'

export async function getStaticProps() {
  const cards = db

  if (!cards) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      cards,
    },
  }
}

const Itemspage = ({ cards }) => {
  return (
    <>
      <CardList cards={cards} />
    </>
  )
}

export default Itemspage
