import { describe, expect, it } from 'vitest'
import { minify } from './minify'

describe('minify', () => {
  it('return the passed value if it is not a string', () => {
    const testValues = [
      { in: {} },
      { in: [] },
      { in: 1 },
      { in: true },
      { in: false },
      { in: null },
      { in: Number.POSITIVE_INFINITY },
      { in: undefined },
    ]

    for (const testValue of testValues)
      expect(minify(testValue.in)).toStrictEqual(testValue.in)
  })
})
