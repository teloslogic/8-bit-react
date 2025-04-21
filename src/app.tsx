import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import Debugger from './components/pages/debugger'
import Games from './components/pages/games'
import Home from './components/pages/home'
import RoutingPaths from './routing.paths'

const App: FC = () => (
  <Routes>
    <Route path={RoutingPaths.Home} element={<Home />}></Route>
    <Route path={RoutingPaths.Games} element={<Games />}></Route>
    <Route path={RoutingPaths.Debugger} element={<Debugger />}></Route>
  </Routes>
)

export default App
