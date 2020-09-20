import React, { useEffect, useRef } from 'react'
import { Link } from '@reach/router'
import { Head, Main, Foot, Layout } from './styles/MenuStyles'
import SvgX from '../components/custom/SvgX/index.js'
import SvgLogo from '../components/custom/SvgLogo/index.js'
import SvgLogoWhite from '../components/custom/SvgLogoWhite'

import imgD from '../assets/menu/default.webp'
import imgR from '../assets/background/background-rain.webp'
import imgS from '../assets/background/background-stroke.webp'
import imgP from '../assets/background/background-patern.webp'

export const Menu = () => {
  // console.log('componentWillMount')
  document.body.style.backgroundImage = 'none'
  document.body.style.backgroundColor = '#151515'
  document.body.style.backgroundBlendMode = 'multiply'
  const name = ['HOME', 'ABOUT', 'SKILLED', 'EXPERTICE']

  const ref1 = useRef([])
  const ref2 = useRef([])
  const ref3 = useRef([])
  const ref4 = useRef([])

  const useHandleEvent = (i, e) => {
    switch (i) {
      case 0:
        // console.log(e.target.text)
        ref1.current.text = '01 - HOME'
        document.body.style.background = `url(${imgD}) no-repeat fixed center / cover`
        break
      case 1:
        // console.log(e.target.text)
        ref2.current.text = '02 - ABOUT'
        document.body.style.background = `url(${imgR}) no-repeat fixed center / cover`
        break
      case 2:
        // console.log(e.target.text)
        ref3.current.text = '03 - SKILLED'
        document.body.style.background = `url(${imgS}) no-repeat fixed center / cover`
        break
      case 3:
        // console.log(e.target.text)
        ref4.current.text = '04 - EXPERTICE'
        document.body.style.background = `url(${imgP}) no-repeat fixed center / cover rgba(21,21,21,0.5)`
        break
      default:
        break
    }
  }

  const handleOut = (e) => {
    // console.log(e.target.text)
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = '#151515'
    if (e.target.text === '01 - HOME') {
      // console.log(ref1)
      ref1.current.text = 'HOME'
    }
    if (e.target.text === '02 - ABOUT') {
      // console.log(ref2)
      ref2.current.text = 'ABOUT'
    }
    if (e.target.text === '03 - SKILLED') {
      // console.log(ref3)
      ref3.current.text = 'SKILLED'
    }
    if (e.target.text === '04 - EXPERTICE') {
      // console.log(ref4)
      ref4.current.text = 'EXPERTICE'
    }
  }

  useEffect(() => {
    // console.log('componentDidMount')
    return () => {

    }
  }, [])

  return (
    <Layout>
      <Head>
        <SvgX />
        <SvgLogoWhite />
      </Head>

      <Main>
        <h1><Link ref={ref1} onMouseOut={(e) => handleOut(e)} onMouseOver={(e) => useHandleEvent(0, e)} to='/'>{name[0]}</Link></h1>
        <h1><Link ref={ref2} onMouseOut={(e) => handleOut(e)} onMouseOver={(e) => useHandleEvent(1, e)} to='/about'>{name[1]}</Link></h1>
        <h1><Link ref={ref3} onMouseOut={(e) => handleOut(e)} onMouseOver={(e) => useHandleEvent(2, e)} to='/skilled'>{name[2]}</Link></h1>
        <h1><Link ref={ref4} onMouseOut={(e) => handleOut(e)} onMouseOver={(e) => useHandleEvent(3, e)} to='/expertice'>{name[3]}</Link></h1>
        {/* {
          [0, 1, 2, 3].map((el, i) => <h1 key={i}><Link onMouseOver={() => useHandleEvent(i)} values={i} key={i} to='/'>{name[i]}</Link></h1>)
        } */}
      </Main>

      <Foot>

        <div>
          <h3>Networks</h3>
          <a href='https://github.com/frerova91'>GitHub</a>
          <a href='https://twitter.com/Frerova'>Twitter</a>
          <a href='https://www.linkedin.com/in/freddyJoseRojasValera'>LinkedIn</a>
        </div>

        <div>
          <h3>Address</h3>
          {/* <a href='mailto:' data-website='moc.atonatut' data-user='@19avoref' /> */}
          <a href='mailto:frerova91@tutanota.com'>Email</a>
          <Link to='/'>CV - PDF</Link>
        </div>

        <SvgLogo />

      </Foot>
    </Layout>
  )
}
export { Menu as default } from './Menu'
