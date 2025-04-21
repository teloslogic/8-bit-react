import { describe, expect, it } from 'vitest'

import parseHex from '../parse.hex'

describe('The parseHex utility function', () => {
  it('should be able to work with a bit representation of a byte value', () => {
    const HEX_VALUE_STRING = '1d'
    const expectedValue = 29

    const result = parseHex(HEX_VALUE_STRING)

    expect(result).toEqual(expectedValue)
  })

  it('should be able to work with a bit representation of a two byte value', () => {
    const HEX_VALUE_STRING = '011a'
    const expectedValue = 282

    const result = parseHex(HEX_VALUE_STRING)

    expect(result).toEqual(expectedValue)
  })
})
