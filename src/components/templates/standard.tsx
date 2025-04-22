import { useAtom } from 'jotai'
import { FC, ReactNode } from 'react'

import themeState from '../../state/theme.state'
import NavBarCenter from '../molecules/nav.bar.center'
import NavBarEnd from '../molecules/nav.bar.end'
import NavBarStart from '../molecules/nav.bar.start'
import ThemeSelect from '../molecules/theme.select'
import NavBar from '../organisms/nav.bar'

export type StandardProps = {
  children?: ReactNode
  isCentered?: boolean
}

const Standard: FC<StandardProps> = ({ children, isCentered }) => {
  const [theme] = useAtom(themeState)

  return (
    <div className="flex flex-col min-h-screen" data-theme={theme}>
      <nav>
        <NavBar
          navbarStart={<NavBarStart brandText="Chip-8 Emulator" />}
          navBarCenter={<NavBarCenter />}
          navBarEnd={
            <NavBarEnd>
              <ThemeSelect />
            </NavBarEnd>
          }
        />
      </nav>
      <main className={isCentered ? 'flex justify-center items-center p-5' : 'p-5'}>{children}</main>
      <footer className="mt-auto"></footer>
    </div>
  )
}

export default Standard
