import React from "react";
import { Container } from './style.js'

function MainPage({children}){
  return(
    <Container>
      {children}
    </Container>
  )
}

export { MainPage }
