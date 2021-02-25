import * as React from 'react'
import { Link } from './styles'

function SvgX (props) {
  return (
    <Link aria-label='home' to='/'>
      <svg width='2em' height='2em' viewBox='0 0 28.284 28.284' {...props}>
        <defs>
          <style>
            {
              '.prefix__a{fill:none;stroke:#dfdfdf;stroke-linecap:round;stroke-width:1px}'
            }
          </style>
        </defs>
        <path
          className='prefix__a'
          d='M2.829 2.829l22.627 22.627M2.829 25.456L25.456 2.829'
        />
      </svg>
    </Link>
  )
}

export default SvgX
