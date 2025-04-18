import U8Bit from './u8.bit'

/**
 * Factory function that creates a U8Bit type.
 * @param value The number value
 * @returns a new U8Bit type.
 */
const U8BitOf = (value: number): U8Bit => {
  const INDEX = 0
  const COUNT = 2
  const COUNT_VALUE = 1
  const INT_OFFSET = 0xff
  const NIBBLE_OFFSET = 0b1111
  const DECIMAL_OFFSET = 4

  const typedArray = new Uint8Array([value & INT_OFFSET])

  return {
    AND: (x: U8Bit): U8Bit => U8BitOf(typedArray[INDEX] & x.getNumber()),
    decrement: (): U8Bit => U8BitOf(typedArray[INDEX] - (COUNT_VALUE & INT_OFFSET)),
    equals: (x: U8Bit): boolean => (value === x.getNumber() ? true : false),
    getLowerNibble: (): number => typedArray[INDEX] & NIBBLE_OFFSET & INT_OFFSET,
    getNumber: (): number => typedArray[INDEX] & INT_OFFSET,
    getUpperNibble: (): number => (typedArray[INDEX] >> DECIMAL_OFFSET) & NIBBLE_OFFSET & INT_OFFSET,
    increment: (): U8Bit => U8BitOf(typedArray[INDEX] + (COUNT_VALUE & INT_OFFSET)),
    toString: (): string => (typedArray[INDEX] >>> INDEX).toString(COUNT),
    OR: (x: U8Bit): U8Bit => U8BitOf(typedArray[INDEX] | x.getNumber()),
    XOR: (x: U8Bit): U8Bit => U8BitOf(typedArray[INDEX] ^ x.getNumber())
  }
}

export default U8BitOf
