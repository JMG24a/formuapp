import styled from "styled-components";
import { paletteColor } from "../../../../styles/globalStyles";

export const Form = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
`

export const H2 = styled.h2`
  margin: 10px 0px 40px;
  text-align: center;
  font-size: 2.9rem;
  font-weight: 400;
  color: ${paletteColor.textWhite};
`

export const Label = styled.label`
  width: 80%;
  text-align: left;
  font-size: 1.4rem;
  color: white;
`
export const ContainerInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0px 0px 25px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: white;
`
export const Input = styled.input`
  width: 100%;
  height: 20px;
  text-align: center;
  border: none;
  outline: none;
`
export const Anchor = styled.p`
  margin-right: 2px;
  margin-top: ${props => props.marginTop ? `${props.marginTop}` : '0px'};
  width: 80%;
  text-align: left;
  color: white;
  /* hover */
  cursor: pointer;
`

export const Submit = styled.button`
  width: 80%;
  height: 35px;
  padding: 5px;
  margin: 20px 0px 40px;
  border-radius: 10px;
  background-color: ${paletteColor.successColor};
  color: white;
  /* hover */
  cursor: pointer;
`
