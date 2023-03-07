import type { BuildOptions, CommonOptions, Loader } from 'esbuild'
// import type { Plugin } from 'rollup'

export type OmitOptions = Omit<CommonOptions, (
  | 'sourcesContent'
  | 'sourcemap'
  | 'sourceRoot'
  | 'color'
  | 'logLevel'
  | 'logLimit'
)>

export type MinifyOptions = Omit<OmitOptions, (
  | 'format'
  | 'sourcesContent'
  | 'globalName'
  | 'define'
  | 'pure'
  | 'jsx'
  | 'jsxFactory'
  | 'jsxFragment'
)>

export interface ESBuildOptions extends OmitOptions {
  sourceMap?: boolean
  optimizeDeps?: {
    include: string[]
    exclude?: string[]
    cwd?: string
    esbuildOptions?: BuildOptions
    sourceMap?: boolean
  }
  tsconfig?: string | false
  loaders?: { [ext: string]: Loader | false }
}

// export function ESMinify(options?: MinifyOptions): Plugin
// export function ESBuild(options?: ESBuildOptions): Plugin;
