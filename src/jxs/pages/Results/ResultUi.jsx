import React, { useEffect } from 'react';
//containers
import { MainPage } from '../../containers/MainPage/MainPage';
import { ProgressBar } from '../../containers/ProgressBar/ProgressBar';
import { Download } from '../../containers/Download/Download.jsx';
import { ModalApp } from '../../containers/Modal/ModalApp';
import { ToolbarPDF } from '../../containers/ToolbarPDF/ToolbarPDF';
import { DocumentPDF } from '../../containers/DocumentPDF/DocumentPDF';
//style
import { Container, Title, ModalContainer, ContainerPDF } from './result.js';

function ResultUi({slugs, setIsModal, isModal, forms, handlePrint, refPDF, documentID, handleClick}){

  useEffect(()=>{
    console.log('status: ',documentID)
  },[documentID])

  return (
    <>
      <MainPage>
        <Container>
          <Title>{forms.title}</Title>
          <ProgressBar nodes={forms.formNodes} />
          <Download forms={forms} slugs={slugs} handleClick={handleClick}/>
        </Container>
      </MainPage>

      {isModal &&
        <>
          <ModalApp setModal={setIsModal}>
            <ModalContainer>
              <ToolbarPDF handlePrint={handlePrint} setIsModal={setIsModal} />
              <ContainerPDF>
                <div
                  ref={refPDF}
                  style={{
                    position: 'absolute',
                    left: '0',
                    background: 'white',
                    width: '100%',
                    padding: '20px 5%',
                  }}
                >
                  <DocumentPDF id={documentID}/>
                </div>
              </ContainerPDF>
            </ModalContainer>
          </ModalApp>
        </>
      }
    </>
  )
}

export { ResultUi }
