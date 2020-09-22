import React, { Suspense, lazy } from 'react'
import { Router } from '@reach/router'
import { GlobalStyles } from './styles/GlobalStyles.js'

// Use loadable Components if you need SSR or Library splitting
const Expertice = lazy(() => import('./pages/Expertice'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Skilled = lazy(() => import('./pages/Skilled'))
const About = lazy(() => import('./pages/About'))
const Home = lazy(() => import('./pages/Home'))
const Menu = lazy(() => import('./pages/Menu'))

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<h1>LOADING . . . </h1>}>
        <Router>
          <Home path='/' />
          <Menu path='/menu' />
          <About path='/about' />
          <Skilled path='/skilled' />
          <Expertice path='/expertice' />
          <NotFound path='/notfound' />
        </Router>
      </Suspense>
    </>
  )
}
