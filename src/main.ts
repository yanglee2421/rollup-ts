import express from "express";
import { routerBing, routerDemo, Name, Items } from "@/routers";
import history from "connect-history-api-fallback";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { log } from "@/hook";

// Path
const __dirname = dirname(fileURLToPath(import.meta.url));
const staticPath = resolve(__dirname, "../public");

// Server
const port = 3001;
const app = express();

app.use(log);
app.use("/bing", routerBing);
app.use("/demo", routerDemo);
app.use("/public", history(), express.static(staticPath));

app.listen(port, () => {
  console.log(`stand by ${port}`);
  console.log(Items);
  console.log(Name);
});
