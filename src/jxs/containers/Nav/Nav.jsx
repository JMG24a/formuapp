import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
//components
import { Logo } from "../../components/Logo/Logo.jsx";
//containers
import { MenuUser } from "../../components/MenuUser/MenuUser.jsx"
//styled
import { Container, ContainerAuth, Btn, Avatar, NameAvatar } from './nav.js'

function Nav({auth}){
  const router = useRouter()
  const [isAuthMenu, setIsAuthMenu] = useState(false)

  return(
    <Container>
      <Logo/>

      <ContainerAuth>
        {!auth && router.pathname === '/' &&
          <>
            <Link href={'/login'}><Btn href={'/login'} primary={'primary'}>Iniciar Sesión</Btn></Link>
            <Link href={'/register'}><Btn href={'/register'}>Crear Cuenta</Btn></Link>
          </>
        }

        {!auth && router.pathname === '/login' &&
          <Link href={'/register'}><Btn href={'/register'}>Crear Cuenta</Btn></Link>
        }
        {!auth && router.pathname === '/register' &&
          <Link href={'/login'}><Btn href={'/login'} primary={'primary'}>Iniciar Sesión</Btn></Link>
        }

        {auth &&
          <Avatar style={{display: 'flex', alignContent: 'center'}} onClick={()=>setIsAuthMenu(!isAuthMenu)}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/15/Monica_Barbaro_Photo.jpg"
              alt="avatar"
              width={'40px'}
              height={'40px'}
              style={{
                borderRadius: '100%',
                margin: '0px 5px'
              }}
            />
            <NameAvatar>{auth}</NameAvatar>
          </Avatar>
        }
      </ContainerAuth>

      {!!isAuthMenu &&
          <MenuUser/>
      }
    </Container>
  )
}

export { Nav }
