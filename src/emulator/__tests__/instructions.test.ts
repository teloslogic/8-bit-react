import { describe, expect, it } from 'vitest'

import { initialEmulatorState } from '../../state/emulator.state'
import { INST_1NNN, INST_6XNN, INST_7XNN } from '../instructions'

describe('The INST_1NNN CPU instruction', () => {
  it('should be able to set PC to 0x0234', () => {
    const state = initialEmulatorState

    state.opcode[0] = 0x1234

    const result = INST_1NNN(state)

    expect(result.pc[0]).toBe(0x0234)
  })

  it('should be able to set PC to 0x0456', () => {
    const state = initialEmulatorState

    state.opcode[0] = 0x1456

    const result = INST_1NNN(state)

    expect(result.pc[0]).toBe(0x0456)
  })
})

describe('The INST_6XNN CPU instruction', () => {
  it('should be able to set register V10 with the value 15', () => {
    const state = initialEmulatorState

    state.opcode[0] = 0x6a0f

    const result = INST_6XNN(state)

    expect(result.v[10]).toBe(15)
  })

  it('should be able to set register V3 with the value 242', () => {
    const state = initialEmulatorState

    state.opcode[0] = 0x63f2

    const result = INST_6XNN(state)

    expect(result.v[3]).toBe(242)
  })

  it('should be able to set register V0 with the value 10', () => {
    const state = initialEmulatorState

    state.opcode[0] = 0x600a

    const result = INST_6XNN(state)

    expect(result.v[0]).toBe(10)
  })
})

describe('The INST_7XNN CPU instruction', () => {
  it('should be able to set register V3 with the value 14', () => {
    const state = initialEmulatorState

    state.opcode[0] = 0x730c

    state.v[0x3] = 0x02

    const result = INST_7XNN(state)

    expect(result.v[0x3]).toBe(0xe)
  })

  it('should be able to set register V14 with the value 42', () => {
    const state = initialEmulatorState

    state.opcode[0] = 0x7e1d

    state.v[0xe] = 0x0d

    const result = INST_7XNN(state)

    expect(result.v[0xe]).toBe(0x2a)
  })
})
