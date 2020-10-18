import styled from 'styled-components'
import { Link as linkRouter } from '@reach/router'
import { bps as BreakPoints } from '../../../styles/BreakPoints'

export const Link = styled(linkRouter)`

    align-self:center;
    
    ${BreakPoints.desktop}{
        svg{
            width:3em;
            height:3em;
        }
    }
`
