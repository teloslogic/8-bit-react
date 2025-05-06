import { atom } from 'jotai'

import { VIDEO_HEIGHT, VIDEO_WIDTH } from '../emulator/chip.8'
import Runtime from '../emulator/runtime'

const aspectRatio = VIDEO_WIDTH / VIDEO_HEIGHT

export const initialRuntimeState: Runtime = {
  videoScale: aspectRatio * 3.2,
  delayTimer: 1,
  soundTimer: 1,
  isRunning: true
}

const runtimeState = atom<Runtime>(initialRuntimeState)

export default runtimeState
