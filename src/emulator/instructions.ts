import U8Bit from '../types/u8.bit'
import U8BitOf from '../types/u8.bit.of'
import U16Bit from '../types/u16.bit'
import U16BitOf from '../types/u16.bit.of'
import Chip8 from './chip.8'

/**
 * Each CPU instruction returns an updated emualtor state.
 */
export type Instruction = (state: Chip8) => Chip8

/**
 * Performs no CPU operation and returns current
 * state without modification.
 * @param state The current emulator state.
 * @returns The current emulator state.
 */
export const NO_OP = (state: Chip8): Chip8 => state

/**
 * Clear the display by clearing the video memory.
 * @param state The current emualtor state.
 * @returns The new emulator state.
 */
export const CLS_00E0 = (state: Chip8): Chip8 => {
  state.video = []

  return state
}

/**
 * Return from a subroutine.
 * PC = STACK[SP--]
 * @param state The current emulator state.
 * @returns The new emulator state.
 */
export const RET_00EE = (state: Chip8): Chip8 => {
  const decrementedSp = state.sp.decrement()
  state.sp = decrementedSp
  state.pc = state.stack[state.sp.getNumber()]

  return state
}

/**
 * Jump to location NNN by setting the program counter to NNN.
 * PC = NNN
 * @param state The current emualtor state.
 * @returns The new emulator state.
 */
export const JP_1NNN = (state: Chip8): Chip8 => {
  const address: U16Bit = state.opcode.AND(U16BitOf(0x0fff))

  state.pc = address

  return state
}

/**
 * Set register VX with NN.
 * V[X] = NNN.
 * @param state The current emulator state.
 * @returns The new emulator state.
 */
export const LD_6XNN = (state: Chip8): Chip8 => {
  const x: U8Bit = U8BitOf(state.opcode.AND(U16BitOf(0x0f00)).getNumber() >> 8)
  const byte: U8Bit = U8BitOf(state.opcode.AND(U16BitOf(0x00ff)).getNumber())

  state.v[x.getNumber()] = byte

  return state
}

/**
 * Set the Index register.
 * I = address
 * @param state The current emulator state.
 * @returns The new emulator state.
 */
export const LD_ANNN = (state: Chip8): Chip8 => {
  const address: U16Bit = state.opcode.AND(U16BitOf(0x0fff))

  state.index = address

  return state
}

/**
 * Add register VX to NN.
 * V[X] = V[X] + NN
 * @param state The current emulator state.
 * @returns The new emulator state.
 */
export const ADD_7XNN = (state: Chip8): Chip8 => {
  const x: U8Bit = U8BitOf(state.opcode.AND(U16BitOf(0x0f00)).getNumber() >> 8)
  const byte: U8Bit = U8BitOf(state.opcode.AND(U16BitOf(0x00ff)).getNumber())

  state.v[x.getNumber()] = U8BitOf(state.v[x.getNumber()].getNumber() + byte.getNumber())

  return state
}
