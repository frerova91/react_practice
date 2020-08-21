import React from 'react'
import { Link } from '@reach/router'
// import { NavButton } from '../components/custom/NavButton/index.js'
import { Head, Main, Foot, Layout } from './styles/HomeStyles.js'
// import { Layout } from '../components/layout/Layout.js'
import { SvgComponent as Svg } from '../components/custom/SvgButton/index.js'

import img from '../assets/background/background-default.webp'
import imgD from '../assets/menu/default.webp'
import imgS from '../assets/menu/stroke.webp'
import imgR from '../assets/menu/rain.webp'

export const Home = () => {
  document.body.style.background = ` #151515 url(${img}) no-repeat fixed center / cover`
  document.body.style.backgroundBlendMode = 'normal'

  return (
    <Layout>
      <Head>
        <Svg />
        <h3>WELLCOME</h3>
        <span>Home</span>
      </Head>

      <Main>
        <aside>
          Hi I am{' '}
          <span>
            <strong>FREDDY ROJAS</strong>
          </span>{' '}
          enginner in systems and Web Developer
        </aside>

        <section>
          <h1>01</h1>

          <div>
            <h1 onMouseOver={() => { document.querySelector('img').src = `${imgD}` }}>CODE</h1>
            <h1 onMouseOver={() => { document.querySelector('img').src = `${imgR}` }}>DESIGN</h1>
            <h1 onMouseOver={() => { document.querySelector('img').src = `${imgS}` }}>DEVELOP</h1>
          </div>

          <img
            id='img'
            src={imgD}
            alt='Error'
          />
        </section>
      </Main>

      <Foot>
        <div>
          <Link to='/next'>&#x0003C;</Link>
          <Link to='/'>&#x0002F;</Link>
          <Link to='/back'>&#x0003E;</Link>
        </div>
      </Foot>
    </Layout>
  )
}
