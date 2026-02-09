import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src.ts/index.ts", "src.ts/abi/index.ts"],
  external: ["viem"],
  format: ["esm", "cjs"],
  dts: true,
  outDir: "dist",
});
