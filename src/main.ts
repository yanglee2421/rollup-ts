import Koa from "koa";
import { Items } from "@/routers";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import bodyParser from "koa-bodyparser";
import serve from "koa-static";
import { router } from "@/routers";
import { log } from "@/middleware";

// Path
const __dirname = dirname(fileURLToPath(import.meta.url));
const staticPath = resolve(__dirname, "../public");

// Server
const port = 3001;
const app = new Koa();

// App middleware
app.use(bodyParser());
app.use(serve(staticPath));
app.use(router.routes());
app.use(log);

// Handle error
app.on("error", (err) => {
  err.expose = true;
  console.log(err);
});

// Listence port
app.listen(port, () => {
  console.log(`stand by ${port}`);
  console.log("enum", Items);
});
