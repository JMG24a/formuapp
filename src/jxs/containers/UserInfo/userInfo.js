import styled from "styled-components";
import { paletteColor } from "../../../styles/globalStyles";

export const SectionUserInfo = styled.section`
  display: flex;
  padding: 25px 0px;
`

//photo
export const ContainerPhoto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  margin: 0px 25px;
`
export const Picture = styled.picture`
  width: 90%;
  height: 140px;
  margin: 0px 10px 10px;
  border: 1px solid white;
  border-radius: 10px;
`
export const Btn = styled.button`
  width: 70%;
  height: 25px;
  border: 1px solid white;
  border-radius: 10px;
  color: ${paletteColor.textWhite};
  /* hover */
  :hover{
    cursor: pointer;
    border: 1px solid gray;
    color: gray;
  }
`

//inputs
export const GridInputs = styled.div`
  display: grid;
  column-gap: 15px;
  grid-auto-flow: row;
  justify-content: center;
  align-items: center;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  width: 80%;
`
export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  margin: 5px 0px;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${paletteColor.textWhite};
`
export const Input = styled.input`
  border: 1px solid white;
  border-radius: 10px;
  background-color: transparent;
`
export const Submit = styled.button`
  grid-column: 1/3;
  height: 25px;
  border: 1px solid white;
  border-radius: 10px;
  text-align: center;
  color: white;
  :hover{
    cursor: pointer;
    border: 1px solid gray;
    color: gray;
  }
`
