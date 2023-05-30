import { defineConfig } from "rollup";

// Rollup plugins
import node from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";

// NodeJs
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const extensions = [".js", ".ts", ".cjs", ".mjs"];

export default defineConfig({
  input: [resolve(__dirname, "../src/main.ts")],
  external: [/node_modules/],
  plugins: [
    node({ extensions }),
    babel({
      extensions,
      presets: ["@babel/preset-env", "@babel/preset-typescript"],
      targets: { node: "current" },
      exclude: "node_modules/**",
    }),
    alias({
      entries: {
        "@": resolve(__dirname, "../src"),
      },
    }),
  ],
});
