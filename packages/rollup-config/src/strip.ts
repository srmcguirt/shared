const single = Symbol('single') as unknown as boolean
const multi = Symbol('multi') as unknown as boolean

const noSpace = () => ''
const space = (str: string, start?: number, end?: number) => str.slice(start, end).replace(/\S/g, ' ')

const isEscaped = (str: string | string[], quote: number) => {
  let i = quote - 1
  let count = 0

  while (str[i] === '\\') {
    i -= 1
    count += 1
  }

  return Boolean(count % 2)
}

export interface StripOptions {
  readonly trailing?: boolean
  readonly whitespace?: boolean
}

export function strip(
  str: string,
  {
    trailing = false,
    whitespace = true,
  }: StripOptions = {},
): string {
  if (typeof str !== 'string')
    throw new TypeError(`Expected argument \`str\` to be a \`string\`, got \`${typeof str}\``)

  const strip = whitespace ? space : noSpace

  let insideStr = false
  let insideComment = false
  let offset = 0
  let buffer = ''
  let result = ''
  let commaIndex = -1

  for (let i = 0; i < str.length; i++) {
    const curr = str[i]
    const next = str[i + 1]

    if (!insideComment && curr === '"') {
      // Enter or exit string
      const escaped = isEscaped(str, i)
      if (!escaped)
        insideStr = !insideStr
    }

    if (insideStr)
      continue

    if (!insideComment && curr + next === '//') {
      // Enter single-line comment
      buffer += str.slice(offset, i)
      offset = i
      insideComment = single
      i++
    }
    else if (insideComment === single && curr + next === '\r\n') {
      // Exit single-line comment via \r\n
      i++
      insideComment = false
      buffer += strip(str, offset, i)
      offset = i
      continue
    }
    else if (insideComment === single && curr === '\n') {
      // Exit single-line comment via \n
      insideComment = false
      buffer += strip(str, offset, i)
      offset = i
    }
    else if (!insideComment && curr + next === '/*') {
      // Enter multiline comment
      buffer += str.slice(offset, i)
      offset = i
      insideComment = multi
      i++
      continue
    }
    else if (insideComment === multi && curr + next === '*/') {
      // Exit multiline comment
      i++
      insideComment = false
      buffer += strip(str, offset, i + 1)
      offset = i + 1
      continue
    }
    else if (trailing && !insideComment) {
      if (commaIndex !== -1) {
        if (curr === '}' || curr === ']') {
          // Strip trailing comma
          buffer += str.slice(offset, i)
          result += strip(buffer, 0, 1) + buffer.slice(1)
          buffer = ''
          offset = i
          commaIndex = -1
        }
        else if (curr !== ' ' && curr !== '\t' && curr !== '\r' && curr !== '\n') {
          // Hit non-whitespace following a comma; comma is not trailing
          buffer += str.slice(offset, i)
          offset = i
          commaIndex = -1
        }
      }
      else if (curr === ',') {
        // Flush buffer prior to this point, and save new comma i
        result += buffer + str.slice(offset, i)
        buffer = ''
        offset = i
        commaIndex = i
      }
    }
  }

  return result + buffer + (insideComment ? strip(str.slice(offset)) : str.slice(offset))
}
