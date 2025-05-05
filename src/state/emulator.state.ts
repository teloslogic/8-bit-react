import { atom } from 'jotai'

import Chip8, { MEMORY_SIZE, START_ADDRESS, VIDEO_HEIGHT, VIDEO_WIDTH } from '../emulator/chip.8'
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
  video: new Uint32Array(VIDEO_WIDTH * VIDEO_HEIGHT),
  opcode: new Uint16Array(1)
}

initialEmulatorState.pc[0] = START_ADDRESS
initialEmulatorState.memory = loadFontSetIntoMemory(fontSet)

const emulatorState = atom<Chip8>(initialEmulatorState)

export default emulatorState
