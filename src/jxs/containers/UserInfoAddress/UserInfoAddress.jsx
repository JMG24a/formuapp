import React from "react";
//styles
import {
  AddressSection,
  TitleD,
  BtnAddress,
  ContainerAddress,
  GridAddress,
  Heads,
  Head
} from './addressInfoAddress.js';

function UserInfoAddress(){
  return(
    <AddressSection>
      <TitleD>Direcciones</TitleD>
      <BtnAddress>Agregar Direccion</BtnAddress>
      <ContainerAddress>
        <GridAddress>
          <Heads>
            <Head>Nombre personalizado</Head>
            <Head>Direccion</Head>
            <Head>Ciudad</Head>
            <Head border={true} >Editar</Head>
          </Heads>
        </GridAddress>
      </ContainerAddress>
    </AddressSection>
  )
}

export { UserInfoAddress }
