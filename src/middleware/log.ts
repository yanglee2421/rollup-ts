import type Koa from "koa";

type App = InstanceType<typeof Koa>;
type Middleware = Parameters<App["use"]>[0];

export const log: Middleware = async (ctx, next) => {
  await next();
  console.log(`url:${ctx.url}`, `method:${ctx.method}`);
};
