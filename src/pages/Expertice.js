import React from 'react'
import { Layout, Head, Main, Foot } from './styles/ExperticeStyles'
import { NavLinks } from '../components/custom/NavLinks/NavLinks'
import { SvgComponent as Svg } from '../components/custom/SvgButton/index'
import { Social } from '../components/custom/Social/index'

import img from '../assets/background/background-patern.webp'

import imgA from '../assets/titles/arqFrontEnd.webp'
import imgB from '../assets/titles/baseDeDatos.webp'
import imgC from '../assets/titles/carreraJavaScript.webp'
import imgD from '../assets/titles/gitGithub.webp'
import imgE from '../assets/titles/reactA.webp'
import imgF from '../assets/titles/webpack.webp'

export const Expertice = () => {
  document.body.style.background = `rgba(41,41,41,0.7) url(${img}) no-repeat fixed center / cover`
  document.body.style.backgroundBlendMode = 'multiply'

  return (
    <Layout>

      <Head>
        <Svg />
        <span>Expertice</span>
      </Head>

      <Main>

        <figure>
          <div><img src={imgA} alt='Error' /></div>
          <div><img src={imgB} alt='Error' /></div>
          <div><img src={imgC} alt='Error' /></div>
          <div><img src={imgD} alt='Error' /></div>
          <div><img src={imgE} alt='Error' /></div>
          <div><img src={imgF} alt='Error' /></div>
        </figure>

        <span>
          <h1>04</h1>
          <h3>Contact Me -</h3>
          <Social />
        </span>

        <aside>
          <span>HOLD CLICK TO ZOOM</span>
        </aside>

      </Main>

      <Foot>
        <NavLinks />
      </Foot>

    </Layout>
  )
}
export { Expertice as default } from './Expertice'
