import styled from 'styled-components'
import { bps as BreakPoints } from '../../../styles/BreakPoints'

export const Links = styled.div`

    display:grid;

    & > a {
        display:none;
        color: white;
        cursor: pointer;
        position:relative;
        font-weight: 300;
        font-size: 1.5rem;
        text-decoration: none;
    }

    ${'' /* & a:nth-child(1) {
        writing-mode: sideways-lr;
        text-orientation: sideways;
    }

    & a:nth-child(2) {
        padding: 0.7% 0px 0.7% 0px;
        writing-mode: sideways-lr;
        text-orientation: upright;
    }

    & a:nth-child(3) {
        writing-mode: sideways-lr;
        text-orientation: sideways;
    } */}

    ${BreakPoints.desktop}{
            &  a{
                display:block;
            }
        }
`
