import React from 'react'
import { Router } from '@reach/router'
import { Expertice } from './pages/Expertice'
import { Skilled } from './pages/Skilled'
import { About } from './pages/About'
import { Home } from './pages/Home.js'
import { Menu } from './pages/Menu.js'

import { GlobalStyles } from './styles/GlobalStyles.js'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Home path='/' />
        <Menu path='/menu' />
        <About path='/about' />
        <Skilled path='/skilled' />
        <Expertice path='/expertice' />
      </Router>
    </>
  )
}
