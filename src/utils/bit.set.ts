/* eslint-disable no-param-reassign */
/* eslint-disable no-magic-numbers */
/**
 * Curried function for settting the bit value at a specified position.
 * @param n The bit position from left to right, 0 to n.
 * @param on Set bit to 1 if true, and to 0 if false.
 * @param value Binary value.
 * @returns The bit value as a number.
 */
const bitSet = (n: number) => (on: boolean) => (value: number) =>
  on ? (value |= 1 << n) : (value &= ~(1 << n))

export default bitSet
