import * as React from 'react'

function SvgComponent (props) {
  return (
    <svg width='2em' height='2em' viewBox='0 0 44 37.178' {...props}>
      <defs>
        <style>{'.prefix__a{fill:#dfdfdf}'}</style>
      </defs>
      <path
        className='prefix__a'
        d='M28.396.993c-.538 1.524-1.031 2.532-1.568 4.033h1.12c3.809 0 5.96 1.21 5.378 3.361-.9 3.361-8.514 2.689-8.514 2.689l-1.569 4.033h.672l7.394 8.066h6.05l-8.066-8.066s7.8-.471 7.842-6.05c0 0 2.017.067 2.017 0-.022-1.12-.224-3.787-1.837-5.467a7.847 7.847 0 00-6-2.6zM5.832.993v22.182h5.153v-8.066h3.921l1.568-4.033h-5.49v-6.05h7.461L20.082.993zM23.04.933h2.594l-8.263 22.208-2.82-.001z'
      />
      <g>
        <text
          transform='translate(0 34.178)'
          fontSize={10}
          fontFamily='NotoSerifSC-Regular,Noto Serif SC'
          fill='#dfdfdf'
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

export default SvgComponent
