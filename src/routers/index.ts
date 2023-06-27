// Router Imports
import Router from "@koa/router";
import { hello } from "./router-hello";
import { bing } from "./router-bing";
import { upload } from "./router-upload";

// ** Router
export const router = new Router({ prefix: "/api" });

// ** Endpoints
router.use(hello.routes());
router.use(bing.routes());
router.use(upload.routes());
