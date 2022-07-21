import React from "react";
import { BsPen, BsCloudUpload } from 'react-icons/bs'
//styles
import {
  SectionUserInfo,
  ContainerPhoto,
  GridInputs,
  ContainerInputs,
  Picture,
  Btn,
  Label,
  Input,
  Submit
} from './userInfo';

function UserInfo(){
  return(
    <SectionUserInfo>
      <ContainerPhoto>
        <Picture>
          <img src="" alt="" />
        </Picture>
        <Btn>
          <BsCloudUpload/> Subir Imagen
        </Btn>
      </ContainerPhoto>
      <GridInputs>
        <ContainerInputs>
          <Label htmlFor="">Nombre(s): </Label>
          <Input type="text" name="" id="" />
        </ContainerInputs>
        <ContainerInputs>
          <Label htmlFor="">Apellido(s): </Label>
          <Input type="text" name="" id="" />
        </ContainerInputs>
        <ContainerInputs>
          <Label htmlFor="">Telefono fijo: </Label>
          <Input type="text" name="" id="" />
        </ContainerInputs>
        <ContainerInputs>
          <Label htmlFor="">Telefono celular: </Label>
          <Input type="text" name="" id="" />
        </ContainerInputs>
        <Submit>
          Guardar <BsPen />
        </Submit>
      </GridInputs>
    </SectionUserInfo>
  )
}

export { UserInfo }
