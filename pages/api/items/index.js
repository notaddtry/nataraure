/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

const CARDS = [
  {
    id: 1,
    name: 'Флорариум 1',
    desc: 'Очень классный флорариум',
    img: '/src...',
    canBePurchased: true,
  },
  {
    id: 2,
    name: 'Флорариум 2',
    desc: 'Очень классный флорариум2',
    img: '/src...',
    canBePurchased: true,
  },
  {
    id: 3,
    name: 'Флорариум 3',
    desc: 'Очень классный флорариум3',
    img: '/src...',
    canBePurchased: true,
  },
  {
    id: 4,
    name: 'Флорариум 4',
    desc: 'Очень классный флорариум4',
    img: '/src...',
    canBePurchased: true,
  },
]

export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.json(CARDS)
  }
}
