import { FC } from 'react'

import EmulatorPanel from '../molecules/emulator.panel'
import Standard from '../templates/standard'

const Home: FC = () => (
  <Standard isCentered>
    <article className="prose lg:prose">
      <EmulatorPanel>
        <p>
          Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone
          mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper
          chantey doubloon starboard grog black jack gangway rutters.
        </p>
        <p>
          Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors.
          Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account
          lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet
          transom heave to.
        </p>
      </EmulatorPanel>
    </article>
  </Standard>
)

export default Home
