import React from 'react'
import { Link } from '@reach/router'
import { Links } from './styles'

// Nota:al parecer utilizar esta forma de implementar < o > no es adecuada por ser malo para la accesibilidad de las paginas web.

export const NavLinks = () => {
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
    <Links>
      <Link to={`${next}`}>&#x0003E;</Link>
      <Link to='/menu'>&#x0002F;</Link>
      <Link to={`${back}`}>&#x0003C;</Link>
    </Links>
  )
}
