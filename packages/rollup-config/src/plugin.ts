import alias from '@rollup/plugin-alias'
import autoinstall from '@rollup/plugin-auto-install'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
import dts from 'rollup-plugin-dts'
import esbuild, { minify } from 'rollup-plugin-esbuild'
import eslint from '@rollup/plugin-eslint'
import filesize from 'rollup-plugin-filesize'
import html from '@rollup/plugin-html'
import json from '@rollup/plugin-json'
import multi from '@rollup/plugin-multi-entry'
import polyfills from 'rollup-plugin-node-polyfills'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

export const plugin = {
  get alias() { return alias },
  get autoinstall() { return autoinstall },
  get commonjs() { return commonjs },
  get copy() { return copy },
  get del() { return del },
  get dts() { return dts },
  get esbuild() { return esbuild },
  get esminify() { return minify },
  get filesize() { return filesize },
  get html() { return html },
  get json() { return json },
  get multi() { return multi },
  get polyfills() { return polyfills },
  get postcss() { return postcss },
  get replace() { return replace },
  get resolve() { return resolve },
  get terser() { return terser },
  get eslint() { return eslint },
}
