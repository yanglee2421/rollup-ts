import { defineConfig } from "rollup";

// Rollup plugins
import node from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";

// NodeJs
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  input: ["./src/main.ts"],
  output: [
    {
      format: "esm",
      dir: "dist",
      compact: true,
    },
  ],
  external: [/node_modules/],
  plugins: [
    node({ extensions: [".js", ".ts"] }),
    babel({
      presets: ["@babel/preset-env", "@babel/preset-typescript"],
      exclude: "node_modules/**",
      extensions: [".js", ".ts"],
      targets: {
        node: "current",
      },
    }),
    alias({
      entries: {
        "@": resolve(__dirname, "./src"),
      },
    }),
  ],
});
