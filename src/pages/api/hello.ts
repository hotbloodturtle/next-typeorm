// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import "reflect-metadata";

import type { NextApiRequest, NextApiResponse } from 'next'
import {isInitialized, AppDataSource} from "@/database/data-source";
import {User} from "@/database/entities/user.entity";


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    await isInitialized;
    const users = await AppDataSource.getRepository(User).find()
  console.log(users)

  res.status(200).json({ name: 'John Doe', users: JSON.stringify({users: 'dfsdf'}) })
}
