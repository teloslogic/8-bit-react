import { FC, ReactNode } from 'react'

export type EmulatorPanelProps = {
  children?: ReactNode
}

const EmulatorPanel: FC<EmulatorPanelProps> = ({ children }) => (
  <div className="card bg-base-300 w-96 shadow-lg">
    <figure>Game Console Screen Goes Here</figure>
    <div className="card-body">
      <h2 className="card-title">Game Title</h2>
      {children}
    </div>
  </div>
)

export default EmulatorPanel
