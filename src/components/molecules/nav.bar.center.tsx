import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import RoutingPath from '../../routing.path'

export type NavBarCenterProps = object

const NavBarCenter: FC<NavBarCenterProps> = () => (
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="text-lg">
        <NavLink to={RoutingPath.Games}>Games</NavLink>
      </li>
      <li className="text-lg">
        <NavLink to={RoutingPath.Debugger}>Debugger</NavLink>
      </li>
      <li className="text-lg">
        <NavLink to={RoutingPath.About}>About</NavLink>
      </li>
    </ul>
  </div>
)

export default NavBarCenter
