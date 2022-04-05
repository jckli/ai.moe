import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  ping: string
  time: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    res.status(200).json({ 
        ping: "pong",
        time: Date.now()
    })
}
