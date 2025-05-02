import U8Bit from '../types/u8.bit'
import U8BitOf from '../types/u8.bit.of'

/**
 * An http/https request for a game ROM
 * @param url The relative url of the rom file
 * @returns Promise<U8Bit[]> of the game ROM.
 */
const loadRomFrom = async (url: string): Promise<U8Bit[]> => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch ROM: ${response.statusText}`)
  }

  const arrayBuffer = await response.arrayBuffer()
  const uIntArray = new Uint8Array(arrayBuffer)
  const binaryArray: U8Bit[] = []

  uIntArray.map(currentValue => binaryArray.push(U8BitOf(currentValue)))

  return binaryArray
}

export default loadRomFrom
