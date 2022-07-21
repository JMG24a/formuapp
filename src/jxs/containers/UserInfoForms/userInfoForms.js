import styled from "styled-components";
import { paletteColor } from "../../../styles/globalStyles";

export const FormsUserSection = styled.section`
  position: relative;
  margin-top: 10px;
`
export const Title = styled.h2`
  text-align: left;
  font-size: 2.4rem;
  font-weight: 500;
  color: ${paletteColor.textWhite};
`
export const Btn = styled.button`
  position: absolute;
  right: 0px;
  width: 140px;
  height: 25px;
  border-radius: 10px;
  background-color: ${paletteColor.successColor};
  font-weight: 600;
  color: ${paletteColor.textWhite};
  /* Hover */
  :hover{
    cursor: pointer;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 35px 0px;
  padding: 0px 5px;
  border-radius: 10px;
  background-color: white;
`

export const Grid = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template: repeat(3, 1fr);
  width: 100%;
  margin: 5px 0px;
  background: white;
`
export const Heads = styled.div`
  display: flex;
  justify-content: space-around;
  height: 25px;
  padding: 5px 0px;
  `
export const Head = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  border-right: ${props => props.border ? 'none' : '1px solid gray'};
  text-align: center;
`
