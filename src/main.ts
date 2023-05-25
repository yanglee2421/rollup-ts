import express from "express";
import { routerBing, routerDemo, Name, Items } from "@/routers";

const port = 3001;
const app = express();

app.use("/bing", routerBing);
app.use("/", routerDemo);

app.listen(port, () => {
  console.log(`stand by ${port}`);
  console.log(Items);
  console.log(Name);
});
