import { describe, expect, it } from 'vitest'

import bitGet from '../bit.get'

describe('The bitGet utility function', () => {
  it('should be able to work with an 8-bit value', () => {
    const BIT_VALUE = 0b0011010
    const AT_POSITION = 1
    const expectedValue = 1

    const result = bitGet(AT_POSITION)(BIT_VALUE)

    expect(result).toBe(expectedValue)
  })
})
