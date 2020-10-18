import React, { Suspense, lazy } from 'react'
import { Router } from '@reach/router'
import { GlobalStyles } from './styles/GlobalStyles.js'
// import { ThemeProvider } from 'styled-components'

// Use loadable Components if you need SSR or Library splitting
const Expertice = lazy(() => import('./pages/Expertice'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Skilled = lazy(() => import('./pages/Skilled'))
const About = lazy(() => import('./pages/About'))
const Home = lazy(() => import('./pages/Home'))
const Menu = lazy(() => import('./pages/Menu'))

// const theme = {
//   bgApp: '#15151545',
//   bgBlend: 'normal'
// }

// #app{ background-color: ${props => props.theme.bgApp}}

export const App = () => {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <GlobalStyles />
      <Suspense fallback={<h1 style={{ color: '#A7A7A7', backgroundColor: '#151515', display: 'grid', width: '100%', height: '100vh', textAlign: 'center', alignContent: 'center' }}>LOADING . . . </h1>}>
        <Router>
          <Home path='/' />
          <Menu path='/menu' />
          <About path='/about' />
          <Skilled path='/skilled' />
          <Expertice path='/expertice' />
          <NotFound default />
        </Router>
      </Suspense>
      {/* </ThemeProvider> */}
    </>
  )
}
