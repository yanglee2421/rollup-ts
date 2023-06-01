import Koa from "koa";
import Router from "@koa/router";
import { Name, Items } from "@/routers";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Path
const __dirname = dirname(fileURLToPath(import.meta.url));
const staticPath = resolve(__dirname, "../public");

// Server
const port = 3001;
const app = new Koa();

const router = new Router();

router.get("/api/hello", async (ctx, next) => {
  await next();
  console.log("router", Name);
  ctx.response.body = { msg: "hello world" };
});

app.use(router.routes());
app.use(async (ctx, next) => {
  await next();
  console.log("use");
});

app.listen(port, () => {
  console.log(`stand by ${port}`);
  console.log(Items);
});
