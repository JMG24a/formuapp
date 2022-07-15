import React from "react";
//container
import { MainPage } from "../../containers/MainPage/MainPage";
import { Form } from "../../containers/Form/Form";

function AuthUserUi({router, form, handleSubmit, formHandler}){
  let login = {
    id: 'LOGIN',
    title: 'Iniciar Sesión',
    button: 'Ingresar',
    footer: '¿No tienes una cuenta registrate?',
    nodes: [
      {
        label:{
            id: 'login',
            htmlFor: 'email',
            title: 'Email: '
        },
        input:{
          id: 'login',
          type: 'email',
          name: 'email',
          required: true
        },
      },
      {
        label:{
          id: 'password',
          htmlFor: 'password',
          title: 'Contraseña: '
        },
        input:{
          type: 'password',
          id: 'password',
          name: 'password',
          required: true,
          footer: '¿Olvidaste tu contraseña?'
        }
      }
    ],
  }


  let register = {
    id: 'REGISTER',
    title: 'Registro de Usuario',
    button: 'Continuar',
    footer: '¿Ya tienes una cuenta? Inicia Sesíon',
    nodes: [
      {
        label:{
          id: 'name',
          htmlFor: 'name',
          title: 'Nombre Completo: '
        },
        input:{
          id: 'name',
          name: 'name',
          type: 'text',
        },
      },
      {
        label: {
          id: 'lastName',
          htmlFor: 'lastName',
          title: 'Apellidos: '
        },
        input:{
          id: 'lastName',
          name: 'lastName',
          type: 'text',
          required: true
        }
      },
      {
        label:{
          id: 'email',
          htmlFor: 'email',
          title: 'Email: '
        },
        input:{
          id: 'email',
          name: 'email',
          type: 'email',
          required: true
        }
      },
      {
        label:{
          id: 'password',
          htmlFor: 'password',
          title: 'Contraseña: '
        },
        input:{
          id: 'password',
          name: 'password',
          type: 'password',
          required: true
        }
      }
    ],
  }

  return(
    <MainPage>
        {!!router.pathname.startsWith('/login') &&
          <Form
            form={form}
            formulationOptions={login}
            handleClick={handleSubmit}
            formHandler={formHandler}
          />
        }

        {!router.pathname.startsWith('/login') &&
          <Form
            form={form}
            formulationOptions={register}
            handleClick={handleSubmit}
            formHandler={formHandler}
          />
        }
    </MainPage>
  )
}

export { AuthUserUi }
