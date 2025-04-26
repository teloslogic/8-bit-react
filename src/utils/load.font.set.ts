import U8Bit from '../types/u8.bit'

/**
 * Load font set definition into an array representing
 * emulator memory initial state.
 * @returns memory intialized with emualtor font set.
 */
const loadFontSet =
  (memory: U8Bit[]): ((fontSet: U8Bit[]) => U8Bit[]) =>
  (fontSet: U8Bit[]): U8Bit[] => {
    for (let index = 0; index < fontSet.length; index++) {
      memory[index] = fontSet[index]
    }

    return memory
  }

export default loadFontSet
