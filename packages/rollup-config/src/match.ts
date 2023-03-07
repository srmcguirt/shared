export function match(
  str: string,
  n: number,
  i: number,
  pat: Array<any>,
  patLength: number,
  patIndex: number,
  map: Map<any, any>,
): any {
  if (i === n && patIndex === patLength)
    return true

  if (i === n || patIndex === patLength)
    return false

  const nextChar = pat[patIndex]

  if (map.has(nextChar)) {
    const s = map.get(nextChar)
    const len = s.length

    const sub = str.substring(i, len)

    if (sub !== s)
      return false

    return match(
      str,
      n,
      i + len,
      pat,
      patLength,
      patIndex + 1,
      map,
    )
  }

  for (let len = 1; len <= n - 1; len++) {
    map.set(nextChar, str.substring(i, len))
    if (match(str, n, i + len, pat, patLength, patIndex + 1, map))
      return true

    map.delete(nextChar)
  }

  return false
}
