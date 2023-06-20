import Router from "@koa/router";
import { Name } from "@/routers";

export const hello = new Router();

hello.prefix("/hello");

// Endpoints
hello.get("/", async (ctx, next) => {
  await next();
  ctx.body = ctx.query;

  // NOTE: ctx.req is NOT a alias for ctx.request
  console.log(ctx.req);
  console.log(ctx.request);
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
