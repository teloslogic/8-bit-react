import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './components/pages/about'
import Debugger from './components/pages/debugger'
import Games from './components/pages/games'
import Home from './components/pages/home'
import RoutingPath from './routing.path'

const App: FC = () => (
  <Routes>
    <Route path={RoutingPath.Home} element={<Home />}></Route>
    <Route path={RoutingPath.Games} element={<Games />}></Route>
    <Route path={RoutingPath.Debugger} element={<Debugger />}></Route>
    <Route path={RoutingPath.About} element={<About />}></Route>
  </Routes>
)

export default App
