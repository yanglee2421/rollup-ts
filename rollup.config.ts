import { defineConfig } from "rollup";

// Rollup plugins
import nodePlugin from "@rollup/plugin-node-resolve";
import jsonPlugin from "@rollup/plugin-json";
import cjsPlugin from "@rollup/plugin-commonjs";
import tsPlugin from "@rollup/plugin-typescript";
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
    jsonPlugin(),
    cjsPlugin(),
    tsPlugin(),
    aliasPlugin({
      entries: {
        "@": resolve(__dirname, "./src"),
      },
    }),
  ],
  external: [/node_modules/],
});
