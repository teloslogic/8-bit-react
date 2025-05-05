import { FC, ReactNode } from 'react'

import VideoDisplay from './video.display'

export type EmulatorPanelProps = {
  children?: ReactNode
}

const EmulatorPanel: FC<EmulatorPanelProps> = ({ children }) => (
  <div className="card bg-base-300 w-110 shadow-lg">
    <figure>
      <VideoDisplay />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Game Title</h2>
      {children}
    </div>
  </div>
)

export default EmulatorPanel
