import React from 'react';
import { useRouter } from 'next/router';
//test redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from "redux";
import * as FormsActions from '../../../redux/actions/form-action';
import * as AlertsActions from '../../../redux/actions/alert-action';
//style
import { Container, Section, Suggestion, Title, Btn, Preview, View, Ul, Li,  } from './download.js'

function Download({setIsModal, slugs}){
  const router = useRouter()
  //redux
  const dispatch = useDispatch();
  const { get_forms  } = bindActionCreators(FormsActions, dispatch);
  const { send_alert } = bindActionCreators(AlertsActions, dispatch);
  const { auth } = useSelector((state) => state)

  const handleClick = () => {
    setIsModal(true)
  }

  const testHandle = () => {
    const form = slugs.filter(s => s.id === '002_fum')

    get_forms(form[0])
    if(!!auth.name){
      router.push('/form')
    }else{
      send_alert({
        title: 'Inicia session',
        body: 'necesitas estar registrado para esta accion'
      })
    }
  }

  return (
    <Container>
      <Title>Descarga estos 3 documentos</Title>
      <Section>
        <div style={{width: "30%"}}>
          <Btn>descargar contrato de compra venta</Btn>

          <Preview onClick={handleClick}>
            <View>vista previa</View>
          </Preview>
        </div>
        <div style={{width: "30%"}}>
          <Btn>descargar formato fun</Btn>

          <Preview onClick={handleClick}>
            <View>vista previa</View>
          </Preview>
        </div>
        <div style={{width: "30%"}}>
          <Btn>descargar mandato</Btn>

          <Preview onClick={handleClick}>
            <View>vista previa</View>
          </Preview>
        </div>
      </Section>
      <Suggestion>
        <Title>También te puede intera</Title>
        <Ul>
          <Li>Consulta de impuestos</Li>
          <Li>Agendar citas</Li>
          <Li>Consultar instructivo</Li>
        </Ul>
      </Suggestion>
    </Container>
  )
}

export { Download }
