import React, { useRef, useState } from 'react';
import { useReactToPrint } from "react-to-print";
//redux
import { useSelector } from "react-redux";
//lib
import { getAllFilesMetadata } from '../lib/md';
//UI
import { ResultUi } from '../jxs/pages/Results/ResultUi'

export const getStaticProps = async () => {
  const PDFs = await getAllFilesMetadata('dataForm')

  return {
    props: {
      PDFs
    }
  }
}

function Result({PDFs}){
  const refPDF = useRef();
  const [documentID, setDocumentID] = useState();
  const [isModal, setIsModal] = useState(false);
  const { forms, stateInfo } = useSelector((state) => state);

  console.log('FF: ',forms)

  const handlePrint = useReactToPrint({
    content: () => refPDF.current,
  });

  const handleClick = (id) => {
    setDocumentID(id)
    setIsModal(true)
  }

  return (
    <ResultUi
      slugs={PDFs}
      refPDF={refPDF}
      isModal={isModal}
      documentID={documentID}
      forms={forms}
      handleClick={handleClick}
      setId={setDocumentID}
      setIsModal={setIsModal}
      handlePrint={handlePrint}
    />
  )
}

export default Result
