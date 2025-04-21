import { FC, FunctionComponent, ReactElement } from 'react'

import { NavBarCenterProps } from '../molecules/nav.bar.center'
import { NavBarEndProps } from '../molecules/nav.bar.end'
import { NavBarStartProps } from '../molecules/nav.bar.start'

export type NavBarProps = {
  navbarStart: ReactElement<NavBarStartProps, FunctionComponent<NavBarStartProps>>
  navBarCenter: ReactElement<NavBarCenterProps, FunctionComponent<NavBarCenterProps>>
  navBarEnd: ReactElement<NavBarEndProps, FunctionComponent<NavBarEndProps>>
}

const NavBar: FC<NavBarProps> = ({ navbarStart, navBarCenter, navBarEnd }) => (
  <div className="navbar bg-base-300 shadow-xl">
    {navbarStart}
    {navBarCenter}
    {navBarEnd}
  </div>
)

export default NavBar
