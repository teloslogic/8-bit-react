import Chip8 from './chip.8'
import funcTable from './func.table'
import Runtime from './runtime'

/**
 * The decoding and executing of emulator the CPU instruction set.
 * @param state current of the emulator
 * @param runtime emulator runtim state
 */
const cycle = (state: Chip8, runtime: Runtime) => {
  // fetch the next instruction in the form of an opcode
  const opcode = (state.memory[state.pc[0]] << 8) | state.memory[state.pc[0] + 1]

  // increment the orogram counter before CPU instruction execution
  state.pc[0] += 2
}
