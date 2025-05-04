import { describe, expect, it } from 'vitest'

import fontSet from '../../emulator/font.set'
import loadFontSet from '../load.font.set'

describe('The loadFonSet utility function', () => {
  it('should be able to load a font array in order to intialize a memory array', () => {
    const memory: Uint8Array = new Uint8Array(4096)
    const loadFontSetIntoMemory = loadFontSet(memory)
    const result: Uint8Array = loadFontSetIntoMemory(fontSet)

    expect(result[0x50]).toBe(0xf0)
    expect(result[0x51]).toBe(0x90)
    expect(result[0x52]).toBe(0x90)
  })
})
