import * as React from 'react'
import { Link } from './styles.js'

export function SvgComponent (props) {
  return (
    <Link to='/menu'>
      <svg width='3em' height='3em' viewBox='0 0 52.284 52.505' {...props}>
        <defs>
          <style>
            {
              '.prefix__a{fill:none;stroke:#dfdfdf;stroke-linecap:round;stroke-width:4px}'
            }
          </style>
        </defs>
        <path
          className='prefix__a'
          d='M2.829 5.829l43.84 43.84M26.829 2.829l22.627 22.627M2.829 30.829l17.849 18.849'
        />
      </svg>
    </Link>
  )
}

export default SvgComponent
