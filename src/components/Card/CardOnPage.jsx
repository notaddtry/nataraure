import React from 'react'

const CardOnPage = ({ name, img, desc, canBePurchased }) => {
  return (
    <>
      {name}
      <br />
      {desc}
    </>
  )
}

export default CardOnPage
