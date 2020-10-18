import styled from 'styled-components'
import { scroll } from '../../styles/Animations'
import { bps as BreakPoints } from '../../styles/BreakPoints'

export const Layout = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: minmax(auto,1fr);
    grid-template-rows: minmax(auto, 10%) minmax(auto,75%) minmax(auto,15%);
    grid-template-areas: 
        "foot"
        "main"
        "head"
    ;
    padding: 30px 40px 30px 40px;
    position: relative;

    ${BreakPoints.desktop}{
        grid-template-columns: minmax(15%,auto) minmax(70%,auto) minmax(15%,auto);
        grid-template-rows: minmax(10%,auto) minmax(80%,auto) minmax(10%,auto);
        grid-template-areas: 

        "head head head"
        "main main main"
        "foot foot foot";

        padding: 50px 40px 50px 40px;
    }
`

export const Head = styled.header`
    grid-area: head;

    display: flex;
    justify-content: space-between;
    align-items: center;
    

    & span{ display: none; }

    ${BreakPoints.desktop}{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & span{ 
            display: inline-block;
            color: #A7A7A7;
            align-self: flex-end;
            font-size: 1.75vmax; 
        }
    }
`

export const Main = styled.main`
    grid-area: main;
    
    display: grid;
    grid-template-rows: minmax(auto,100vh) minmax(auto,1fr);
    grid-template-areas: "c1" "c2";
    position: relative;
    overflow: auto;
    scroll-behavior: contain;
    animation: ${scroll} 1.2s  ease-in-out;

    & div:nth-child(1){
        grid-area: c1;

        height: 100%;
        width: 100%;
        display: flex;
        flex-direction:column;

        word-spacing: 1px;
        color: #A7A7A7;
        font-size: 2.85vmax;
        font-weight: 300;
        padding-bottom: 30%;
        padding-right: 7%;
        

        & > h3 {
            padding-bottom: 5%;
        }

        & > p { 
            padding-bottom: 2%;
        }
    }

    & div:nth-child(2){
        grid-area: c2;

        height: 100%;
        width: 100%;
        display:grid;
        align-content:center;
        padding-bottom: 15%;   
        padding-right: 15%;

            & > p {
                display: flex; 
                flex-direction: column;
                align-items: flex-end;
                justify-content: left;
                color: #A7A7A7;
                font-size: 5vmax;
                font-weight: 800;
                word-wrap: break-word;
                -webkit-text-fill-color: transparent;
                -webkit-text-stroke-width: 1px;
            } 
    }

    ${BreakPoints.desktop}{
        grid-template-columns: minmax(auto,10%) minmax(auto,1fr) minmax(auto,0.8fr) minmax(auto,10%);
        grid-template-rows: minmax(auto,1fr) minmax(auto,15%);
        grid-template-areas: none;

        overflow: hidden;
        scroll-behavior: unset;

        div:nth-child(1) {
            
            justify-content: center;
            word-spacing: 2px;
            word-wrap: break-word;
            font-size: 1.75vmax;
            grid-column: 2/3;
            grid-row: 1/2;
            padding: 0;
            z-index: 2;

        }

        div:nth-child(2) {
            
            grid-column: 3/4;
            grid-row: 1/3;
            padding: 0;
            
               & > p{
                    font-size: 3vmax;
                    justify-content: center; 
               }
    
        }
    }
`

export const Foot = styled.footer`
    grid-area: foot;

    display: grid;
    align-self:center;
    justify-content:left;


    & h1{
        color:#686868;
        display: flex;
        justify-content: flex-end;
        font-size: 10vmax;
        position: absolute;
        top:80%;
        left:70%;
    }

    ${BreakPoints.desktop}{
        position: relative;

        & h1{
            top:-200%;
            left:20%;
            z-index: 1;
        }
    }
`
