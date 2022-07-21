import React from "react";
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai';
//styles
import { Container, Center, Footer } from './messages.js'

function Message({children}){
  return(
    <Container>
      <Center>
        {children}
      </Center>
      <Footer>
        <p style={{fontSize: '2.0rem'}}>Siguenos</p>
        <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
          <BsFacebook size={'30px'}/>
          <AiFillInstagram size={'35px'}/>
        </div>
        <p style={{fontSize: '1.8rem'}}>todos los derechos reservados, 2022</p>
      </Footer>
    </Container>
  )
}

export { Message }
