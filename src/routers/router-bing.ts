import { Router } from "express";
import { request } from "@/api/request";

export const routerBing = Router();

routerBing.get("", async (req, res) => {
  console.log(req);

  try {
    const data = await request({
      url: "https://cn.bing.com/HPImageArchive.aspx",
      params: {
        idx: 0,
        n: 1,
        format: "js",
      },
    });
    return res.send(data);
  } catch (err: any) {
    return res.status(500).send({ msg: err.message });
  }
});
