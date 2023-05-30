import express from "express";
import { routerBing, routerDemo, Name, Items } from "@/routers";
import history from "connect-history-api-fallback";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3001;
const app = express();

app.use("/bing", routerBing);
app.use("/demo", routerDemo);
app.use(history(), express.static(resolve(__dirname, "../web/dist")));

app.listen(port, () => {
  console.log(`stand by ${port}`);
  console.log(Items);
  console.log(Name);
});
