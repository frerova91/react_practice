import React, { useRef, useState, useEffect } from 'react'
// import { NavButton } from '../components/custom/NavButton/index.js'
import { Head, Main, Foot, Layout } from './styles/HomeStyles.js'
import { NavLinks } from '../components/custom/NavLinks/NavLinks'
// import { Layout } from '../components/layout/Layout.js'
import { SvgComponent as Svg } from '../components/custom/SvgButton/index.js'
import { NavLinkMobile } from '../components/custom/NavbarM/NavLinkMobile'

import img from '../assets/background/background-default.webp'
import imgD from '../assets/menu/default.webp'
import imgS from '../assets/menu/stroke.webp'
import imgR from '../assets/menu/rain.webp'

// import { ThemeProvider } from 'styled-components'

// const theme = { //this is for themeProvider
//   bgApp: `#151515 url(${img}) no-repeat fixed center / cover`,
//   bgBlend: 'normal'
// }

const myBackground = `#151515 url(${img}) no-repeat fixed center / cover`
const myBlendMode = 'normal'

export const Home = () => {
  // utilizar themeprovider seria la forma correcta en react pero creo first content mininfull paint mas largo en la aplicacion, de igualforma si usamos getElementById().

  // document.body.style.background = `#151515 url(${img}) no-repeat fixed center / cover`
  // document.body.style.backgroundBlendMode = 'normal'

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  // const [image, setImage] = useState({ image: false })

  const handleImage = (ref) => {
    // console.log(ref4.current.src)
    if (ref === ref1) {
      // ({ image: true })
      // console.log(image)
      ref4.current.src = `${imgD}`
      // document.querySelector('img').src = `${imgS}`
    }
    if (ref === ref2) {
      ref4.current.src = `${imgR}`
    }
    if (ref === ref3) {
      ref4.current.src = `${imgS}`
    }
  }

  function debounce (fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    }
  }

  // dejaremos esto aqui como muestra pero implementaremos la funcion en un hook para reutilizarla
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight])

  useEffect(() => {
    const handleWindowResize = debounce(() => {
      /* console.log('***** debounced resize') See the cool difference in console */
      setWindowSize([window.innerWidth, window.innerHeight])
    }, 100) // 100ms
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    // <ThemeProvider theme={theme}>
    <Layout style={{ background: `${myBackground}`, backgroundBlendMode: `${myBlendMode}` }}>

      <Head>
        {
          windowSize[0] <= 768 ? <NavLinkMobile /> : <Svg />
        }
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
            {/*
            <h1 onMouseOver={() => { document.querySelector('img').src = `${imgD}` }}>CODE</h1>
            <h1 onMouseOver={() => { document.querySelector('img').src = `${imgR}` }}>DESIGN</h1>
            <h1 onMouseOver={() => { document.querySelector('img').src = `${imgS}` }}>DEVELOP</h1>
            */}
            <h1 ref={ref1} onMouseOver={() => handleImage(ref1)}>CODE</h1>
            <h1 ref={ref2} onMouseOver={() => handleImage(ref2)}>DESIGN</h1>
            <h1 ref={ref3} onMouseOver={() => handleImage(ref3)}>DEVELOP</h1>
          </div>

          <img
            ref={ref4}
            // id='img'
            src={imgD}
            alt='images'
          />
        </section>
      </Main>

      <Foot>
        <NavLinks />
      </Foot>

    </Layout>
    // </ThemeProvider>
  )
}
export { Home as default } from './Home'
