import React from 'react';

function FUM(){
  return(
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(11, 1fr)',
      gridTemplateRows: '80px', rowGap: '15px', fontSize: '0.9rem'
    }}>
      {/*Block 1*/}
      <div style={{border: '2px solid black', gridColumn: '1/5', textAlign: 'center', padding: '5px'}}>
        <p>MINISTERIO DE TRANSPORTE</p>
      </div>

      {/*Block 2*/}
      <div
        style={{
          gridColumn: '5/7',
          padding: '5px',
          borderBottom: '2px solid black',
          borderTop: '2px solid black',
          borderRight: '2px solid black',
          textAlign: 'center',
        }}>
        <p>FORMULARIO DE SOLICITUD DE TRAMITES DEL REGISTRO NACIONAL AUTOMOTOR</p>
      </div>

      {/*Block 3*/}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '15px',
          gridAutoColumns: 'repeat(7, 1fr)',
          border: '2px solid black',
          gridColumn: '8/10',
        }}>
        <p style={{gridColumn: '1/7', textAlign: 'center', borderBottom: '1px solid black', fontWeight: '800'}}>
          1. ORGANISMO DE TRÁNSITO
        </p>

        <p style={{gridColumn: '1/7', paddingLeft: '2px', borderBottom: '1px solid black'}}>
          NOMBRE: {/*Variables*/}s
        </p>

        <div style={{gridColumn: '1/7', marginLeft: '0px', borderBottom: '1px solid black', display: 'flex', textAlign: 'center'}}>
          <div style={{width: '50%', borderRight: '1px solid black'}}>CIUDAD</div>
          <div style={{width: '50%', borderRight: '1px solid black'}}>CODIGO</div>
          <div style={{width: '100%'}}>FECHA DE TRAMITE</div>
        </div>

        <div style={{gridColumn: '1/7', marginLeft: '0px', display: 'flex', textAlign: 'center'}}>
          <div style={{width: '50%', borderRight: '1px solid black'}}>{/*Variables*/}s</div>
          <div style={{width: '50%', borderRight: '1px solid black'}}>{/*Variables*/}s</div>
          <div style={{width: '100%'}}>{/*Variables*/}s</div>
        </div>
      </div>

      {/*Block 4*/}
      <div
        style={{
          gridColumn: '11/12',
          textAlign: 'center',
          background: 'white',
          border: '2px solid black',
          display: 'grid',
          gridTemplateRows: '15px 15px 48px'
        }}>
        <div style={{borderBottom: '1px solid black', padding: '2px', fontWeight: '800'}}>2. PLACA</div>

        <div style={{display: 'flex', textAlign: 'center', borderBottom: '1px solid black'}}>
          <div style={{width: '100%', borderRight: '1px solid black'}}>LETRAS</div>
          <div style={{width: '100%'}}>NUMERO</div>
        </div>

        <div style={{display: 'flex', textAlign: 'center'}}>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variables*/}s</div>
          <div style={{width: '100%'}}>{/*Variables*/}s</div>
        </div>
      </div>


      {/*Block 5*/}
      <div style={{gridColumn: '1/7', border: '2px solid black'}}>
        <div style={{borderBottom: '1px solid black', textAlign: 'center', fontWeight: '800'}}>3. TRAMITE SOLICITADO</div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(26 1fr)', textAlign: 'center'}}>
          <div style={{gridColumn: '2/3', borderBottom: '1px solid black', borderRight: '1px solid black'}}>1</div>
          <div style={{gridColumn: '3/6', borderBottom: '1px solid black', borderRight: '1px solid black'}}>
            MATRICULA / REGISTRO
          </div>
          <div style={{gridColumn: '6/7', borderBottom: '1px solid black', borderRight: '1px solid black'}}>2</div>
          <div style={{gridColumn: '7/10', borderBottom: '1px solid black', borderRight: '1px solid black'}}>
            TRASPASO
          </div>
          <div style={{gridColumn: '10/11', borderBottom: '1px solid black', borderRight: '1px solid black'}}>3</div>
          <div style={{gridColumn: '11/14', borderBottom: '1px solid black', borderRight: '1px solid black'}}>
            TRANSLADO MATRICULA / REGISTRO
          </div>
          <div style={{gridColumn: '14/15', borderBottom: '1px solid black', borderRight: '1px solid black'}}>4</div>
          <div style={{gridColumn: '15/18', borderBottom: '1px solid black', borderRight: '1px solid black'}}>
            RADICADO MATRICULA / REGISTRO
          </div>
          <div style={{gridColumn: '18/19', borderBottom: '1px solid black', borderRight: '1px solid black'}}>5</div>
          <div style={{gridColumn: '19/22', borderBottom: '1px solid black', borderRight: '1px solid black'}}>
            CAMBIO DE COLOR
          </div>
          <div style={{gridColumn: '22/23', borderBottom: '1px solid black', borderRight: '1px solid black'}}>6</div>
          <div style={{gridColumn: '23/26', borderBottom: '1px solid black'}}>
            CAMBIO DE SERVICIO
          </div>

          <div style={{gridColumn: '2/3', borderBottom: '1px solid black', borderRight: '1px solid black'}}>7</div>
          <div style={{gridColumn: '3/6', borderBottom: '1px solid black', borderRight: '1px solid black'}}>
            REGRABAR MOTOR
          </div>
          <div style={{gridColumn: '6/7', borderBottom: '1px solid black', borderRight: '1px solid black'}}>8</div>
          <div style={{gridColumn: '7/10', borderBottom: '1px solid black', borderRight: '1px solid black'}}>
            REGRABAR CHASIS
          </div>
          <div style={{gridColumn: '10/11', borderBottom: '1px solid black', borderRight: '1px solid black'}}>9</div>
          <div style={{gridColumn: '11/14', borderBottom: '1px solid black', borderRight: '1px solid black'}}>
            TRANSFORMACION
          </div>
          <div style={{gridColumn: '14/15', borderBottom: '1px solid black', borderRight: '1px solid black'}}>10</div>
          <div style={{gridColumn: '15/18', borderBottom: '1px solid black', borderRight: '1px solid black'}}>
            DUPLICADO LICENCIA TRANSITO
          </div>
          <div style={{gridColumn: '18/19', borderBottom: '1px solid black', borderRight: '1px solid black'}}>11</div>
          <div style={{gridColumn: '19/22', borderBottom: '1px solid black', borderRight: '1px solid black'}}>
            INSCRIPC. PRENDA
          </div>
          <div style={{gridColumn: '22/23', borderBottom: '1px solid black', borderRight: '1px solid black'}}>12</div>
          <div style={{gridColumn: '23/26', borderBottom: '1px solid black'}}>
            LEVANTA. PRENDA
          </div>

          <div style={{gridColumn: '2/3', borderRight: '1px solid black'}}>13</div>
          <div style={{gridColumn: '3/6', borderRight: '1px solid black'}}>CANCELACION MATRICULA / REGISTRO</div>
          <div style={{gridColumn: '6/7', borderRight: '1px solid black'}}>14</div>
          <div style={{gridColumn: '7/10', borderRight: '1px solid black'}}>CAMBIO DE PLACAS</div>
          <div style={{gridColumn: '10/11', borderRight: '1px solid black'}}>15</div>
          <div style={{gridColumn: '11/14', borderRight: '1px solid black'}}>DUPLICADO DE PLACAS</div>
          <div style={{gridColumn: '14/15', borderRight: '1px solid black'}}>16</div>
          <div style={{gridColumn: '15/18', borderRight: '1px solid black'}}>REMATRICULA</div>
          <div style={{gridColumn: '18/19', borderRight: '1px solid black'}}>17</div>
          <div style={{gridColumn: '19/22', borderRight: '1px solid black'}}>CAMBIO DE CARROCERIA</div>
          <div style={{gridColumn: '22/23', borderRight: '1px solid black'}}>18</div>
          <div style={{gridColumn: '23/26'}}>OTROS</div>
        </div>
      </div>

      {/*Block 5*/}
      <div style={{gridColumn: '7/12', border: '2px solid black',
        borderLeft: 'none', textAlign: 'center'
      }}>
        <div style={{display:'flex', borderBottom: '1px solid black',}}>
          <div style={{width:'25%', borderRight: '1px solid black', textAlign: 'left', paddingLeft: '2px', fontWeight: '800'}}>5. MARCA</div>
          <div style={{width:'25%', borderRight: '1px solid black', textAlign: 'left', paddingLeft: '2px', fontWeight: '800'}}>6. LINEA</div>
          <div style={{width:'100%', padding: 'none', fontWeight: '800'}}>7. COMBUSTIBLE</div>
        </div>

        <div style={{display:'flex', borderBottom: '1px solid black', height: '20px'}}>
          <div style={{width:'25%', borderRight: '1px solid black', textAlign: 'center', paddingLeft: '2px'}}>{/*Variables*/}s</div>
          <div style={{width:'25%', borderRight: '1px solid black', textAlign: 'center', paddingLeft: '2px'}}>{/*Variables*/}s</div>
          <div style={{width:'100%', display: 'flex', fontSize: '0.7rem'}}>
            <div style={{width:'100%', borderRight: '1px solid black'}}>GASOLINA<div>1</div></div>
            <div style={{width:'100%', borderRight: '1px solid black'}}>DIESEL<div>2</div></div>
            <div style={{width:'100%', borderRight: '1px solid black'}}>GAS<div>3</div></div>
            <div style={{width:'100%', borderRight: '1px solid black'}}>MIXTO<div>4</div></div>
            <div style={{width:'100%', borderRight: '1px solid black'}}>ELECTRICO<div>5</div></div>
            <div style={{width:'100%', borderRight: '1px solid black'}}>HIDROGEN<div>6</div></div>
            <div style={{width:'100%', borderRight: '1px solid black'}}>ETANOL<div>7</div></div>
            <div style={{width:'100%', borderRight: '1px solid black'}}>BIODIESEL<div>8</div></div>
          </div>
        </div>

        <div style={{display:'flex', borderBottom: '1px solid black',}}>
          <div style={{width:'100%', borderRight: '1px solid black', textAlign: 'left', paddingLeft: '2px', fontWeight: '800'}}>8. COLORES</div>
          <div style={{width:'40%', borderRight: '1px solid black', textAlign: 'left', paddingLeft: '2px', fontWeight: '800'}}>9. MODELO</div>
          <div style={{width:'40%', padding: 'none', fontWeight: '800'}}>10. CILINDRADA</div>
        </div>

        <div style={{display:'flex', borderBottom: '1px solid black',}}>
          <div style={{width:'100%', height: '20px', borderRight: '1px solid black', paddingLeft: '2px'}}>{/*Variables*/}s</div>
          <div style={{width:'40%', borderRight: '1px solid black', paddingLeft: '2px'}}>{/*Variables*/}s</div>
          <div style={{width:'40%', padding: 'none'}}>{/*Variables*/}s</div>
        </div>

        <div style={{display:'flex', borderBottom: '1px solid black',}}>
          <div style={{width:'25%', borderRight: '1px solid black', fontWeight: '800'}}>11. CAPACIDAD Kg/Psj</div>
          <div style={{width:'25%', borderRight: '1px solid black', fontWeight: '800'}}>12. BLINDAJE</div>
          <div style={{width:'25%', padding: 'none', borderRight: '1px solid black', fontWeight: '800'}}>13. DESMONTE BLIND.</div>
          <div style={{width:'25%', padding: 'none', fontWeight: '800'}}>14. POTENCIA/HP</div>
        </div>

        <div style={{display:'flex', height: '20px'}}>
          <div style={{width:'25%', borderRight: '1px solid black',}}>{/*Variables*/}s</div>
          <div style={{width:'25%', borderRight: '1px solid black',}}>{/*Variables*/}s</div>
          <div style={{width:'25%', padding: 'none', borderRight: '1px solid black'}}>{/*Variables*/}s</div>
          <div style={{width:'25%', padding: 'none'}}>{/*Variables*/}s</div>
        </div>
      </div>

      {/*Block 6*/}
      <div style={{border: '2px solid black', borderRight: 'none',
        gridColumn: '1/7', textAlign: 'center'
      }}>
        <div style={{borderBottom: '1px solid black', height: '15px', fontWeight: '800'}}>4.CLASE DE VEHICULO</div>
        <div style={{display:'flex'}}>
          <div style={{width:'100%', borderRight: '1px solid black', height: '20px'}}>AUTOMOVIL</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>BUS</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>BUSETA</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>CAMIÓN</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>CAMIONETA</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>CAMPERO</div>
          <div style={{width:'100%'}}>MICROBUS</div>
        </div>

        <div style={{display:'flex', borderTop: '1px solid black', height: '40px'}}>
          <div style={{width:'100%', borderRight: '1px solid black'}}>{/*Variables*/}s</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>{/*Variables*/}s</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>{/*Variables*/}s</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>{/*Variables*/}s</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>{/*Variables*/}s</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>{/*Variables*/}s</div>
          <div style={{width:'100%'}}>{/*Variables*/}s</div>
        </div>

        <div style={{display:'flex', borderTop: '1px solid black', height: '20px'}}>
          <div style={{width:'100%', borderRight: '1px solid black'}}>TRACTOCAMIÓN</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>MOTOCICLETA</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>MOTOCARRO</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>MOTOTRICICLO</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>CUATRIMOTO</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>VOLQUETA</div>
          <div style={{width:'100%'}}>OTRO</div>
        </div>

        <div style={{display:'flex', borderTop: '1px solid black', height: '40px'}}>
          <div style={{width:'100%', borderRight: '1px solid black'}}>{/*Variables*/}s</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>{/*Variables*/}s</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>{/*Variables*/}s</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>{/*Variables*/}s</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>{/*Variables*/}s</div>
          <div style={{width:'100%', borderRight: '1px solid black'}}>{/*Variables*/}s</div>
          <div style={{width:'100%'}}>{/*Variables*/}s</div>
        </div>
      </div>

      {/*Block 6*/}
      <div style={{border: '2px solid black', borderRight: 'none',
        gridColumn: '7/9', textAlign: 'left'
      }}>
        <div style={{borderBottom: '1px solid black', textAlign: 'center', height: '15px',fontWeight: '800'}}>15. CARROCERIA</div>

        <div style={{display:'flex'}}>
          <div style={{width:'100%', marginLeft: '2px', height: '20px'}}>CODIGO:</div>
        </div>

        <div style={{display:'flex', borderTop: '1px solid black', height: '40px'}}>
          <div style={{width:'100%', marginLeft: '2px', textAlign: 'center'}}>{/*Variables*/}s</div>
        </div>

        <div style={{display:'flex', borderTop: '1px solid black'}}>
          <div style={{width:'100%', marginLeft: '2px', height: '20px'}}>TIPO:</div>
        </div>

        <div style={{display:'flex', borderTop: '1px solid black', height: '20px'}}>
          <div style={{width:'100%', marginLeft: '2px', textAlign: 'center'}}>{/*Variables*/}s</div>
        </div>
      </div>

      {/*Block 6*/}
      <div style={{border: '2px solid black', gridColumn: '9/12', textAlign: 'left'}}>
        <div style={{borderBottom: '1px solid black', textAlign: 'center', height: '15px', fontWeight: '800'}}>16. IDENTIFICACION INTERNA DEL VEHICULO</div>

        <div style={{display:'flex'}}>
          <div style={{width:'100%', marginLeft: '2px', borderRight: '1px solid black'}}>No. DE MOTOR:</div>
          <div style={{width:'50%', marginLeft: '2px'}}>REGRABADO:</div>
        </div>

        <div style={{display:'flex', textAlign: 'center', height: '20px'}}>
          <div style={{width:'100%', marginLeft: '2px', borderRight: '1px solid black', borderTop: '1px solid black'}}>{/*Variable*/}</div>
          <div style={{width:'50%', marginLeft: '2px', borderTop: '1px solid black'}}>{/*Variable*/}no</div>
        </div>

        <div style={{display:'flex', borderTop: '1px solid black'}}>
          <div style={{width:'100%', marginLeft: '2px', borderRight: '1px solid black'}}>
            No. DE CHASIS:
          </div>
          <div style={{width:'50%', marginLeft: '2px'}}>REGRABADO:</div>
        </div>

        <div style={{display:'flex', textAlign: 'center', height: '20px'}}>
          <div style={{width:'100%', marginLeft: '2px', borderRight: '1px solid black', borderTop: '1px solid black'}}>{/*Variable*/}</div>
          <div style={{width:'50%', marginLeft: '2px', borderTop: '1px solid black'}}>{/*Variable*/}no</div>
        </div>

        <div style={{display:'flex', borderTop: '1px solid black'}}>
          <div style={{width:'100%', marginLeft: '2px', borderRight: '1px solid black'}}>No. DE SERIE:</div>
          <div style={{width:'50%', marginLeft: '2px'}}>REGRABADO:</div>
        </div>

        <div style={{display:'flex', textAlign: 'center', height: '20px'}}>
          <div style={{width:'100%', marginLeft: '2px', borderRight: '1px solid black', borderTop: '1px solid black'}}>{/*Variable*/}</div>
          <div style={{width:'50%', marginLeft: '2px', borderTop: '1px solid black'}}>{/*Variable*/}no</div>
        </div>

        <div style={{display:'flex', borderTop: '1px solid black'}}>
          <div style={{width:'100%', marginLeft: '2px'}}>No. DE VIN VEHICULOS AUTOMOTORES:</div>
        </div>

        <div style={{display:'flex', borderTop: '1px solid black', height: '20px'}}>
          <div style={{width:'100%', marginLeft: '2px'}}>{/*Variable*/}</div>
        </div>
      </div>

      {/*Block 6*/}
      <div style={{border: '2px solid black', gridColumn: '1/5', textAlign: 'center'}}>
          <div style={{width: '100%', borderBottom: '1px solid black', height: '15px', fontWeight: '800'}}>
            17. IMPORTACIÓN O REMATE
          </div>

          <div style={{display: 'flex', borderBottom: '1px solid black'}}>
            <div style={{width: '100%', borderRight: '1px solid black'}}>IMPORTACION</div>
            <div style={{width: '100%'}}>REMATE</div>
          </div>

          <div style={{display: 'flex', borderBottom: '1px solid black'}}>
            <div style={{width: '80%', borderRight: '1px solid black'}}>MANIF. O ACTA 1</div>
            <div style={{width: '80%', borderRight: '1px solid black'}}>DE IMPOR. 2</div>
            <div style={{width: '80%', borderRight: '1px solid black'}}>ACTA 3</div>
            <div style={{width: '80%', borderRight: '1px solid black'}}>ENTIDAD 4</div>
            <div style={{width: '80%', borderRight: '1px solid black'}}>LUGAR (CIUDAD)</div>
            <div style={{width: '100%'}}>CODIGO 6</div>
          </div>

          <div style={{display: 'flex', borderBottom: '1px solid black', height: '15px'}}>
            <div style={{width: '100%', borderRight: '1px solid black'}}>No. DOCUMENTO</div>
            <div style={{width: '100%'}}>FECHA</div>
          </div>

          <div style={{display: 'flex', height: '27px'}}>
            <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
            <div style={{width: '33%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
            <div style={{width: '33%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
            <div style={{width: '33%'}}>{/*Variable*/}s</div>
          </div>
      </div>

      {/*Block 7*/}
      <div style={{border: '2px solid black', borderLeft: 'none', gridColumn: '5/9', textAlign: 'center'}}>
        <div style={{width: '100%', borderBottom: '1px solid black', height: '15px', fontWeight: '800'}}>
          18. TIPO DE SERVICIO
        </div>

        <div style={{display: 'flex', borderBottom: '1px solid black', height:'20px'}}>
          <div style={{width: '100%', borderRight: '1px solid black'}}>PARTICUL</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>PUBLICO</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>DIPLOMATI</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>OFICIAL</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>ESPECIAL</div>
          <div style={{width: '100%'}}>OTROS</div>
        </div>

        <div style={{display: 'flex', borderBottom: '1px solid black', height: '20px'}}>
        <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%'}}>{/*Variable*/}s</div>
        </div>

        <div style={{width: '100%', borderBottom: '1px solid black', height: '15px', fontWeight: '800'}}>
          19. EMPRESA VINCULADORA
        </div>

        <div style={{display: 'flex', height: '20px'}}>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%'}}>{/*Variable*/}s</div>
        </div>
      </div>

      {/*Block 8*/}
      <div style={{border: '2px solid black', borderLeft: 'none',
        gridColumn: '9/12', textAlign: 'center'
      }}>
        <div style={{width: '100%', borderBottom: '1px solid black', height: '20px', fontWeight: '800'}}>
          20. DATOS DE ALERTA
        </div>

        <div style={{display: 'flex', height: '68px'}}>
        <div style={{width: '100%', borderRight: '1px solid black'}}>HURTO 1</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>LIM. PROPIEDAD 2</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>D 2 EMBARGO 3</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>OTRO 4</div>
          <div style={{width: '100%'}}>A FAVOR DE: 5</div>
        </div>
      </div>

      {/*Block 9*/}
      <div style={{border: '2px solid black', borderRight: 'none',
        gridColumn: '1/7', textAlign: 'center'
      }}>
        <div style={{width: '100%', borderBottom: '1px solid black', height: '20px', fontWeight: '800'}}>
          21. DATOS DEL PROPIETARIO
        </div>

        <div style={{display: 'flex',}}>
          <div style={{width: '100%', borderRight: '1px solid black'}}>PRIMER APELLIDO</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>SEGUNDO APELLIDO</div>
          <div style={{width: '100%'}}>NOMBRES</div>
        </div>

        <div style={{display: 'flex', borderTop: '1px solid black',height: '15px'}}>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%'}}>{/*Variable*/}s</div>
        </div>


        <div style={{display: 'flex', borderTop: '1px solid black', borderBottom: '1px solid black'}}>
          <div style={{width: '100%', borderRight: '1px solid black'}}>C.C</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>NIT</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>N.N</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>PASAPORTE</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>C.EXTRANJ</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>T.IDENTI.</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>NUIP</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>C. DIPLOMATICO</div>
          <div style={{width: '100%'}}>No. DOCUMENTO</div>
        </div>

        <div style={{display: 'flex', borderBottom: '1px solid black', height: '15px'}}>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%'}}>{/*Variable*/}s</div>
        </div>

        <div style={{display: 'flex', borderBottom: '1px solid black'}}>
          <div style={{width: '100%', borderRight: '1px solid black'}}>DIRECCION</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>CIUDAD</div>
          <div style={{width: '100%'}}>TELEFONO</div>
        </div>

        <div style={{display: 'flex', height: '15px'}}>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%'}}>{/*Variable*/}s</div>
        </div>

        <div style={{display: 'flex', borderTop: '1px solid black'}}>
          <div style={{width: '100%'}}>FIRMA DEL COMPRADOR</div>
        </div>

        <div style={{display: 'flex', borderTop: '1px solid black', height: '15px'}}>
          <div style={{width: '100%'}}>{/*Variable*/}s</div>
        </div>
      </div>

      {/*Block 10*/}
      <div style={{border: '2px solid black',
        gridColumn: '7/12', gridRow: '5/7', textAlign: 'center'
      }}>
        <div style={{width: '100%', borderBottom: '1px solid black', height: '20px', fontWeight: '800'}}>
          23. OBSERVACIONES
        </div>

        <div style={{display: 'flex', height: '30px'}}>
          <div style={{width: '100%', borderRight: '1px solid black'}}>ESPECIFIQUE LA PALABRA OTRO Y TRANSFORMACIÓN EFECTUADA AL VEHICULO, AMPLEI EL TIPO DE ALERTA O LO QUE ESTIME</div>
        </div>

        <div style={{display: 'flex', borderTop: '1px solid black', height: '40px'}}>
          <div style={{width: '100%'}}>{/*Variable*/}s</div>
        </div>

        <div style={{display: 'flex',}}>
          <div style={{width: '100%', borderTop: '1px solid black', height: '40px'}}>
            OBSERVACIONES (PARA TRASPASO DE VEHICULOS AUTOMOTORES ANTES DE RUNT)
          </div>
        </div>



        <div style={{display: 'flex', borderBottom: '1px solid black', borderTop: '1px solid black', height: '50px'}}>
          <div style={{width: '100%'}}>
          SI SU VEHICULO AUTOMOTOR HA SIDO MATRICULADO ANTES DEL RUNT TRANSCRIBA EN ESTE CAMPO EL TIPO DE CARROCERIA Y LA CLASE DE VEHICULO QUE SE ENCUENTRA REGISTRADA EN SU LICENCIA DE TRÁNSITO O CUALQUIER OTRO ASPECTO QUE CONSIDERE NECESARIO PARA DAR EXACTITUD A LA INFORMACIÓN.
          </div>
        </div>

        <div style={{display: 'flex', height: '50px'}}>
          <div style={{width: '100%'}}>{/*Variable*/}s</div>
        </div>
      </div>

     {/*Block 9*/}
      <div style={{border: '2px solid black', borderRight: 'none',
        gridColumn: '1/7', textAlign: 'center'
      }}>
        <div style={{width: '100%', borderBottom: '1px solid black', height: '20px', fontWeight: '800'}}>
          22. DATOS DEL COMPRADOR (TRASPASO)
        </div>

        <div style={{display: 'flex'}}>
          <div style={{width: '100%', borderRight: '1px solid black'}}>PRIMER APELLIDO</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>SEGUNDO APELLIDO</div>
          <div style={{width: '100%'}}>NOMBRES</div>
        </div>

        <div style={{display: 'flex', borderTop: '1px solid black', height: '15px'}}>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%'}}>{/*Variable*/}s</div>
        </div>

        <div style={{display: 'flex', borderTop: '1px solid black', borderBottom: '1px solid black'}}>
          <div style={{width: '100%', borderRight: '1px solid black'}}>C.C</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>NIT</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>N.N</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>PASAPORTE</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>C.EXTRANJ</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>T.IDENTI.</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>NUIP</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>C. DIPLOMATICO</div>
          <div style={{width: '100%'}}>No. DOCUMENTO</div>
        </div>

        <div style={{display: 'flex', borderBottom: '1px solid black', height: '15px'}}>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%'}}>{/*Variable*/}s</div>
        </div>

        <div style={{display: 'flex', borderBottom: '1px solid black'}}>
          <div style={{width: '100%', borderRight: '1px solid black'}}>DIRECCION</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>CIUDAD</div>
          <div style={{width: '100%'}}>TELEFONO</div>
        </div>

        <div style={{display: 'flex', height: '15px'}}>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%', borderRight: '1px solid black'}}>{/*Variable*/}s</div>
          <div style={{width: '100%'}}>{/*Variable*/}s</div>
        </div>

        <div style={{display: 'flex', borderTop: '1px solid black'}}>
          <div style={{width: '100%'}}>FIRMA DEL COMPRADOR</div>
        </div>

        <div style={{display: 'flex', borderTop: '1px solid black', height: '15px'}}>
          <div style={{width: '100%'}}>{/*Variable*/}s</div>
        </div>
      </div>
    </div>
  )
}

export { FUM }

