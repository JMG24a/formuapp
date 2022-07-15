import React from "react";
//components PDF
import { TraspasoDeAutomovil } from '../../../pdf/dataHtml/traspaso-auto-movile';
import { FUM } from '../../../pdf/dataHtml/fum';

function DocumentPDF({id}){
  const PDF = (id) => {
    const objectPFD = {
      '001_traspaso_auto': <TraspasoDeAutomovil/>,
      '002_fum': <FUM/>
    }

    return objectPFD[id]
  }

  return(
    <>
      {PDF(id)}
    </>
  )
}

export { DocumentPDF }
