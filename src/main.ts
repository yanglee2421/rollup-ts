import express from "express";
import { routerBing, Name, Items } from "@/routers";

const app = express();

app.use("/bing", routerBing);

app.listen(3000, () => {
  console.log("stand by 3000");
  console.log(Items);
  console.log(Name);
});
