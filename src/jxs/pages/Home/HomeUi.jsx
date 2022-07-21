import React from "react"
import { BsHandIndexThumbFill } from 'react-icons/bs'
import { ListContract } from "../../containers/ListContract/ListContract.jsx"
//containers
import { MainPage } from "../../containers/MainPage/MainPage.jsx"
import { Search } from "../../containers/Search/Search.jsx"
// import { ListContract } from "../../containers/ListContract/ListContract"
//style
import { H2, Paragraph, Section, Btn, Grid } from './home.js'

function HomeUi({handleClick, slugs, selectionContract, preSelectContract}){
  return (
    <MainPage>
      <H2>{`Realiza tus trámites de una manera`}</H2>
      <H2>{'fácil, rápida y segura'}</H2>
      <Paragraph>{'Selecciona un formulario para empezar'}</Paragraph>
      <Section>
        <Search slugs={slugs} preSelectContract={preSelectContract}/>
        <Btn onClick={handleClick}>Continuar <BsHandIndexThumbFill/></Btn>
      </Section>

      <Section distance={'100px'}>
        <Paragraph position={'left'} margin={'20px 40px'}>Formularios Nuevos</Paragraph>
        <Grid>
          <ListContract slugs={slugs} selectionContract={selectionContract}/>
        </Grid>
      </Section>
    </MainPage>
  )
}

export { HomeUi }
