import styled from 'styled-components'
import { bps as BreakPoints } from '../../styles/BreakPoints.js'

export const Layout = styled.div`
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
    grid-area:head;
    align-self: center;

    display: grid;
    grid-auto-flow: column;
    align-content: start;
    
    & > span{
        display:none;
    }
    
`

export const Main = styled.main`
    grid-area:main;

    display:grid;
    grid-template-columns: minmax(auto,1fr);
    overflow: scroll;

    & figure{
        margin:0px;
        display:flex;
        flex-direction:column;
    }

    & > span{
        display:none;
    }

    & > aside {
        color: white;
        display:none;
        justify-content:center;
    }

    ${BreakPoints.desktop}{
        grid-template-columns: minmax(15%,auto) minmax(50%,1fr) minmax(30%,1fr) minmax(5%,auto);
        grid-template-rows: minmax(70%,1fr) minmax(30%,1fr);
        overflow:hidden;

        & figure{
            grid-area: 1/2/2/3;
            margin:0px;
            height:auto;
            width:90%;
            display:grid;
            grid-template-columns: repeat(3,minmax(auto,1fr));
            grid-template-rows: repeat(2,minmax(auto,1fr));
            justify-self:center;
            align-self:center;
            grid-gap:0.5rem;

            & > div{
                display:inline-block;
                background-color: rgb(41,41,41);
            }

            & > div > img{
                opacity: 0.7;
                display: block;
                transition: transform 0.35s ease-out;
            }

            & > div > img:active{
                opacity: 1;
                z-index: 1;
                position: absolute;
                height: auto;
                width: 30vmax;
                left:35%;
                top: 27%;
                transform: scale(1.6);
            } 

        }

        & span{
            grid-area: 2/2/3/4;
            display:grid;
            grid-auto-flow:column;
            align-items:center;
            color:#686868;

            & h1{font-size: 10vmax;}
            & h3{font-size: 3vmax; font-weight:300;}
        }

        & aside{
            grid-area: 1/3/2/4;
            display:grid;
            justify-content:center;
            align-content:center;
        }
    }
`

export const Foot = styled.footer`
    grid-area:foot;
`
