import { atom } from 'jotai'

import Chip8 from '../emulator/chip.8'
import fontSet from '../emulator/font.set'
import U8BitOf from '../types/u8.bit.of'
import U16BitOf from '../types/u16.bit.of'
import loadFontSet from '../utils/load.font.set'

const ONE_BYTE_INIT_VALUE = 0x00
const TWO_BYTE_INIT_VALUE = 0x0000
const PC_INIT_VALUE = 0x200

const loadFontSetIntoMemory = loadFontSet([])

export const initialEmulatorState: Chip8 = {
  v: [],
  memory: loadFontSetIntoMemory(fontSet),
  index: U16BitOf(TWO_BYTE_INIT_VALUE),
  pc: U16BitOf(PC_INIT_VALUE),
  stack: [],
  sp: U8BitOf(ONE_BYTE_INIT_VALUE),
  delayTimer: U8BitOf(TWO_BYTE_INIT_VALUE),
  soundTimer: U8BitOf(TWO_BYTE_INIT_VALUE),
  keypad: [],
  video: [],
  opcode: U16BitOf(TWO_BYTE_INIT_VALUE)
}

const emulatorState = atom<Chip8>(initialEmulatorState)

export default emulatorState
