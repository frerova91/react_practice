import React from 'react'
import { Link } from '@reach/router'
import { Links } from './styles'

// Nota:al parecer utilizar esta forma de implementar < o > no es adecuada por ser malo para la accesibilidad de las paginas web.

export const NavLinks = () => {
  // const array = ['/', '/about', '/skilled', '/expertice']
  // const currentLocation = window.location.pathname

  return (
    <Links>
      <Link to='/about'>&#x0003E;</Link>
      <Link to='/menu'>&#x0002F;</Link>
      <Link to='/skilled'>&#x0003C;</Link>
    </Links>
  )
}
