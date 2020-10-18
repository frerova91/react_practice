import React, { useRef, useEffect } from 'react'
import { Layout, Head, Main, Foot } from './styles/SkilledStyles'
import { SvgComponent as Svg } from '../components/custom/SvgButton'
import { NavLinks } from '../components/custom/NavLinks/NavLinks'
import img from '../assets/background/background-stroke.webp'

export const Skilled = () => {
  // document.body.style.background = `rgba(21,21,21,0.3) url(${img}) no-repeat fixed left / cover`
  // document.body.style.backgroundBlendMode = 'multiply'

  const ref0 = useRef([])

  useEffect(() => {
    ref0.current.style.background = `rgba(21,21,21,0.3) url(${img}) no-repeat fixed left / cover`
  }, [])

  return (
    <Layout ref={ref0}>
      <Head>
        <Svg />
        <span>Skilled</span>
      </Head>

      <Main>
        <div>
          <h3>Skilled in -</h3>

          <p>The main area of my expertice is front-end development, React is what i will normaly use for building web Apps with custom plugins, features, and layouts.</p><p>But i allways ready for learn some new languages, frameworks or libraries that can improve my workflow to be more efficient. Also i have some expirience in Full stack with React, mongodb, mysql, nodejs, express, graphql and ORM like Mongoose, building statick web sites, PWA & ServerLess</p>
        </div>

        <div>
          <p>CSS 3</p>
          <p>NODE</p>
          <p>MYSQL</p>
          <p>HTML 5</p>
          <p>JS & TS</p>
          <p>MONGO DB</p>
          <p>GIT Y GITHUB</p>
          <p>NPM / YARN</p>
          <p>AND MORE</p>
        </div>
      </Main>

      <Foot>
        <NavLinks />

        <h1>03</h1>

      </Foot>

    </Layout>
  )
}
export { Skilled as default } from './Skilled'
