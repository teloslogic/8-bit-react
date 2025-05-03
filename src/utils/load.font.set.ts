/**
 * Load font set definition into an array representing
 * emulator memory initial state.
 * @returns memory intialized with emualtor font set.
 */
const loadFontSet =
  (memory: Uint8Array): ((fontSet: Uint8Array) => Uint8Array) =>
  (fontSet: Uint8Array): Uint8Array => {
    for (let index = 0; index < fontSet.length; index++) {
      memory[0x50 + index] = fontSet[index]
    }

    return memory
  }

export default loadFontSet
