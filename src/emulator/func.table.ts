import Chip8 from './chip.8'
import { ADD_7XNN, CLS_00E0, Instruction, JP_1NNN, LD_6XNN, LD_ANNN, NO_OP, RET_00EE } from './instructions'

export const funcTable0: Instruction[] = []
export const funcTable8: Instruction[] = []
export const funcTableE: Instruction[] = []

for (let index = 0; index <= 0xe; index++) {
  funcTable0[index] = NO_OP
  funcTable8[index] = NO_OP
  funcTableE[index] = NO_OP
}

funcTable0[0x0] = CLS_00E0
funcTable0[0xe] = RET_00EE

const Table0 = (state: Chip8): Chip8 => {
  const resultState = funcTable0[state.opcode[0]](state)
  return resultState
}

const Table8 = (state: Chip8): Chip8 => {
  const resultState = funcTable8[state.opcode[0]](state)
  return resultState
}

const TableE = (state: Chip8): Chip8 => {
  const resultState = funcTableE[state.opcode[0]](state)
  return resultState
}

const funcTable: Instruction[] = [
  Table0,
  JP_1NNN,
  NO_OP,
  NO_OP,
  NO_OP,
  NO_OP,
  LD_6XNN,
  ADD_7XNN,
  Table8,
  NO_OP,
  LD_ANNN,
  NO_OP,
  NO_OP,
  NO_OP,
  TableE,
  NO_OP
]

export default funcTable
