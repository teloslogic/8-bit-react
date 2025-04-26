import Chip8 from '../emulator/chip.8'

/**
 * Clone an existing Chip8 object.
 * @param source Chip 8 object.
 * @returns a new, cloned Chip8 object.
 */
const cloneChip8 = (source: Chip8): Chip8 => {
  return {
    v: [...source.v], // clone the registers
    memory: [...source.memory], // clone the memory
    index: source.index, // primitive (number) — safe to copy directly
    pc: source.pc, // primitive (number) — safe to copy directly
    stack: [...source.stack], // clone the stack array
    sp: source.sp, // primitive (number)
    delayTimer: source.delayTimer, // primitive (number)
    soundTimer: source.soundTimer, // primitive (number)
    keypad: [...source.keypad], // clone the keypad array
    video: source.video.map(row => [...row]), // deep-clone the 2D video buffer
    opcode: source.opcode // primitive (number)
  }
}

export default cloneChip8
