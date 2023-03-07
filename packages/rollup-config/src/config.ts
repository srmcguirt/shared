import { existsSync, readFileSync } from 'node:fs'
import { join, resolve as res } from 'node:path'
import destr from 'destr'
import { strip } from './strip.js'

export const config = (() => {
  const cwd = process.cwd()
  const file = readFileSync(join(cwd, 'package.json')).toString()
  const pkg = destr(strip(file))
  const tsconfigPath = join(cwd, 'tsconfig.json')

  return {
    get cwd() { return cwd },
    get package() { return pkg },
    get external() { return Object.keys(pkg.dependencies || {}) },
    get tsconfig() {
      if (existsSync(tsconfigPath)) {
        const json = readFileSync(tsconfigPath).toString()
        const tsconfig = destr(strip(json))
        return tsconfig
      }
    },
    path: (uri: string) => { return res(cwd, uri) },
    output: {
      get cjs() { return pkg.exports.require || null },
      get esm() { return pkg.exports.import || null },
      get iife() { return pkg.exports.browser || null },
      get type() { return pkg.exports.types || null },
      get exports() { return pkg.exports || null },
      get main() { return pkg.main || null },
      get module() { return pkg.module || null },
    },
  }
})()
