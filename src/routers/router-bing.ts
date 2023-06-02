import Router from "@koa/router";
import { get_bing } from "@/api";

export const routerBing = new Router();

routerBing.get("/api/bing", async (ctx, next) => {
  await next();
  const data = await get_bing();
  ctx.body = data;
});
