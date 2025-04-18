import U16Bit from './u16.bit'

/**
 * Factory function that creates a U16Bit type.
 * @param value The number value
 * @returns a new U16Bit type.
 */
const U16BitOf = (value: number): U16Bit => {
  const INDEX = 0
  const COUNT = 2
  const COUNT_VALUE = 1
  const INT_OFFSET = 0xffff
  const SIGNIFICANT_BYTE_OFFSET = 0xff
  const DECIMAL_OFFSET = 8
  const SET_MOST_OFFSET = 0x00ff
  const SET_LEAST_OFFSET = 0xff00

  const typedArray = new Uint16Array([value & INT_OFFSET])

  return {
    AND: (x: U16Bit): U16Bit => U16BitOf(typedArray[INDEX] & x.getNumber()),
    decrement: (): U16Bit => U16BitOf(typedArray[INDEX] - (COUNT_VALUE & INT_OFFSET)),
    equals: (x: U16Bit): boolean => (value === x.getNumber() ? true : false),
    getLeastSignificantByte: (): number => typedArray[INDEX] & SIGNIFICANT_BYTE_OFFSET,
    getNumber: (): number => typedArray[INDEX] & INT_OFFSET,
    getMostSignificantByte: (): number => (typedArray[INDEX] >> DECIMAL_OFFSET) & SIGNIFICANT_BYTE_OFFSET,
    increment: (): U16Bit => U16BitOf(typedArray[INDEX] + (COUNT_VALUE & INT_OFFSET)),
    OR: (x: U16Bit): U16Bit => U16BitOf(typedArray[INDEX] | x.getNumber()),
    setLeastSignificantByte: (x: number) => U16BitOf((typedArray[INDEX] & SET_LEAST_OFFSET) | x),
    setMostSignificantByte: (x: number) =>
      U16BitOf((typedArray[INDEX] & SET_MOST_OFFSET) | (x << DECIMAL_OFFSET)),
    toString: (): string => (typedArray[INDEX] >>> INDEX).toString(COUNT),
    XOR: (x: U16Bit): U16Bit => U16BitOf(typedArray[INDEX] ^ x.getNumber())
  }
}

export default U16BitOf
