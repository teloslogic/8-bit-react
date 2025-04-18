/**
 * A container of an 16 bit unsigned integer
 * of the range 0 to 65536
 */
type U16Bit = {
  /**
   * Bitwise logical AND opertation.
   * @param x The U16Bit being operated on.
   * @returns U16Bit.
   */
  AND: (x: U16Bit) => U16Bit
  /**
   * Decrement the existing binary value.
   * @returns An incremented U16Bit.
   */
  decrement: () => U16Bit
  /**
   * Uquality operator for U16Bit.
   * @param x The U16Bit being operated on.
   * @returns boolean.
   */
  equals: (x: U16Bit) => boolean
  /**
   * Return the last byte of the two byte value.
   * @returns 8 bit unsigned integer as a number.
   */
  getLeastSignificantByte: () => number
  /**
   * Returns contained 16 bit unsigned integer as a number
   */
  getNumber(): number
  /**
   * Return the first byte of the two byte value.
   * @returns 8 bit unsigned integer as a number.
   */
  getMostSignificantByte: () => number
  /**
   * Increment the existing binary value.
   * @returns An incremented U16Bit.
   */
  increment: () => U16Bit
  /**
   * Bitwise logical OR operation.
   * @param x Yhe U16Bit being operated on.
   * @returns U16Bit.
   */
  OR: (x: U16Bit) => U16Bit
  /**
   * Set the last byte of the two byte value.
   * @param byteValue The new two byte value.
   * @returns 16 bit unsigned integer as U16Bit.
   */
  setLeastSignificantByte: (byteValue: number) => U16Bit
  /**
   * Set the first byte of the two byte value.
   * @param byteValue The new two byte value.
   * @returns 16 bit unsigned integer as U16Bit.
   */
  setMostSignificantByte: (byteValue: number) => U16Bit
  /**
   * Returns contained 16 bit unsigned integer as a string
   */
  toString(): string
  /**
   * Bitwise logical XOR operation.
   * @param x The U16Bit being operated on.
   * @returns U16Bit.
   */
  XOR: (x: U16Bit) => U16Bit
}

export default U16Bit
