import { describe, expect, it } from 'vitest'

import parseBinary from '../parse.binary'

describe('The parseByte utility function', () => {
  it('should be able to work with a bit representation of a byte value', () => {
    const BYTE_VALUE_STRING = '0011010'
    const expectedValue = 26

    const result = parseBinary(BYTE_VALUE_STRING)

    expect(result).toEqual(expectedValue)
  })

  it('should be able to work with a bit representation of a two byte value', () => {
    const TWO_BYTE_VALUE_STRING = '011000101'
    const expectedValue = 197

    const result = parseBinary(TWO_BYTE_VALUE_STRING)

    expect(result).toEqual(expectedValue)
  })
})
