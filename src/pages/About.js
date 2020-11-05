import React, { useRef, useEffect } from 'react'
import { Layout, Head, Main, Foot } from './styles/AboutStyles'
import { SvgComponent as Svg } from '../components/custom/SvgButton/index'
import { NavLinks } from '../components/custom/NavLinks/NavLinks'
import { NavLinkMobile } from '../components/custom/NavbarM/NavLinkMobile'
import { useWindowResize } from '../components/hooks/useWindowResize'
import SvgLogo from '../components/custom/SvgLogo/index'
import img from '../assets/background/background-rain.webp'

export const About = () => {
  // document.body.style.background = ` #151515 url(${img}) no-repeat fixed center / cover`
  // document.body.style.backgroundBlendMode = 'normal'

  const [width, height] = useWindowResize()

  const ref0 = useRef([])

  useEffect(() => {
    ref0.current.style.background = `#151515 url(${img}) no-repeat fixed center / cover`
  }, [])

  return (
    <Layout ref={ref0}>
      <Head>
        {`${width}` <= 768 && `${height}` <= 1024 ? <NavLinkMobile /> : <Svg />}
        <span>About</span>
      </Head>

      <Main>
        <section>
          <h3>About Me -</h3>

          <p>Hello I'm Freddy Rojas a system engineer with knowledge in front-end and  back-end technologies. Always learning and developing new ways to improve web desing. Excited about working in groups to improve my professional skills and share what I know.</p>
        </section>

        <section>
          <h1>02</h1>

          <div>
            <h3>Networks</h3>
            <a href='https://github.com/frerova91'>GitHub</a>
            <a href='https://twitter.com/Frerova'>Twitter</a>
            <a href='https://www.linkedin.com/in/freddyJoseRojasValera'>LinkedIn</a>
          </div>

          <div>
            <h3>Address</h3>
            <a href='mailto:frerova91@tutanota.com'>Email</a>
            <a>CV - PDF</a>
          </div>

          <SvgLogo />
        </section>

      </Main>

      <Foot>
        <NavLinks />
      </Foot>
    </Layout>
  )
}
export { About as default } from './About'
