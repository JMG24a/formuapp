import React from "react";
import Link from 'next/link';
//styled
import {Container, ContainerLogo, Logo as L, ImageLogo, SubText } from "./logo.js"
const logo = require('../../../../public/image/logo.svg')

function Logo(){
  return (
    <Container>
      <ContainerLogo>
        <ImageLogo src={logo} alt="logo" width={'50px'} height={'50px'}/>
      </ContainerLogo>
      <Link href={'/'}><L href={'/'}>FormApp</L></Link>
      <SubText>Tus Formularios Online</SubText>
    </Container>
  )
}

export { Logo }
