import { Request, Response } from "express";
import { Params, createURLString } from "../helpers/carbonsh";
import { getImagePath } from "../helpers/puppeteer";

interface RequestBody extends Params {}

export async function toCarbonSh(
  req: Request<{}, {}, RequestBody>,
  res: Response
) {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ error: "Missing code in body" });
  }

  try {
    const carbonURL = createURLString({ ...req.body });
    console.log(carbonURL);

    const imagePath = await getImagePath(carbonURL);
    res.sendFile(imagePath);

    return;
  } catch (e) {
    return res.status(500).json({ error: e });
  }
}
