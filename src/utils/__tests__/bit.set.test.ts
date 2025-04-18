import { describe, expect, it } from 'vitest'

import bitSet from '../bit.set'

describe('The bitSet utility function', () => {
  it('should be able to turn off a bit in a byte value', () => {
    const BIT_VALUE = 0b00100
    const AT_POSITION = 0
    const ON = false
    const expectedValue = 4

    const result = bitSet(AT_POSITION)(ON)(BIT_VALUE)

    expect(result).toBe(expectedValue)
  })

  it('should be able to turn on a bit in a byte value', () => {
    const BIT_VALUE = 0b00100
    const AT_POSITION = 4
    const ON = true
    const expectedValue = 20

    const result = bitSet(AT_POSITION)(ON)(BIT_VALUE)

    expect(result).toBe(expectedValue)
  })
})
