import styled from 'styled-components'
import { bps as BreakPoints } from '../../styles/BreakPoints.js'

export const Layout = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: minmax(auto,1fr);
    grid-template-rows: minmax(auto,5%) minmax(auto,1fr) minmax(auto,15%);
    grid-template-areas: 
        "foot"
        "main"
        "head"
    ;
    padding: 30px 40px 30px 40px;
    

    ${BreakPoints.desktop}{
        grid-template-columns: minmax(15%,auto) minmax(70%,auto) minmax(15%,auto);
        grid-template-rows: minmax(10%,auto) minmax(80%,auto) minmax(10%,auto);
        grid-template-areas: 

        "head head head"
        "main main main"
        "foot foot foot";

        padding: 50px 40px 50px 40px;
        position: relative;
    
        &::after{
            color: rgba(45,45,45,0.3);
            content: "ABOUT";
            letter-spacing: 3vmax;
            font-size: 30vmax;
            font-weight: 800;
            position: absolute;
            top: 12vh;
            left: -5vw;
        }
    }

    
`

export const Head = styled.header`
    grid-area:head;

    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    z-index: 999;

    & > span{
       display: none;
    }

    ${BreakPoints.desktop}{
        & span{
            display: inline-block;
            align-self: flex-end;
            font-size: 1.75vmax;
            color: #A7A7A7;
        }
    }
`

export const Main = styled.main`
    grid-area:main;

    display: grid;
    grid-template-columns: minmax(auto,1fr);
    grid-template-rows: minmax(auto,1fr) minmax(auto,0.3fr);
    grid-auto-flow: row;
    align-content: center;
    justify-content: left;
    letter-spacing: 1px;
    /*word-break: break-all;*/
    font-size: 3vmax;
    position: relative;

    & section:nth-child(1){
        
        display: flex;
        flex-direction: column;
        padding-right: 1%;
        justify-content: center;
        color: #A7A7A7;
        padding-right: 8%; 

        & > h3 {
            font-weight: 300;
            padding-bottom: 5%;
        }

        & > p {

            font-weight: 300;
        }
    }

    & section:nth-child(2) {

        display: grid;
        grid-auto-flow: column;

        & > h1{ 
            display: flex;
            justify-content: flex-end;
            color: #686868;
            font-size: 10vmax;
            height: 100%;
            width: 100%;
            top: 85%;
            position: absolute;
            padding-right: 5%; 
        }

        & > div:nth-child(2) { display: none; }
        & > div:nth-child(3) { display: none; }
        & svg{ display: none; }
    }

    ${BreakPoints.desktop}{
        grid-template-columns: minmax(auto, 0.1fr) minmax(auto, 1fr) minmax(auto, 0.1fr);
        grid-template-rows: minmax(auto, 70%) minmax(auto, 1fr) ;

        & section:nth-child(1){
            z-index: 1;
            grid-column: 2/3;
            grid-row: 1/2;
            
            color: $font-color-aside;
            font-size: 2.25vmax;
            padding-right: 0;
            height: auto;
            width: 100%;
            display: grid;

            & > h3 {
                align-self: end;
                font-weight: 300;
                padding-bottom: 5%;
            }
    
            & > p {
                width: 85%;
                justify-self: center;
                font-weight: 100;
            }
        }

        & section:nth-child(2){
            grid-column: 2/3;
            grid-row: 2/3;
            font-size: 1.45vmax;

            grid-template-columns: minmax(auto,1fr) minmax(auto,1fr) minmax(auto,1fr) minmax(auto,1fr) ;
            grid-template-rows: minmax(auto,1fr) ;
            align-items: center;
            justify-items: center;
            z-index: 1;

            & h1 {
                grid-column: 1/2; 
                position: none; 
                justify-content: center; 
                align-items: center; 
                position: static; 
                top: 0; 
                left: 0; 
            }

            & div:nth-child(2){
                justify-self:end;
                grid-column: 2/3;
                height: auto;
                width: 12vw;                
                display: flex;
                flex-direction: column;
                font-weight: 300;
                color:#A7A7A7;

                &  h3 { 
                    font-size: 1.45vmax;
                    padding-bottom: 5%;
                }

                & > a {
                    color:#A7A7A7;
                    text-decoration:none;
                    cursor:pointer;
                    font-size: 1.25vmax;
                    padding-bottom: 3%;
                }
            }

            & div:nth-child(3){
                grid-column: 3/4;
                height: auto;
                width: 15vw;
                display: flex;
                flex-direction: column;
                font-weight: 300;
                color:#A7A7A7;
                text-decoration:none;

                &  h3 { 
                    font-size: 1.45vmax;
                    padding-bottom: 10%;
                }

                & > a {
                    color:#A7A7A7;
                    text-decoration:none;
                    cursor:pointer;
                    font-size: 1.25vmax;
                    padding-bottom: 5%;
                }
            }

            & svg {         
                grid-column: 4/5;
                display: inline-block;
                height: auto;
                width: 5vw;
            }
        }
    }
`

export const Foot = styled.footer`
    grid-area:foot;
    justify-self:left;
    align-self: center;
`
