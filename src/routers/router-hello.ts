import Router from "@koa/router";
import { Name } from "@/routers";

export const router = new Router();

router.get("/api/hello", async (ctx, next) => {
  await next();

  console.log("params", ctx.params);
  console.log("body", ctx.request.body);

  ctx.body = { name: "yang" };
  console.log("router", Name);
});
