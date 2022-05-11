import type { NextApiRequest, NextApiResponse } from 'next'
import { Blog } from '..'
import { client } from '../../libs/client'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await client.getList<Blog>({ endpoint: "blog", queries: {q: req.body.q} });
  res.status(200).json(data);
}

export default handler;
