/**
 * An http/https request for a game ROM
 * @param url The relative url of the rom file
 * @returns Promise<U8Bit[]> of the game ROM.
 */
const loadRomFrom = async (url: string): Promise<Uint8Array> => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch ROM: ${response.statusText}`)
  }

  const arrayBuffer = await response.arrayBuffer()
  const binaryArray = new Uint8Array(arrayBuffer)

  return binaryArray
}

export default loadRomFrom
