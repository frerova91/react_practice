import React from 'react'
import { Router } from '@reach/router'
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
      </Router>
    </>
  )
}
