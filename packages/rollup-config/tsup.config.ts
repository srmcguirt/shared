import type { Options } from 'tsup'
import { defineConfig } from 'tsup'

export default defineConfig((options?: Options) => ({
  bundle: true,
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  minify: true,
  outDir: 'dist',
  sourcemap: true,
  splitting: true,
  treeshake: true,
  target: 'node16',
  external: [
    'rollup',
    'typescript',
    'esbuild',
  ],
  ...options,
}))
