import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    html,body {
        height: 100vh;
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        box-sizing: border-box;
        overscroll-behavior: auto;
        font-family: "Roboto",sans-serif;
        font-size: 16px;
        ${"/* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */"}
        
    }

    * > img { width: 100%;}

    *, *:before, *:after {
        box-sizing: inherit;
    }

    ul, li, h1, h2, h3, p, button, figure { margin: 0; padding: 0; }
    ul { list-style: none; }
    button { background: transparent; border: 0; outline: 0 }
    

`
