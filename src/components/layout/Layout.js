import React from 'react'
import { GridContainer, Head, Main, Foot } from './styles.js'

export const Layout = ({ children }) => {
  return (

    <GridContainer>

      <Head>{Array.isArray(children) ? children[0] : children}</Head>

      <Main>{Array.isArray(children) ? children[1] : 'Array is Void'}</Main>

      <Foot>{Array.isArray(children) ? children[2] : 'Array is Void'}</Foot>

    </GridContainer>

  )
}
