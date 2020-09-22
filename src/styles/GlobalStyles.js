import { createGlobalStyle } from 'styled-components'

import RobotWoff1 from './../assets/fonts/Roboto-Medium.ttf'
import RobotWoff2 from './../assets/fonts/Roboto-Light.ttf'
import RobotWoff3 from './../assets/fonts/Roboto-Thin.ttf'

export const GlobalStyles = createGlobalStyle`

    @font-face{
        font-family: 'Roboto',sans-serif;
        font-size: 16px;
        src: url(${RobotWoff1}) format('ttf'), url(${RobotWoff2}) format('ttf'),url(${RobotWoff3}) format('ttf');;
        font-style: normal;
        font-display: auto;
    }

    html,body {
        height: 100vh;
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        box-sizing: border-box;
        scroll-behavior: auto;
        font-family: "Roboto",sans-serif;
        font-size: 16px;
        /*font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
        
    }

    * > img { width: 100%;}

    *, *:before, *:after {
        box-sizing: inherit;
    }

    ul, li, h1, h2, h3, p, button, figure { margin: 0; padding: 0; }
    ul { list-style: none; }
    button { background: transparent; border: 0; outline: 0 }
    

`
