import styled from "styled-components";
import { paletteColor } from "../../../styles/globalStyles";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto 50px;
  padding: 40px 20px;
  border-radius: 10px;
  background-color: white;
`
export const Paragraph = styled.p`
  text-align: center;
  font-size: 3.0rem;
  font-weight: 300;
  color: ${paletteColor.darkMainColor};
`

export const Label = styled.label`
  display: block;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 1.4rem;
  color: ${paletteColor.textSecondary};
`
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.margin ? `${props.margin}` : `none`};
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

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

export const Anchor = styled.a`
  margin-top: 5px;
`
