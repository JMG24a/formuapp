import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
//styles
import { Form, H2, Label, ContainerInputs, Input, Anchor, Submit } from './formLogin.js';
import { paletteColor } from "../../../../styles/globalStyles.js";

function FormLogin({ form, handleSubmit, formHandler, handleFocus }){
  const [isPassword, setPassword] = useState('password')

  const handleClick = () => {
    setPassword(isPassword === 'password' ? 'text' : 'password')
  }

  const IconPassword = isPassword === 'password' ? FaEye : FaEyeSlash

  return(
    <Form onSubmit={(e)=>handleSubmit(e)} method={'POST'}>
      <H2>Iniciar Sesión</H2>

      <Label htmlFor="email">Email</Label>
      <ContainerInputs>
        <FaUser size={'15px'} color={'gray'}/>
        <Input
          type="email"
          id="email"
          name="email"
          required={true}
          onChange={(e)=>formHandler(e)}/>
      </ContainerInputs>

      <Label htmlFor="password">Contraseña</Label>
      <ContainerInputs>
        <IconPassword onClick={handleClick} size={'15px'} color={'gray'}/>
        <Input
          type={`${isPassword}`}
          id="password"
          name="password"
          required={true}
          onChange={(e)=>formHandler(e)}/>
      </ContainerInputs>

      <Link href={'/'}><Anchor marginTop={'-20px'}>Olvidaste tu contraseña?</Anchor></Link>

      <Submit type="submit">
        Ingresar
      </Submit>

      <Anchor>
        No tienes una cuenta? {' '}
        <Link href={'/register'}>
          <a style={{color: `${paletteColor.secondaryColor}`, textDecoration: 'none'}}>Registrate</a>
        </Link>
      </Anchor>

    </Form>
  )
}

export { FormLogin }
