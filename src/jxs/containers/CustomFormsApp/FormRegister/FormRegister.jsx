import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
//components
import { Logo } from '../../../components/Logo/Logo';
//containers
import { MainPage } from "../../MainPage/MainPage";
import { ModalApp } from '../../Modal/ModalApp';
//style
import { Form, H2, Label, ContainerInputs, Input, Anchor, Submit,
  View, ContainerView, Labels} from './formRegister.js';
const logoGoggle = require('../../../../../public/image/google.png')
import { paletteColor } from "../../../../styles/globalStyles.js";


function FormRegister({ handleSubmit, formHandler, handleContinue, isModal, setModal}){
  const [isPassword, setPassword] = useState('password')

  const handleClick = () => {
    setPassword(isPassword === 'password' ? 'text' : 'password')
  }

  const IconPassword = isPassword === 'password' ? FaEye : FaEyeSlash

  return(
    <>
      <Form method="POST" onSubmit={(e)=>handleContinue(e)}>
        <H2>Registrate</H2>

        <Label htmlFor="email">Email</Label>
        <ContainerInputs>
          <FaUser size={'15px'} color={'gray'}/>
          <Input
            type="email"
            id="email"
            name="email"
            required={true}
            onChange={(e)=>formHandler(e)}
          />
        </ContainerInputs>
        <div style={{display: 'flex', width: '80%', marginBottom: '20px'}}>
          <Anchor marginTop={'-20px'}>
            Ya tienes una cuenta? {' '}
            <Link href={'/login'}>
              <a style={{color: `${paletteColor.secondaryColor}`, textDecoration: 'none'}}>Iniciar Sesion</a>
            </Link>
          </Anchor>
        </div>

        <Label htmlFor="password">Contraseña</Label>
        <ContainerInputs>
          <IconPassword onClick={handleClick} size={'15px'} color={'gray'}/>
          <Input
            type={`${isPassword}`}
            id="password"
            name="password"
            required={true}
            onChange={(e)=>formHandler(e)}
          />
        </ContainerInputs>

        <Submit type="submit">
          Continuar
        </Submit>

        <Submit type="button" color={'#3a35ce'}>
          <Image src={logoGoggle} width={'20px'} height={'20px'} alt='Google' />
          {" "} {"Continuar con Google"}
        </Submit>

        <div style={{
          display: 'flex',
          width: '80%',
          justifyContent: 'center',
          marginTop: '10px',
        }}>
          <Anchor textAlign={'center'}>
          Al registrarte estás aceptando las políticas de privacidad y términos de servicio de FormuApp
          </Anchor>
        </div>
      </Form>
      {isModal &&
        <ModalApp>
          <View>
            <Logo option={false}/>
            <p style={{
              position: 'absolute',
              top: '60px',
              right: '50px',
              fontSize: '2.4rem',
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={()=>setModal(false)}
            >{'<< Atras'}</p>
            <MainPage>
              <ContainerView>
                <form style={{width: '95%'}} method='POST' onSubmit={(e)=>handleSubmit(e)}>
                  <H2>Ya casi lo tienes! Completa tus datos</H2>

                  <Labels htmlFor="">Nombre(s)</Labels>
                  <input
                    type={'text'}
                    name="names"
                    style={{width: '100%', height: '30px'}}
                    onChange={(e)=>formHandler(e)}
                  />

                  <div style={{display: 'flex', width: '100%', marginTop: '20px'}}>
                    <div style={{width: '100%', margin: '0 10px 0 0'}}>
                      <Labels htmlFor="">Primer Apellido</Labels>
                      <input
                        type={'text'}
                        name="lastName"
                        style={{width: '100%', height: '30px'}}
                        onChange={(e)=>formHandler(e)}
                      />
                    </div>

                    <div style={{width: '100%', margin: '0 0 0 20px'}}>
                      <Labels htmlFor="">Segundo Apellido</Labels>
                      <input
                        type={'text'}
                        name="lastName2"
                        style={{width: '100%', height: '30px'}}
                        onChange={(e)=>formHandler(e)}
                      />
                    </div>
                  </div>

                  <div style={{display: 'flex', width: '100%', marginTop: '20px'}}>
                    <div style={{width: '100%', margin: '0 10px 0 0'}}>
                      <Labels htmlFor="">Telefono Fijo</Labels>
                      <input
                        type={'number'}
                        name="landline"
                        style={{width: '100%', height: '30px'}}
                        onChange={(e)=>formHandler(e)}
                      />
                    </div>

                    <div style={{width: '100%', margin: '0 0 0 20px'}}>
                      <Labels htmlFor="">Celular</Labels>
                      <input
                        type={'number'}
                        name="phone"
                        style={{width: '100%', height: '30px'}}
                        onChange={(e)=>formHandler(e)}
                      />
                    </div>
                  </div>

                  <button
                    type='submit'
                    style={{
                      marginTop: '20px',
                      width: '100%',
                      padding: '10px',
                      background: `${paletteColor.successColor }`,
                      fontWeight: '600',
                      color: 'white',
                    }}
                  >
                    Guardar
                  </button>
                </form>
              </ContainerView>
            </MainPage>
          </View>
        </ModalApp>
      }
    </>
  )
}

export { FormRegister }
