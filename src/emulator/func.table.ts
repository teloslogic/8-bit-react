import Chip8 from './chip.8'
import {
  INST_00E0,
  INST_00EE,
  INST_1NNN,
  INST_6XNN,
  INST_7XNN,
  INST_ANNN,
  INST_DXYN,
  Instruction,
  NO_OP
} from './instructions'

export const funcTable0: Instruction[] = []
export const funcTable8: Instruction[] = []
export const funcTableE: Instruction[] = []

for (let index = 0; index <= 0xe; index++) {
  funcTable0[index] = NO_OP
  funcTable8[index] = NO_OP
  funcTableE[index] = NO_OP
}

funcTable0[0x0] = INST_00E0
funcTable0[0xe] = INST_00EE

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
  INST_1NNN,
  NO_OP,
  NO_OP,
  NO_OP,
  NO_OP,
  INST_6XNN,
  INST_7XNN,
  Table8,
  NO_OP,
  INST_ANNN,
  NO_OP,
  NO_OP,
  INST_DXYN,
  TableE,
  NO_OP
]

export default funcTable
