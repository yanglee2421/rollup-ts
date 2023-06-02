import Router from "@koa/router";
import { hello } from "./router-hello";
import { bing } from "./router-bing";

export const router = new Router({ prefix: "/api" });

router.use(hello.routes());
router.use(bing.routes());

export enum Items {
  first = "first",
}

export namespace Name {
  export const a = "aaa";
}
