import React from "react";
import { useState } from "react";
import { useEffect } from "react";
//redux
import { useSelector } from 'react-redux';

function TraspasoDeAutomovil(){
  const [info, setInfo] = useState({
    customer: {},
    seller: {},
    contract: {},
    car: {}
  })
  //redux
  const { stateInfo } = useSelector((state) => state)

  useEffect(()=>{
    getData()
  },[])

  const CONSTANTS = {
    customer: 'Datos del comprador',
    seller: 'Datos del vendedor',
    contract: 'Datos del contrato',
    car: 'Datos del vehiculo',
  }

  const getData = () => {
    const cloneState = stateInfo;
    const customer = cloneState.formInfo.filter(info => info.title === CONSTANTS.customer);
    const seller = cloneState.formInfo.filter(info => info.title === CONSTANTS.seller);
    const contract = cloneState.formInfo.filter(info => info.title === CONSTANTS.contract);
    const car = cloneState.formInfo.filter(info => info.title === CONSTANTS.car);

    setInfo({
      customer,
      seller,
      contract,
      car
    })
  }
  console.log('??',info)

  return(
    <div style={{ textAlign: "justify", fontSize: '1.2rem', lineHeight: '24px'}}>
      <h4 style={{ textAlign: "center", margin: '5px 0', fontSize: '1.4rem'}}>CONTRATO DE COMPRAVENTA DE VEHICULO AUTOMOTOR</h4>

      <p style={{ textAlign: "justify", margin: '20px 0' }}>
        El señor <b>{`${info.seller[0]?.name} ${info.seller[0]?.lastName}`}</b> mayor de edad con
        domicilio en esta ciudad, identificado como aparece al pie de su firma, quien en adelante se denominará <b> EL VENDEDOR</b>, y{" "}
        <b>{`${info.customer[0]?.name} ${info.customer[0]?.lastName}`}</b>, mayor de edad y vecino
        de esta ciudad, quien se identifica como aparece al pie de su firma y en adelante se denominará <b> EL COMPRADOR</b>, hemos acordado celebrar
        un contrato de <b> COMPRAVENTA</b> que se regirá por las normas civiles y comerciales que regulan la materia, según las siguientes clausulas:
        <br />
        <b>Primera. Objeto: EL VENDEDOR</b> por medio del presente instrumento transfiere a título de compraventa real y efectiva al <b>COMPRADOR</b>{" "}
        la propiedad del vehículo automotor que a continuación se identifica:
      </p>

      <table style={{ textAlign: "center", fontSize: '1.2rem', margin: '40px auto' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '0px 10px' }}>
              Placa
            </th>
            <th style={{ border: '1px solid black', padding: '0px 10px' }}>
              Marca
            </th>
            <th style={{ border: '1px solid black', padding: '0px 10px' }}>
              Linea
            </th>
            <th style={{ border: '1px solid black', padding: '0px 10px' }}>
              Color
            </th>
            <th style={{ border: '1px solid black', padding: '0px 10px' }}>
              Modelo
            </th>
            <th style={{ border: '1px solid black', padding: '0px 10px' }}>
              No. de Serie
            </th>
            <th style={{ border: '1px solid black', padding: '0px 10px' }}>
              No. de Chasis
            </th>
            <th style={{ border: '1px solid black', padding: '0px 10px' }}>
              No. de Motor
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '0px 10px' }}>
            {`${info.car[0]?.licensePlate}`}
            </td>
            <td style={{ border: '1px solid black', padding: '0px 10px' }}>
              {`${info.car[0]?.mark}`}
            </td>
            <td style={{ border: '1px solid black', padding: '0px 10px' }}>
              {`${info.car[0]?.line}`}
            </td>
            <td style={{ border: '1px solid black', padding: '0px 10px' }}>
              {`${info.car[0]?.color}`}
            </td>
            <td style={{ border: '1px solid black', padding: '0px 10px' }}>
              {`${info.car[0]?.model}`}
            </td>
            <td style={{ border: '1px solid black', padding: '0px 10px' }}>
              {`${info.car[0]?.serialN}`}
            </td>
            <td style={{ border: '1px solid black', padding: '0px 10px' }}>
              {`${info.car[0]?.chassisN}`}
            </td>
            <td style={{ border: '1px solid black', padding: '0px 10px' }}>
              {`${info.car[0]?.engineNumber}`}
            </td>
          </tr>
        </tbody>
      </table>

      <p style={{ textAlign: "justify", margin: "40px 0"}}>
        <b>Segunda. Precio y forma de pago: </b> Las partes pactan la suma de ({`${info.contract[0]?.priceCar}`}) en letras:{" "}
        ({`${info.contract[0]?.priceCarText.toUpperCase()}`}), valor que EL COMPRADOR pagará de la siguiente manera: {`${info.contract[0]?.typeCash}`}<br />
        <b>Tercera. Tradición: EL VENDEDOR </b> garantiza a EL COMPRADOR que el bien objeto de la venta es de su propiedad, que no ha sido enajenado a
        ninguna otra persona, que tiene la posesión pacífica de los mismos. En cualquier caso, se compromete a sanear cualquier vicio que afecte la
        propiedad o libre disposición del bien. <br />
        <b>Cuarta. Otras Obligaciones: EL VENDEDOR </b>hace entrega del vehículo automotor a paz y salvo por todo concepto de impuestos, tasas y
        contribuciones, en buen estado, libre de gravámenes, embargos, multas y pactos de reserva de dominio y cualquiera otra circunstancia que
        afecte el libre comercio del bien objeto del presente contrato. <br />
        <b>Quinta. Entrega: EL VENDEDOR</b> con la fecha de la firma de este instrumento hace entrega real y material del bien al <b>COMPRADOR</b> y
        este declara haberlo recibido a satisfacción en las condiciones y estado en que fue comprado. <br />
        <b>Sexta. Cláusula penal: </b> las partes establecen que quien incumpla cualquiera de las estipulaciones derivadas de este contrato, pagará a
        la otra como sanción la suma de {/*formData.SancionLetras*/} ({/*${parseInt(formData.SancionNumero).toLocaleString()}*/}), valor que será exigible sin
        necesidad de requerimientos, constituciones en mora ni declaraciones judiciales, para lo cual el presente contrato constituye título
        ejecutivo. <br />
        <b>Séptima. Gastos: </b> Los gastos e impuestos que ocasione la legalización del presente contrato, serán de cargo del
         {`${info.contract[0]?.travelExpenses}`}. En constancia de aceptación se suscribe, una vez leído, en dos (2) copias del mismo tenor y contenido con destino a
        cada una de las partes, en la ciudad de {`${info.contract[0]?.city}`} en la fecha de {`${info.contract[0]?.date}`}
      </p>

      <div style={{ margin: "100px 0" }}>
        <table style={{ width: "90%", marginRight: "auto", marginLeft: "auto" }}>
          <tr>
            <td style={{ borderTop: "1px solid" }}>
              EL VENDEDOR <br />
              Nombre: {`${info.seller[0]?.name} ${info.seller[0]?.lastName}`} <br />
              CC: {`${info.customer[0]?.cc}`} <br />
              Cel: {`${info.seller[0]?.phones}`} <br />
              Direccion: {`${info.seller[0]?.address}`}
              <br />
              Ciudad: {`${info.seller[0]?.city}`}
              <br />
            </td>
            <td style={{ padding: "10px" }}> </td>
            <td style={{ borderTop: "1px solid" }}>
              EL COMPRADOR <br />
              Nombre: {`${info.customer[0]?.name} ${info.customer[0]?.lastName}`}<br />
              CC: {`${info.customer[0]?.cc}`} <br />
              Cel: {`${info.customer[0]?.phone}`} <br />
              Direccion: {`${info.customer[0]?.address}`}
              <br />
              Ciudad: {`${info.customer[0]?.city}`}
              <br />
            </td>
          </tr>
          <tr></tr>
        </table>
      </div>
    </div>
  )
}

export { TraspasoDeAutomovil }
