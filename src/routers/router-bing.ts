import Router from "@koa/router";
import { get_bing } from "@/api";

export const bing = new Router();

bing.prefix("/bing");

bing.get("/", async (ctx, next) => {
  await next();
  const data = await get_bing();
  ctx.body = data;
});
