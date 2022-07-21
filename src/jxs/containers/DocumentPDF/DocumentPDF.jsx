import React from "react";
//components PDF
import { TraspasoDeAutomovil } from '../../../pdf/dataHtml/contrato-compra-y-venta';
import { FUM } from '../../../pdf/dataHtml/fum';

function DocumentPDF({id}){
  const PDF = (id) => {
    const objectPFD = {
      '001_compra_y_venta': <TraspasoDeAutomovil/>,
      '002_fum': <FUM/>
    }

    return objectPFD[id] ? objectPFD[id] : <></>
  }

  return(
    <>
      {PDF(id)}
    </>
  )
}

export { DocumentPDF }
