import { Router } from "express";

export const routerDemo = Router();

routerDemo.get("", async (req, res) => {
  try {
    return res.send("hello word");
  } catch (err: any) {
    return res.status(500).send({ msg: err.message });
  }
});
