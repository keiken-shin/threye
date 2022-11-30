// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { data } from "../../data";
import { arrangeData } from "../../utils";

export default function handler(req, res) {
  if (req.method === "GET") {
    const result = arrangeData(data);

    res.status(200).json({ result });
  } else if (req.method === "POST") {
    const result = req.body.data;
    const getItem = data.filter((item) => item.key === result.key);
    data[data.indexOf(getItem[0])] = result;

    res.status(201).json(result);
  }
}
