import React from 'react'
import { Link } from '@reach/router'
import { Links } from './styles'

// Nota:al parecer utilizar esta forma de implementar < o > no es adecuada por ser malo para la accesibilidad de las paginas web.

export const NavLinks = () => {
  const routes = ['/', '/about', '/skilled', '/expertice']
  const currentLocation = window.location.pathname

  const foward = routes.map((el, i) => {
    const result = currentLocation === el ? routes[i + 1] : null
    return result
  })

  const backward = routes.map((el, i) => {
    const result = currentLocation === el ? routes[i - 1] : null
    return result
  })

  const next = foward.filter((el, i) => {
    let res
    res = el !== null ? res = el : res = ''
    return res
  })

  const back = backward.filter((el, i) => {
    let res
    res = el !== null ? res = el : res = ''
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
