import styled from "styled-components"

export const Container = styled.div`
  margin-top: 150px;
  position: relative;
`

export const Title = styled.h2`
  position: absolute;
  top: -100px;
  left: calc(50% - 20%);
  text-align: center;
  font-size: 30px;
  color: white;
`

export const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;
`

export const ContainerPDF = styled.div`
  position: absolute;
  top: 75px;
  background: white;
  width: 100%;
`
