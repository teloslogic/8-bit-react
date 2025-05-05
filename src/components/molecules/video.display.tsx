import { useAtom } from 'jotai'
import { FC, useEffect, useRef } from 'react'

import { VIDEO_HEIGHT, VIDEO_WIDTH } from '../../emulator/chip.8'
import Runtime from '../../emulator/runtime'
import runtimeState from '../../state/runtime.state'

export type VideoDisplayProps = object

const VideoDisplay: FC<VideoDisplayProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [runtime] = useAtom<Runtime>(runtimeState)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw a red rectangle
    ctx.fillStyle = 'red'
    ctx.fillRect(20, 20, 150, 100)
  }, [runtime.videoScale])

  return (
    <canvas
      ref={canvasRef}
      width={VIDEO_WIDTH * runtime.videoScale}
      height={VIDEO_HEIGHT * runtime.videoScale}
      style={{ border: '1px solid black' }}
    />
  )
}

export default VideoDisplay
