import React from "react";
import { Form } from "../../containers/Form/Form";
//containers
import { MainPage } from "../../containers/MainPage/MainPage";
import { ProgressBar } from "../../containers/ProgressBar/ProgressBar.jsx";
//style
import { Container, Section, Title } from './formuApp.js'

function FormuAppUi({
  form,
  handleClick,
  formHandler,
  handleFocus,
  handleBack,
  forms,
  index,
  flatEdit,
  setFlatEdit
}){
  return (
    <MainPage>
      <Container>
        <div
          style={{
            width: "100%",
            height: "80px",
            textAlign: "center",
            position: "relative",
          }}>
          <Title>{forms.title}</Title>
        </div>
        <ProgressBar nodes={forms.formNodes} handleBack={handleBack} />
        <Section>
          <Form
            form={form}
            formulationOptions={forms.formNodes[index]}
            flatEdit={flatEdit}
            setFlatEdit={setFlatEdit}
            handleClick={handleClick}
            formHandler={formHandler}
            handleFocus={handleFocus}
          />
        </Section>
      </Container>
    </MainPage>
  )
}

export { FormuAppUi }
