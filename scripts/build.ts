import { rollup } from "rollup";
import rollupOps from "./rollup.config";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

build();

async function build() {
  try {
    const rollupBuild = await rollup(rollupOps);
    const rollupOutput = await rollupBuild.write({
      dir: resolve(__dirname, "../dist"),
      format: "esm",
    });
    console.log("data", rollupOutput);
  } catch (err) {
    console.error(err);
  }
}
