import fontSet from '../emulator/font.set'
import U8Bit from '../types/u8.bit'

/**
 * Load font set definition into an array representing
 * emulator memory initial state.
 * @returns
 */
const loadFontSet = (): U8Bit[] => {
  const memory: U8Bit[] = []

  for (let index = 0; index < fontSet.length; index++) {
    memory[index] = fontSet[index]
  }

  return memory
}

export default loadFontSet
