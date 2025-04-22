import { describe, expect, it } from 'vitest'

import U8Bit from '../../types/u8.bit'
import U8BitOf from '../../types/u8.bit.of'
import loadFontSet from '../load.font.set'

describe('The loadFonSet utility function', () => {
  it('should be able to load a font array in order to intialize a memory array', () => {
    const result: U8Bit[] = loadFontSet()

    // eslint-disable-next-line no-magic-numbers
    expect(result.length).toBe(45)
    // eslint-disable-next-line no-magic-numbers
    expect(result[4].getNumber()).toBe(U8BitOf(0xf0).getNumber())
  })
})
