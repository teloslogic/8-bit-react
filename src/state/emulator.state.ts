import { atom } from 'jotai'

import Chip8, { MEMORY_SIZE, PC_INIT, VIDEO_DIM } from '../emulator/chip.8'
import fontSet from '../emulator/font.set'
import loadFontSet from '../utils/load.font.set'

const loadFontSetIntoMemory = loadFontSet(new Uint8Array(MEMORY_SIZE))

export const initialEmulatorState: Chip8 = {
  v: new Uint8Array(16),
  memory: new Uint8Array(MEMORY_SIZE),
  index: new Uint16Array(1),
  pc: new Uint16Array(1),
  stack: new Uint16Array(16),
  sp: new Uint8Array(1),
  delayTimer: new Uint8Array(1),
  soundTimer: new Uint8Array(1),
  keypad: new Uint8Array(16),
  video: new Uint32Array(VIDEO_DIM),
  opcode: new Uint16Array(1)
}

initialEmulatorState.pc[0] = PC_INIT
initialEmulatorState.memory = loadFontSetIntoMemory(fontSet)

const emulatorState = atom<Chip8>(initialEmulatorState)

export default emulatorState
