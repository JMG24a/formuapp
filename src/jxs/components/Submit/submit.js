import styled from "styled-components";
import { paletteColor } from "../../../styles/globalStyles";

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35px;
  margin: 10px auto 20px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.primary ? `${paletteColor.mainColor}` : `${paletteColor.successColor}`};
  font-size: 1.6rem;
  font-weight: 800;
  color: ${paletteColor.textWhite};
  /* hover */
  cursor: pointer;
`

export const BtnEdit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 35px;
  margin: 25px auto 5px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.primary ? `${paletteColor.mainColor}` : `${paletteColor.successColor}`};
  font-size: 1.6rem;
  font-weight: 800;
  color: ${paletteColor.textWhite};
  /* hover */
  cursor: pointer;
`
