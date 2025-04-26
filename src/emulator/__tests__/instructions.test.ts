import { describe, expect, it } from 'vitest'

import { initialEmulatorState } from '../../state/emulator.state'
import U16BitOf from '../../types/u16.bit.of'
import { JP_1NNN, LD_6XNN } from '../instructions'

describe('The JP_1NNN CPU instruction', () => {
  it('should be able to set PC to 0x0234', () => {
    const state = initialEmulatorState

    state.opcode = U16BitOf(0x1234)

    const result = JP_1NNN(state)

    expect(result.pc.getNumber()).toBe(0x0234)
  })

  it('should be able to set PC to 0x0456', () => {
    const state = initialEmulatorState

    state.opcode = U16BitOf(0x2456)

    const result = JP_1NNN(state)

    expect(result.pc.getNumber()).toBe(0x0456)
  })
})

describe('The LD_6XNN CPU instruction', () => {
  it('should be able to set register V10 with the value 15', () => {
    const state = initialEmulatorState

    state.opcode = U16BitOf(0x6a0f)

    const result = LD_6XNN(state)

    expect(result.v[10].getNumber()).toBe(15)
  })

  it('should be able to set register V3 with the value 242', () => {
    const state = initialEmulatorState

    state.opcode = U16BitOf(0x73f2)

    const result = LD_6XNN(state)

    expect(result.v[3].getNumber()).toBe(242)
  })

  it('should be able to set register V0 with the value 10', () => {
    const state = initialEmulatorState

    state.opcode = U16BitOf(0x100a)

    const result = LD_6XNN(state)

    expect(result.v[0].getNumber()).toBe(10)
  })
})
