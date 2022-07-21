import React from "react";
//containers
import { MainPage } from "../../containers/MainPage/MainPage";
import { UserInfo } from "../../containers/UserInfo/UserInfo";
import { UserInfoAddress } from '../../containers/UserInfoAddress/UserInfoAddress';
import { UserInfoForms } from '../../containers/UserInfoForms/UserInfoForms.jsx';
//styles
import { Container, Title, ContainerS, ContainerCard, Card, Titles, Select } from './profileUi.js';

function ProfileUi(){
  return(
    <MainPage>
      <Container>
        <Title>UserName UserLastName</Title>
        <UserInfo />

        <UserInfoAddress/>

        <UserInfoForms/>

        <ContainerS>
          <ContainerCard>
            <Card>
              <Titles size={true} color={true}>Vehiculo</Titles>
              <Select>
                <Titles>Ver vehículos</Titles>
              </Select>
            </Card>
            <Card>
              <Titles size={true} color={true}>Propiedades</Titles>
              <Select>
                <Titles>Ver Propiedad</Titles>
              </Select>
            </Card>
            <Card>
              <Titles size={true} color={true} >Personas</Titles>
              <Select>
                <Titles>Ver Personas Adicionales</Titles>
              </Select>
            </Card>
          </ContainerCard>
        </ContainerS>
      </Container>
    </MainPage>
  )
}

export { ProfileUi }
