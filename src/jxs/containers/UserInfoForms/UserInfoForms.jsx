import React from "react";
//styles
import {
  FormsUserSection,
  Title,
  Btn,
  Container,
  Grid,
  Heads,
  Head
} from './userInfoForms.js';

function UserInfoForms(){
  return(
    <FormsUserSection>
      <Title>Formularios Diligenciados</Title>
      <Btn>Buscar Formularios</Btn>
      <Container>
        <Grid>
          <Heads>
            <Head>Nombre del formulario</Head>
            <Head>Fecha</Head>
            <Head>Status</Head>
            <Head>Continuar</Head>
            <Head border={true} >Eliminar</Head>
          </Heads>
        </Grid>
      </Container>
    </FormsUserSection>
  )
}

export { UserInfoForms }
