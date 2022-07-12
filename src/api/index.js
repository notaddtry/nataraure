import CARDS from '../../db.json'

export const getAllFrolarium = async () => {
  return CARDS
}

export const getOneFrolarium = async () => {
  const card = CARDS.find((item) => item.id === +req.query.id)
  return card
}
