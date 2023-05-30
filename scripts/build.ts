import { rollup } from "rollup";
import rollupOps from "./rollup.config";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

build();

async function build() {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  try {
    const rollupBuild = await rollup(rollupOps);
    const rollupOutput = await Promise.all([
      rollupBuild.write({
        dir: resolve(__dirname, "../dist"),
        format: "esm",
      }),
      rollupBuild.write({
        file: resolve(__dirname, "../dist/main.cjs"),
        format: "cjs",
      }),
    ]);
    console.log("data", rollupOutput);
  } catch (err) {
    console.error(err);
  }
}
