import { useAtom } from 'jotai'
import { useEffect } from 'react'

import Chip8, { START_ADDRESS } from '../emulator/chip.8'
import emulatorState from '../state/emulator.state'
import cloneChip8 from '../utils/clone.chip8'
import loadRomFrom from '../utils/load.rom.from'

const useRom = (url: string) => {
  const [, setState] = useAtom<Chip8>(emulatorState)

  useEffect(() => {
    async function loadRom() {
      try {
        const rom = await loadRomFrom(url)
        setState(previousState => {
          const clonedState = cloneChip8(previousState)
          let memoryIndex = START_ADDRESS

          rom.map(currentValue => {
            clonedState.memory[memoryIndex] = currentValue
            memoryIndex++

            return currentValue
          })

          return clonedState
        })

        console.log('ROM loaded into memory!')
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }

    loadRom()
  }, [setState, url])
}

export default useRom
