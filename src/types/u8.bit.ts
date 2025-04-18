/**
 * A container of an 8 bit unsigned integer
 * of the range 0 to 255
 */
type U8Bit = {
  /**
   * Bitwise logical AND opertation.
   * @param x The U8Bit being operated on.
   * @returns U8Bit.
   */
  AND: (x: U8Bit) => U8Bit
  /**
   * Decrement the existing binary value.
   * @returns An incremented U8Bit.
   */
  decrement: () => U8Bit
  /**
   * Uquality operator for U8Bit.
   * @param x The U8Bit being operated on.
   * @returns boolean.
   */
  equals: (x: U8Bit) => boolean
  /**
   * Return the last 4 bits of the byte value.
   * @returns Unsigned 8 bit integer as a number.
   */
  getLowerNibble: () => number
  /**
   * Returns contained 8 bit unsigned integer as a number
   */
  getNumber(): number
  /**
   * Return the first 4 bits of the byte value.
   * @returns Unsiged 8 bit integer as a number.
   */
  getUpperNibble: () => number
  /**
   * Increment the existing binary value.
   * @returns An incremented U8Bit.
   */
  increment: () => U8Bit
  /**
   * Bitwise logical OR operation.
   * @param x The U8Bit being operated on.
   * @returns U8Bit.
   */
  OR: (x: U8Bit) => U8Bit
  /**
   * Returns contained 8 bit unsigned integer as a string
   */
  toString(): string
  /**
   * Bitwise logical XOR operation.
   * @param x The U8Bit being operated on.
   * @returns U8Bit.
   */
  XOR: (x: U8Bit) => U8Bit
}

export default U8Bit
