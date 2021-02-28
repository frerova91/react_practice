import { createGlobalStyle } from 'styled-components'

import Mplus from '../assets/fonts/Mplus/Mplus1pGX.ttf'
// import robotoSlab from '../assets/fonts/robotoSlab/RobotoSlab-VariableFont_wght.ttf'

export const GlobalStyles = createGlobalStyle`

    @font-face{
        font-family: 'myFont';
        src: url('${Mplus}' ) format('truetype');
        font-style: normal;
        font-display: block;
        font-weight: 100 200 300 400 500 600 700 800 900 1000;
        
    }

    html,body {
        height: 100vh;
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        box-sizing: border-box;
        scroll-behavior: auto;
        font-family: 'myFont', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 100%;
        /*font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;*/
        
    }

    /*aqui va #app*/
    * > img { heigth:auto; width: 100%; display:block; margin: 0 auto; aspect-ratio: attr(width) / attr(height);}

    *, *:before, *:after {
        box-sizing: inherit;
    }

    ul, li, h1, h2, h3, p, button, figure { margin: 0; padding: 0; }
    ul { list-style: none; }
    button { background: transparent; border: 0; outline: 0 }
    

`
