import Router from "@koa/router";
import { Name } from "@/routers";

export const router = new Router();

router.get("/api/hello", async (ctx, next) => {
  await next();

  console.log("params", ctx.params);

  ctx.body = { name: "yang" };
  console.log("router", Name);
});
router.post("/api/hello", async (ctx, next) => {
  await next();
  console.log("body", ctx.request.body);
});
