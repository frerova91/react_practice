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
      <Suspense fallback={<h1 style={{ color: '#A7A7A7', background: '#151515', display: 'grid', width: '100%', height: '100vh', textAlign: 'center', alignContent: 'center' }}>LOADING . . . </h1>}>
        <Router>
          <Home path='/' />
          <Menu path='/menu' />
          <About path='/about' />
          <Skilled path='/skilled' />
          <Expertice path='/expertice' />
          <NotFound default />
        </Router>
      </Suspense>
    </>
  )
}
