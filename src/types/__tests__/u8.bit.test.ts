import { describe, expect, it } from 'vitest'

import U8Bit from '../u8.bit'
import U8BitOf from '../u8.bit.of'

describe('The unsigned 8 bit integer type U8Bit', () => {
  it('Should have a working AND() method', () => {
    const FIRST_BINARY_VALUE = 0b01111000
    const SECOND_BINARY_VALUE = 0b00001010
    const RESULT_VALUE = 0b00001000

    const firstByte: U8Bit = U8BitOf(FIRST_BINARY_VALUE)
    const secondByte: U8Bit = U8BitOf(SECOND_BINARY_VALUE)
    const result: U8Bit = firstByte.AND(secondByte)

    expect(RESULT_VALUE).toBe(result.getNumber())
  })

  it('should be able to be constructed from a binary number', () => {
    const BINARY_VALUE = 0b10010011
    const RESULT_DECIMAL_VALUE = 147

    const u8bit: U8Bit = U8BitOf(BINARY_VALUE)

    expect(u8bit.getNumber()).toEqual(RESULT_DECIMAL_VALUE)
    expect(`${u8bit}`).toEqual('10010011')
  })

  it('should be able to be constructed from a hexidecimal number', () => {
    const HEX_VALUE = 0x0a
    const RESULT_DECIMAL_VALUE = 10

    const u8bit: U8Bit = U8BitOf(HEX_VALUE)

    expect(u8bit.getNumber()).toEqual(RESULT_DECIMAL_VALUE)
  })

  it('should wrap around with value 256', () => {
    const DECIMAL_VALUE = 256
    const RESULT_DECIMAL_VALUE = 0

    const u8bit: U8Bit = U8BitOf(DECIMAL_VALUE)

    expect(u8bit.getNumber()).toEqual(RESULT_DECIMAL_VALUE)
  })

  it('should be able to get its lower nibble value', () => {
    const HEX_VALUE = 0xf3
    const RESULT_DECIMAL_VALUE = 3

    const u8bit: U8Bit = U8BitOf(HEX_VALUE)

    expect(u8bit.getLowerNibble()).toEqual(RESULT_DECIMAL_VALUE)
  })

  it('should be able to get its upper nibble value', () => {
    const HEX_VALUE = 0xf3
    const RESULT_DECIMAL_VALUE = 15

    const u8bit: U8Bit = U8BitOf(HEX_VALUE)

    expect(u8bit.getUpperNibble()).toEqual(RESULT_DECIMAL_VALUE)
  })

  it('should have a working increment() method', () => {
    const BINARY_VALUE = 0b00000001
    const RESULT_VALUE = 0b00000011

    const byte: U8Bit = U8BitOf(BINARY_VALUE)
    const result: U8Bit = byte.increment().increment()

    expect(RESULT_VALUE).toBe(result.getNumber())
  })

  it('should have a working OR() method', () => {
    const FIRST_BINARY_VALUE = 0b01111000
    const SECOND_BINARY_VALUE = 0b00001010
    const RESULT_VALUE = 0b01111010

    const firstByte: U8Bit = U8BitOf(FIRST_BINARY_VALUE)
    const secondByte: U8Bit = U8BitOf(SECOND_BINARY_VALUE)
    const result: U8Bit = firstByte.OR(secondByte)

    expect(RESULT_VALUE).toBe(result.getNumber())
  })

  it('should have a working XOR() method', () => {
    const FIRST_BINARY_VALUE = 0b01111000
    const SECOND_BINARY_VALUE = 0b00001010
    const RESULT_VALUE = 0b01110010

    const firstByte: U8Bit = U8BitOf(FIRST_BINARY_VALUE)
    const secondByte: U8Bit = U8BitOf(SECOND_BINARY_VALUE)
    const result: U8Bit = firstByte.XOR(secondByte)

    expect(RESULT_VALUE).toBe(result.getNumber())
  })

  it('should have a working equals() method', () => {
    const HEX_VALUE = 0xf0

    const result: U8Bit = U8BitOf(HEX_VALUE)

    expect(result.equals(U8BitOf(HEX_VALUE))).toBe(true)
  })
})
