import { RequestHandler } from "express";

export const log: RequestHandler = (req, res, next) => {
  console.log(req.url);
  return next();
};
