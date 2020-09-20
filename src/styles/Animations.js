import { keyframes } from 'styled-components'

export const outin = keyframes`
    from {opacity: 0.1;  transform: translateX(1000px);}
    to {opacity:0.7; transform:translateX(0px);}
`
export const scroll = keyframes`
    from {opacity: 0; transform: translateY(-1000px);}
    to {opacity: 1; transform: translateY(0px);}
`
