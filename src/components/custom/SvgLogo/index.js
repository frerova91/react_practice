import * as React from 'react'

function SvgLogo (props) {
  return (
    <svg width='5em' height='5em' viewBox='0 0 66.144 48.104' {...props}>
      <defs>
        <style>{'.prefix__b{fill:#7e7e7e}'}</style>
      </defs>
      <path d='M0 0h66.144v48.1H0z' fill='#272727' />
      <path
        className='prefix__b'
        d='M40.396 6.815c-.538 1.524-1.031 2.532-1.568 4.033h1.12c3.809 0 5.96 1.21 5.378 3.361-.9 3.361-8.514 2.689-8.514 2.689l-1.569 4.033h.672l7.394 8.066h6.05l-8.066-8.066s7.8-.471 7.842-6.05c0 0 2.017.067 2.017 0-.022-1.12-.224-3.787-1.837-5.467a7.847 7.847 0 00-6-2.6zM17.832 6.815v22.182h5.153v-8.066h3.921l1.568-4.033h-5.49v-6.05h7.461l1.637-4.033zM35.04 6.755h2.594l-8.263 22.208-2.82-.001z'
      />
      <g>
        <text
          transform='translate(11 40)'
          fontSize={10}
          fontFamily='NotoSerifSC-Regular,Noto Serif SC'
          fill='#7e7e7e'
        >
          <tspan x={0} y={0}>
            {'D'}
          </tspan>
          <tspan y={0} letterSpacing='-.03em'>
            {'E'}
          </tspan>
          <tspan y={0}>SINGS</tspan>
        </text>
      </g>
    </svg>
  )
}

export default SvgLogo
