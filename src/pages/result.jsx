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
  const [isModal, setIsModal] = useState(false)
  const { forms, stateInfo,  } = useSelector((state) => state);
  console.log(PDFs)
  const handlePrint = useReactToPrint({
    content: () => refPDF.current,
  });

  return (
    <ResultUi
      slugs={PDFs}
      refPDF={refPDF}
      isModal={isModal}
      stateInfo={stateInfo}
      forms={forms}
      setIsModal={setIsModal}
      handlePrint={handlePrint}
    />
  )
}

export default Result
