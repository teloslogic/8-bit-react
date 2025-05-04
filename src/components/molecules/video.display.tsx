import { FC, useRef } from 'react'

import { VIDEO_HEIGHT, VIDEO_WIDTH } from '../../emulator/chip.8'

export type VideoDisplayProps = object

const VideoDisplay: FC<VideoDisplayProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  return (
    <canvas ref={canvasRef} width={VIDEO_WIDTH} height={VIDEO_HEIGHT} style={{ border: '1px solid black' }} />
  )
}

export default VideoDisplay
