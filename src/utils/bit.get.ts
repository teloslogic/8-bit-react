/* eslint-disable no-magic-numbers */
/**
 * Curried function for getting the bit value at a specified position.
 * @param n The bit position from left to right, 0 to n.
 * @param value Binary value.
 * @returns The bit value as a number.
 */
const bitGet = (n: number) => (value: number) => (value & (1 << n) ? 1 : 0)

export default bitGet
