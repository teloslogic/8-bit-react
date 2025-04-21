import { describe, expect, it } from 'vitest'

import U16Bit from '../u16.bit'
import U16BitOf from '../u16.bit.of'

describe('The unsigned 16 bit integer type U16Bit', () => {
  it('Should have a working AND() method', () => {
    const FIRST_BINARY_VALUE = 0b0011000011001000
    const SECOND_BINARY_VALUE = 0b0000000011001000
    const RESULT_VALUE = 0b0000000011001000

    const firstValue: U16Bit = U16BitOf(FIRST_BINARY_VALUE)
    const secondValue: U16Bit = U16BitOf(SECOND_BINARY_VALUE)
    const result: U16Bit = firstValue.AND(secondValue)

    expect(RESULT_VALUE).toBe(result.getNumber())
  })

  it('should be able to be constructed from a binary number', () => {
    const BINARY_VALUE = 0b0011000100000101
    const RESULT_DECIMAL_VALUE = 12549

    const u16bit: U16Bit = U16BitOf(BINARY_VALUE)

    expect(u16bit.getNumber()).toEqual(RESULT_DECIMAL_VALUE)
    expect(`${u16bit}`).toEqual('11000100000101')
  })

  it('should be able to be constructed from a hexidecimal number', () => {
    const HEX_VALUE = 0x0d01
    const RESULT_DECIMAL_VALUE = 3329

    const u16bit: U16Bit = U16BitOf(HEX_VALUE)

    expect(u16bit.getNumber()).toEqual(RESULT_DECIMAL_VALUE)
  })

  it('should wrap around with value 65536', () => {
    const DECIMAL_VALUE = 65536
    const RESULT_DECIMAL_VALUE = 0

    const u16bit: U16Bit = U16BitOf(DECIMAL_VALUE)

    expect(u16bit.getNumber()).toEqual(RESULT_DECIMAL_VALUE)
  })

  it('should be able to get its least significant byte', () => {
    const HEX_VALUE = 0x0104
    const RESULT_DECIMAL_VALUE = 4

    const u16bit: U16Bit = U16BitOf(HEX_VALUE)

    expect(u16bit.getLeastSignificantByte()).toEqual(RESULT_DECIMAL_VALUE)
  })

  it('should be able to get its most significant byte', () => {
    const HEX_VALUE = 0x0104
    const RESULT_DECIMAL_VALUE = 1

    const u16bit: U16Bit = U16BitOf(HEX_VALUE)

    expect(u16bit.getMostSignificantByte()).toEqual(RESULT_DECIMAL_VALUE)
  })

  it('should be able to set its least significant byte', () => {
    const HEX_VALUE = 0x0000
    const VALUE = 0xff
    const RESULT_DECIMAL_VALUE = 255

    const u16bit: U16Bit = U16BitOf(HEX_VALUE)
    const resultU16Bit = u16bit.setLeastSignificantByte(VALUE)

    expect(resultU16Bit.getNumber()).toEqual(RESULT_DECIMAL_VALUE)
  })

  it('should be able to set its most significant byte', () => {
    const HEX_VALUE = 0x0000
    const VALUE = 0xff
    const RESULT_DECIMAL_VALUE = 65280

    const u16bit: U16Bit = U16BitOf(HEX_VALUE)
    const resultU16Bit = u16bit.setMostSignificantByte(VALUE)

    expect(resultU16Bit.getNumber()).toEqual(RESULT_DECIMAL_VALUE)
  })

  it('should have a working increment() method', () => {
    const BINARY_VALUE = 0b0000000000000001
    const RESULT_VALUE = 0b0000000000000011

    const byte: U16Bit = U16BitOf(BINARY_VALUE)
    const result: U16Bit = byte.increment().increment()

    expect(RESULT_VALUE).toBe(result.getNumber())
  })

  it('Should have a working OR() method', () => {
    const FIRST_BINARY_VALUE = 0b0011000011001000
    const SECOND_BINARY_VALUE = 0b0000000011001000
    const RESULT_VALUE = 0b0011000011001000

    const firstValue: U16Bit = U16BitOf(FIRST_BINARY_VALUE)
    const secondValue: U16Bit = U16BitOf(SECOND_BINARY_VALUE)
    const result: U16Bit = firstValue.OR(secondValue)

    expect(RESULT_VALUE).toBe(result.getNumber())
  })

  it('Should have a working XOR() method', () => {
    const FIRST_BINARY_VALUE = 0b0011000011001000
    const SECOND_BINARY_VALUE = 0b0000000011001000
    const RESULT_VALUE = 0b0011000000000000

    const firstValue: U16Bit = U16BitOf(FIRST_BINARY_VALUE)
    const secondValue: U16Bit = U16BitOf(SECOND_BINARY_VALUE)
    const result: U16Bit = firstValue.XOR(secondValue)

    expect(RESULT_VALUE).toBe(result.getNumber())
  })

  it('should have a working equals() method', () => {
    const HEX_VALUE = 0xd0f0

    const result: U16Bit = U16BitOf(HEX_VALUE)

    expect(result.equals(U16BitOf(HEX_VALUE))).toBe(true)
  })
})
