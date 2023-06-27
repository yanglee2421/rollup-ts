// Koa Imports
import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import serve from "koa-static";

// Router Imports
import { router } from "@/routers";

// Middleware Imports
import { log } from "@/middleware";

// NodeJs Imports
import { resolve } from "node:path";

// ** Server
const port = 3001;
const app = new Koa();

// ** Middleware
app.use(bodyParser());
app.use(
  cors({
    origin(ctx) {
      return ctx.origin;
      return "";
    },
  })
);

// ** API
app.use(router.routes());

// ** Static
const rootDir = process.cwd();
const staticPath = resolve(rootDir, "./public");
app.use(serve(staticPath));

// ** Log
app.use(log);

// ** Error
app.on("error", (err) => {
  err.expose = true;
  console.log(err);
});

// Listence port
app.listen(port, () => {
  console.log(`stand by ${port}`);
});
