import { createGlobalStyle } from 'styled-components'

/* import woff1 from './../assets/fonts/variable/Mplus1p-Thin.woff2'
import woff2 from './../assets/fonts/variable/Mplus1p-Light.woff2'
import woff3 from './../assets/fonts/variable/Mplus1p-Medium.woff2' */

import font1 from './../assets/fonts/Roboto-Thin.ttf'
import font2 from './../assets/fonts/Roboto-Light.ttf'
import font3 from './../assets/fonts/Roboto-Medium.ttf'

export const GlobalStyles = createGlobalStyle`

    @font-face{
        font-family: 'myFont';
        src: url('${font1}') format('ttf'), url('${font2}') format('ttf'), url('${font3}') format('ttf');
        font-style: normal;
        font-display: block;
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

    * > img { display:block; margin: 0 auto; heigth:auto; width: 100%; aspect-ratio: attr(width) / attr(height);}

    *, *:before, *:after {
        box-sizing: inherit;
    }

    ul, li, h1, h2, h3, p, button, figure { margin: 0; padding: 0; }
    ul { list-style: none; }
    button { background: transparent; border: 0; outline: 0 }
    

`
