import { match } from './match.js'
export function pattern(
  str: string,
  pat: any,
  n: number,
  m: number,
) {
  if (n < m)
    return false

  const map = new Map()

  let res = match(str, n, 0, pat, m, 0, map)

  for (const [_, value] of map.entries())
    res = res && value.length > 1

  return res
}
