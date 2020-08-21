import styled, { keyframes } from 'styled-components'
import { bps as BreakPoints } from '../../styles/BreakPoints.js'

const outin = keyframes`
    from {opacity: 0.1;  translate: 1000px;}
    50% { opacity: 0.3; }
    75% {opacity: 0.7;}
    to {opacity:1; translate: 0px;}
`
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
    grid-area: head;
    align-self: center;
    height:auto;
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    align-content: start;


    & > a > Svg{
        cursor: pointer;
    }

    & > h3 {
        color:#686868;
        font-size: 2rem;
        font-weight:300;
        letter-spacing:4px;
        justify-self: center;
        align-self: end;
        padding: 0;
        top: 20%;
        position: absolute;
    }
    
    & > span{
        display:none;
    }

    ${BreakPoints.desktop}{

        & > a > Svg {
            align-self: center;
            justify-self: left;
        }

        & > h3 { 
            align-self: start;
            letter-spacing: 0.5vmax;
            font-weight: 300;
            font-size: 2vmax;
            padding-right: 37vw;
            position: relative;
            top: 0;
        }

        & > span {
            color:#A7A7A7;
            display: inline-block;
            font-size: 1.75vmax;
            padding-right: 2vw;
            align-self: end;
            justify-self: right;
        }
    }
`
export const Main = styled.main`
    grid-area: main;
    height:100%;
    width: 100%;
    display: grid;
    grid-template-columns: minmax(auto,1fr) minmax(auto,0.3fr);
    grid-template-rows: minmax(auto,1fr);

    & > aside {

        display: grid;
        align-self: center;
        justify-self: start;

        color: #A7A7A7;
        font-size: 1.85rem;
        font-weight: 200;
        word-spacing: 1px;
        word-wrap: break-word;

        & > span {
            color:#151515;
            font-weight: 400;
        }

        & > span > strong {
            background-color: #DFDFDF;
        }

        & strong:nth-child(1){
            padding-left: .4em;
            padding-right: .4em;
        }

    }

    & > section {
        display: grid;
        grid-template-columns: minmax(auto,80%) minmax(auto,20%);
        grid-template-rows: minmax(auto,1fr);
        position: relative;

        & > h1 {
            color:#686868;
            font-size: 4.5rem;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: flex-end;
            position: absolute;
            top: 15%;
        }

        & > div {
            display:none;
        }

        & > img {
            display:none;
        }
    }

    ${BreakPoints.desktop}{
        grid-template-columns: minmax(auto,15%) minmax(auto,1fr) minmax(auto,15%);
        grid-template-rows: minmax(auto,1fr);

        & > aside{
            grid-column: 1/2;
            grid-row: 1/2;

            color: $font-color-aside;
            font-size: 1.75vmax;
            font-weight: 100;
        }

        & > section{
            grid-column: 2/3;
            grid-row: 1/2;
            
            padding-left: 5%;
            grid-template-columns: minmax(auto,15%) minmax(auto,1fr);
            grid-template-rows: minmax(auto,1fr) minmax(auto,15%);
            grid-auto-flow: column;

            & > h1{
                font-size: 10vmax;
                top: 7vh;
                right: -5vw;
                z-index: 2;
            }

            & > div{
                grid-column: 2/3;
                grid-row: 1/3;

                color: #A7A7A7;
                display: inline-block;
                padding: 40px 60px 0px 0px;
                direction: rtl;
                justify-self: end;
                font-size: 3.25vmax;
                z-index: 2;

                & > h1:hover {
                    -webkit-text-fill-color: transparent;
                    -webkit-text-stroke-width: 1px;
                }
            }

            & > img{
                animation: ${outin};
                animation-duration: 1s;
                animation-timing-function: ease-in-out ;
                animation-fill-mode: forwards;

                grid-column: 2/3;
                grid-row: 1/2;

                display: inline-block;
                opacity: 0.8;
            }


        }
            
    }
`
export const Foot = styled.footer`
    grid-area: foot;
    align-self: center;

        & > div{
            display:grid;

            & > a{
                cursor: pointer;
                font-size: 3.25vmax;
                font-weight: 100;
                color: white;
                text-decoration: none;
                position:relative;
            }

            & a:nth-child(1) {
                writing-mode: sideways-lr; //chrome cant use it
                text-orientation: sideways;
            }
    
            & a:nth-child(2) {
                padding: 4px 0px 4px 0px;
                writing-mode: sideways-lr; //chrome cant use it
                text-orientation: upright;
            }
    
            & a:nth-child(3) {
                writing-mode: sideways-lr; //chrome cant use it
                text-orientation: sideways;
            }
        }

        ${BreakPoints.desktop}{
            & > div > a{
                font-size:1.65vmax;
                font-weight: 300;
            }
        }
    }

`
