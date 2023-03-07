const RxJson = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/
export interface MinifyOptions {
  strict?: boolean
  wrap?: number
  indent?: number
  arrPad?: number
  objPad?: number
  beforeComma?: number
  afterComma?: number
}

export function minify(
  value: any,
  options: MinifyOptions = {},
): any {
  if (typeof value !== 'string')
    return value

  const v = value.toLowerCase().trim()

  if (v === 'true')
    return true
  if (v === 'false')
    return false
  if (v === 'null')
    return null
  if (v === 'nan')
    return NaN
  if (v === 'infinity')
    return Number.POSITIVE_INFINITY
  if (v === 'undefined')
    return undefined

  if (!RxJson.test(v)) {
    if (options.strict)
      throw new Error('Invalid JSON')
  }

  return JSON.parse(value)
}
