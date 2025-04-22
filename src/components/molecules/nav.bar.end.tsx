import { FC, ReactNode } from 'react'

export type NavBarEndProps = {
  children?: ReactNode
}

const NavBarEnd: FC<NavBarEndProps> = ({ children }) => <div className="navbar-end">{children}</div>

export default NavBarEnd
