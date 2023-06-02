import Router from "@koa/router";
import { get_bing } from "@/api";

export const bing = new Router();

bing.prefix("/bing");

bing.get("/", async (ctx, next) => {
  await next();
  const { idx = 0, n = 1 } = ctx.query;
  const data = await get_bing({
    idx: Number(idx),
    n: Number(n),
  });
  ctx.body = data;
});
