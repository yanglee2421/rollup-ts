import { defineConfig } from "rollup";
import tsPlugin from "@rollup/plugin-typescript";
import nodePlugin from "@rollup/plugin-node-resolve";
import cjsPlugin from "@rollup/plugin-commonjs";
import jsonPlugin from "@rollup/plugin-json";
import aliasPlugin from "@rollup/plugin-alias";

// NodeJs
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  input: ["./src/main.ts"],
  output: {
    format: "esm",
    dir: "dist",
    compact: true,
  },
  plugins: [
    nodePlugin(),
    cjsPlugin(),
    tsPlugin(),
    jsonPlugin(),
    aliasPlugin({
      entries: {
        "@": resolve(__dirname, "./src"),
      },
    }),
  ],
  external: [/node_modules/],
});
