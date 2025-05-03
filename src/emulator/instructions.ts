import Chip8, { VIDEO_DIM } from './chip.8'

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
  state.video = new Uint32Array(VIDEO_DIM)

  return state
}

/**
 * Return from a subroutine.
 * PC = STACK[SP--]
 * @param state The current emulator state.
 * @returns The new emulator state.
 */
export const RET_00EE = (state: Chip8): Chip8 => {
  state.sp[0] = state.sp[0]--
  state.pc[0] = state.stack[state.sp[0]]

  return state
}

/**
 * Jump to location NNN by setting the program counter to NNN.
 * PC = NNN
 * @param state The current emualtor state.
 * @returns The new emulator state.
 */
export const JP_1NNN = (state: Chip8): Chip8 => {
  const address = state.opcode[0] & 0x0fff

  state.pc[0] = address

  return state
}

/**
 * Set register VX with NN.
 * V[X] = NNN.
 * @param state The current emulator state.
 * @returns The new emulator state.
 */
export const LD_6XNN = (state: Chip8): Chip8 => {
  const x = (state.opcode[0] & 0x0f00) >> 8
  const byte = state.opcode[0] & 0x00ff

  state.v[x] = byte

  return state
}

/**
 * Set the Index register.
 * I = NNN
 * @param state The current emulator state.
 * @returns The new emulator state.
 */
export const LD_ANNN = (state: Chip8): Chip8 => {
  const address = state.opcode[0] & 0x0fff

  state.index[0] = address

  return state
}

/**
 * Add register VX to NN.
 * V[X] = V[X] + NN
 * @param state The current emulator state.
 * @returns The new emulator state.
 */
export const ADD_7XNN = (state: Chip8): Chip8 => {
  const x = (state.opcode[0] & 0x0f00) >> 8
  const byte = state.opcode[0] & 0x00ff

  state.v[x] = state.v[x] + byte

  return state
}
