import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
//components
import { Logo } from '../../components/Logo/Logo'
//styled
import { Container, Title } from "./menuUser.js"

function MenuUser({setIsAuthMenu}){
  const router = useRouter()

  return (
    <Container onClick={()=>setIsAuthMenu(false)}>
      <Logo/>


      <div>
        {router.pathname === '/profile' ?
          <Link href={'/'}><Title>Home</Title></Link>
          :
          <Link href={'/profile'}><Title>Perfil</Title></Link>
        }
        <Title>Vehiculos</Title>
        <Title>Cerrar Sesion</Title>
      </div>

      <div>
        hola
      </div>
    </Container>
  )
}

export {MenuUser}
