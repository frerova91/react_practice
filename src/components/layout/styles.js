import styled from 'styled-components'
import { bps as BreakPoints } from '../../styles/BreakPoints.js'

export const GridContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-areas: "head" "main" "foot";
    grid-template-columns: minmax(auto,1fr);
    grid-template-rows: minmax(auto, 15%) minmax(auto,70%) minmax(auto,15%);
    padding: 30px 40px 30px 40px;

    ${BreakPoints.desktop}{
        grid-template-columns: minmax(auto,15%) minmax(auto,70%) minmax(auto,15%);
        grid-template-rows: minmax(auto,10%) minmax(auto,80%) minmax(auto,10%);
        grid-template-areas: 
        "head head head"
        "main main main"
        "foot foot foot";
        padding: 50px 40px 50px 40px;
    }
`
export const Head = styled.header`
    grid-area: head;
    align-self: center;
    ${'/* justify-self:center; */'}

`
export const Main = styled.main`
    grid-area: main;

`
export const Foot = styled.footer`
    grid-area: foot;
    align-self: center;

`
