import React from 'react'
import { Link } from '@reach/router'
import { Links } from './styles'
import { SvgComponent as Menu } from '../SvgButton/index'

// Nota:al parecer utilizar esta forma de implementar < o > no es adecuada por ser malo para la accesibilidad de las paginas web.

export const NavLinkMobile = () => {
  const routes = ['/', '/about', '/skilled', '/expertice']
  const currentLocation = window.location.pathname

  const Myfoward = routes.map((el, i) => {
    const result = currentLocation === el ? routes[i + 1] : null
    return result
  })

  const Mybackward = routes.map((el, i) => {
    const result = currentLocation === el ? routes[i - 1] : null
    return result
  })

  const next = Myfoward.filter((el, i) => {
    // cuando el elemento del array es diferente de null trae una ruta de lo contrario es un string vacio
    let res
    res = el !== null ? res = el : res = el
    return res
  })

  const back = Mybackward.filter((el, i) => {
    let res
    res = el !== null ? res = el : res = el
    return res
  })

  return (
    <Links arial-lable='navbar'>
      <Link arial-lable='next page' to={`${back}`}>&#x0003C;</Link>
      <Menu />
      <Link arial-lable='previus page' to={`${next}`}>&#x0003E;</Link>
    </Links>
  )
}
