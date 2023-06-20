import Router from "@koa/router";

// Routers Imports
import { hello } from "./router-hello";
import { bing } from "./router-bing";
import { upload } from "./router-upload";

export const router = new Router({ prefix: "/api" });

router.use(hello.routes());
router.use(bing.routes());
router.use(upload.routes());

export enum Items {
  first = "first",
}

export namespace Name {
  export const a = "aaa";
}
