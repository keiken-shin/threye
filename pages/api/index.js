// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { data } from "../../data";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { key } = req.query;
    const result = data.filter((item) => item.key.toLowerCase() === key);

    res.status(200).json({ result });
  } else if (req.method === "POST") {
    const result = req.body.data;
    data.push(result);
    res.status(201).json(result);
  }
}
