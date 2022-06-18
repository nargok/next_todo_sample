// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await axios
    .post("http://localhost:8080/task/register", req.body)
    .catch((e) => console.error(e));
  res.status(200).json({});
}
