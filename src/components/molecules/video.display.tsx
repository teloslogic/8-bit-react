import { useAtom } from 'jotai'
import { FC, useEffect, useRef } from 'react'

import Chip8, { VIDEO_HEIGHT, VIDEO_WIDTH } from '../../emulator/chip.8'
import Runtime from '../../emulator/runtime'
import emulatorState from '../../state/emulator.state'
import runtimeState from '../../state/runtime.state'

export type VideoDisplayProps = object

const VideoDisplay: FC<VideoDisplayProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [runtime] = useAtom<Runtime>(runtimeState)
  const [state] = useAtom<Chip8>(emulatorState)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    for (let y = 0; y < VIDEO_HEIGHT; y++) {
      for (let x = 0; x < VIDEO_WIDTH; x++) {
        const i = y * VIDEO_WIDTH + x
        const pixel = state.video[i]

        ctx.fillStyle = pixel === 0xffffffff ? 'white' : 'black'
        ctx.fillRect(x * runtime.videoScale, y * runtime.videoScale, runtime.videoScale, runtime.videoScale)
      }
    }
  }, [runtime.videoScale, state.video])

  return (
    <canvas
      ref={canvasRef}
      width={VIDEO_WIDTH * runtime.videoScale}
      height={VIDEO_HEIGHT * runtime.videoScale}
      style={{ border: '1px solid black', backgroundColor: 'black' }}
    />
  )
}

export default VideoDisplay
