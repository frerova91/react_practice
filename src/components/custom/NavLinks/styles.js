import styled from 'styled-components'
import { bps as BreakPoints } from '../../../styles/BreakPoints'

export const Links = styled.nav`

    height: auto;
    width:100%;
    display: block;


    & > a {
        /*nota cursor:pointer causa layout shifts*/
        display:none;
        color: white;
        font-weight: 800;
        font-size: 1.25rem;
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
            & > a{
                display:flex;
                justify-content:center;
            }
        }
`
