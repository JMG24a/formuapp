import styled from "styled-components";
import { paletteColor } from "../../../styles/globalStyles";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 5px;
  background-color: white;
`

export const Nodes = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: ${props => props.completed ? `${paletteColor.mainColor}` : 'white'};
`

export const Complete = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: ${props => props.completed ? `${paletteColor.successColor}` : 'white'};
`

export const Title = styled.p`
  position: absolute;
  min-width: 200px;
  top: -25px;
  left: calc(50% - 100px);
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  color: white;
`
