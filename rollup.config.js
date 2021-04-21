import typescript from "rollup-plugin-typescript2"
import commonjs from "@rollup/plugin-commonjs"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import pkg from "./package.json"

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]

const input = "src/index.ts"

const plugins = [
  typescript({
    typescript: require("typescript"),
  }),
  nodeResolve({
    preferBuiltins: true,
  }),
  commonjs({
    include: "**/node_modules/**",
  }),
]

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    plugins,
    external,
  },
  {
    input,
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    plugins,
    external,
  },
]
