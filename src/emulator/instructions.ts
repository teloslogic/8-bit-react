import Chip8, { VIDEO_HEIGHT, VIDEO_WIDTH } from './chip.8'

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
export const INST_00E0 = (state: Chip8): Chip8 => {
  state.video = new Uint32Array(VIDEO_WIDTH * VIDEO_HEIGHT)

  return state
}

/**
 * Return from a subroutine.
 * PC = STACK[SP--]
 * @param state The current emulator state.
 * @returns The new emulator state.
 */
export const INST_00EE = (state: Chip8): Chip8 => {
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
export const INST_1NNN = (state: Chip8): Chip8 => {
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
export const INST_6XNN = (state: Chip8): Chip8 => {
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
export const INST_ANNN = (state: Chip8): Chip8 => {
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
export const INST_7XNN = (state: Chip8): Chip8 => {
  const x = (state.opcode[0] & 0x0f00) >> 8
  const byte = state.opcode[0] & 0x00ff

  state.v[x] = state.v[x] + byte

  return state
}

export const INST_DXYN = (state: Chip8): Chip8 => {
  const x = (state.opcode[0] & 0x0f00) >> 8
  const y = (state.opcode[0] & 0x00f0) >> 4
  const height = state.opcode[0] & 0x000f

  const xPos = state.v[x] % VIDEO_WIDTH
  const yPos = state.v[y] % VIDEO_HEIGHT

  state.v[0xf] = 0 // collision flag

  for (let row = 0; row < height; row++) {
    const spriteByte = state.memory[state.index[0] + row]

    for (let column = 0; column < 8; column++) {
      const spritePixel = spriteByte & (0x80 >> column)
      if (spritePixel === 0) continue

      const x = (xPos + column) % VIDEO_WIDTH
      const y = (yPos + row) % VIDEO_HEIGHT
      const index = y * VIDEO_WIDTH + x
      const screenPixel = state.video[index]

      // collision detection
      if (screenPixel === 0xffffffff) {
        state.v[0xf] = 1
      }

      state.video[index] ^= 0xffffffff
    }
  }

  return state
}
