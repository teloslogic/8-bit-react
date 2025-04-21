import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import RoutingPaths from '../../routing.paths'

export type NavBarCenterProps = object

const NavBarCenter: FC<NavBarCenterProps> = () => (
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="text-lg">
        <NavLink to={RoutingPaths.Games}>Games</NavLink>
      </li>
      <li className="text-lg">
        <NavLink to={RoutingPaths.Debugger}>Debugger</NavLink>
      </li>
    </ul>
  </div>
)

export default NavBarCenter
