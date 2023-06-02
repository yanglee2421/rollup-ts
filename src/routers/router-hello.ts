import Router from "@koa/router";
import { Name } from "@/routers";

export const hello = new Router();

hello.prefix("/hello");

// Endpoints
hello.get("/", async (ctx, next) => {
  await next();
  ctx.body = ctx.query;
});
hello.get("/:id", async (ctx, next) => {
  await next();
  ctx.body = ctx.params;
});
hello.post("/", async (ctx, next) => {
  await next();
  console.log("namespace", Name);
  ctx.body = ctx.request.body;
});
