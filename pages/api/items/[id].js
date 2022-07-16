/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

import CARDS from '../../../db.json'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const card = CARDS.find((item) => item.id === +req.query.id)
    res.json(card)
  }
}
