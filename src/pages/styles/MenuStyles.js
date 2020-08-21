import styled from 'styled-components'
import { bps as BreakPoints } from '../../styles/BreakPoints'

export const Layout = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: minmax(auto,1fr);
    grid-template-rows: minmax(auto,15%) minmax(auto,1fr) minmax(auto,25%);
    grid-template-areas: 
    "head" 
    "main" 
    "foot" ;
    padding: 30px 40px 30px 40px;

    ${BreakPoints.desktop}{
        grid-template-columns: minmax(auto,1fr) minmax(auto,1fr);
        grid-template-rows: minmax(auto,0.1fr) minmax(auto,1fr);
        grid-auto-flow: column;
        grid-template-areas: 
        "head" "head"
        "main" "foot"
        ;
        padding: 50px 40px 50px 40px;
    }
`

export const Head = styled.header`
    grid-area: head;

    width:100%;
    display:grid;
    grid-auto-flow:column;
    align-content:center;
    justify-content:space-between;

    & > a {
        align-self:center;
    }

    ${BreakPoints.desktop}{
        grid-column: 1/3;
        grid-row: 1/2;
        align-content: center;
        padding-left: 5vw;

        & > Svg:nth-child(2) {
            display: none;
        }
    }


`
export const Main = styled.main`
    grid-area: main;

    display: grid;
    grid-auto-flow: row;
    align-content: center;

    
    color:#A7A7A7;
    font-size: 3.75vmax;

    & > h1  {

        & > a {
            color: #A7A7A7;
            text-decoration: none;
        }

        & > a:hover {
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 1px;
        }
    }

    ${BreakPoints.desktop}{
        min-width: 70vw;
        grid-column: 1/2;
        grid-row: 2/3;
        align-content: center;
        justify-content: left;
        padding-left: 5vw;

        font-size: 3vmax;
    }

`
export const Foot = styled.footer`
    grid-area: foot;

    display: grid;
    grid-auto-flow: column;
    justify-content: space-around;

    font-weight: 100;

    & > div:nth-child(1) { 

        display: flex;
        flex-direction: column;

        & > h3 {
            color:#A7A7A7;
            padding-bottom: 10px;

        }

        & > a {
            text-decoration:none;
            cursor: pointer;
            color:#DFDFDF;
            font-size: 3.25vmax;
            padding-bottom: 4px;
        }

    }

    & > div:nth-child(2) {

        display: flex;
        flex-direction: column;

        & > h3 {
            color: #A7A7A7;
            padding-bottom: 5%;
            
        }

        & > a {
            text-decoration:none;
            cursor: pointer;
            color:#DFDFDF;
            font-size: 3.25vmax;
            padding-bottom: 5%;
        }

    }

    & > Svg {
        display: none;
    }

    ${BreakPoints.desktop}{
        grid-column: 2/3;
        grid-row: 2/3;
        grid-auto-flow: row;
        align-content: space-evenly;
        justify-content: left;


         & > div:nth-child(1) { 

            & > h3 {
                font-size: 1.75vmax;
                padding-bottom: 10%;
            }

            & > a {
                font-size: 1.25vmax;
                padding-bottom: 5%;
            }

        }

        & > div:nth-child(2) {

            & > h3 {
                font-size: 1.75vmax;
                padding-bottom: 10%;
            }

            & > a {
                font-size: 1.25vmax;
                padding-bottom: 15%;
            }

        }

        & > Svg {
            display: inline-block;
            height: auto;
            width: 5vw;
        }
    }

`
