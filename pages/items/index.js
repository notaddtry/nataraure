import React from 'react'
import CardList from '../../src/components/Card/CardList'
import SectionWrapper from '../../src/components/Section/SectionWrapper'

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`http://localhost:3000/api/items`)
  const cards = await res.json()

  if (!cards) {
    return {
      notFound: true,
    }
  }
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
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
