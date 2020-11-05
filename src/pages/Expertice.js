import React, { useState, useRef, useEffect } from 'react'
import { Layout, Head, Main, Foot } from './styles/ExperticeStyles'
import { NavLinks } from '../components/custom/NavLinks/NavLinks'
import { SvgComponent as Svg } from '../components/custom/SvgButton/index'
import { Social } from '../components/custom/Social/index'
import { NavLinkMobile } from '../components/custom/NavbarM/NavLinkMobile'
import { useWindowResize } from '../components/hooks/useWindowResize'
import { Modal } from '../components/custom/Modal/Modal'

import img from '../assets/background/background-patern.webp'

import imgA from '../assets/titles/arqFrontEnd.webp'
import imgB from '../assets/titles/baseDeDatos.webp'
import imgC from '../assets/titles/carreraJavaScript.webp'
import imgD from '../assets/titles/gitGithub.webp'
import imgE from '../assets/titles/reactA.webp'
import imgF from '../assets/titles/webpack.webp'

export const Expertice = () => {
  // document.body.style.background = `rgba(41,41,41,0.7) url(${img}) no-repeat fixed center / cover`
  // document.body.style.backgroundBlendMode = 'multiply'
  const arrayOfImg = [{ src: `${imgA}` }, { src: `${imgB}` }, { src: `${imgC}` }, { src: `${imgD}` }, { src: `${imgE}` }, { src: `${imgF}` }]

  const [selectedImg, setSelectedImg] = useState(null)
  const [width, height] = useWindowResize()
  const ref0 = useRef([])

  const handleClick = (e, i) => {
    setSelectedImg(arrayOfImg[i].src)
    // console.log(selectedImg)
  }

  useEffect(() => {
    ref0.current.style.background = `rgba(41,41,41,0.7) url(${img}) no-repeat fixed center / cover`
    ref0.current.style.backgroundBlendMode = 'multiply'
  }, [])

  return (
    <Layout ref={ref0}>

      <Head>
        {`${width}` <= 768 && `${height}` <= 1024 ? <NavLinkMobile /> : <Svg />}
        <span>Expertice</span>
      </Head>

      <Main>

        <figure>
          {/* <div><img className={`${active}`} onClick={(e) => handleClick(e)} src={imgB} alt='Error' /></div>
          <div><img className={`${active}`} onClick={(e) => handleClick(e)} src={imgC} alt='Error' /></div>
          <div><img className={`${active}`} onClick={(e) => handleClick(e)} src={imgA} alt='Error' /></div>
          <div><img className={`${active}`} onClick={(e) => handleClick(e)} src={imgD} alt='Error' /></div>
          <div><img className={`${active}`} onClick={(e) => handleClick(e)} src={imgE} alt='Error' /></div>
          <div><img className={`${active}`} onClick={(e) => handleClick(e)} src={imgF} alt='Error' /></div> */}
          {[0, 1, 2, 3, 4, 5].map((el, i) => <div key={i}><img onClick={(e) => handleClick(e, i)} key={i} src={arrayOfImg[i].src} alt='Course Title' /></div>)}

          {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}

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
