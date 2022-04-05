// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { ACCESS_TOKEN } from "../../../config"
import { Posts } from "../../../util/types"

type Data = {
  data: any[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const address = `https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${ACCESS_TOKEN}`;
  const response = await fetch(address);
  const json: Posts = await response.json();
  res.status(200).json(json);
}
