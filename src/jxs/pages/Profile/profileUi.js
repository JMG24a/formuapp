import styled from "styled-components";
import { paletteColor } from "../../../styles/globalStyles";

export const Container = styled.div`
  width: 100%;
  margin-top: -75px;
`
export const Title = styled.h2`
  text-align: center;
  font-size: 2.9rem;
  font-weight: 400;
  color: ${paletteColor.textWhite};
`
export const ContainerS = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
`

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  text-align: center;
`

export const Card = styled.div`
  width: 30%;
`

export const Titles = styled.p`
  margin-bottom: 20px;
  font-size: ${props => props.size ? '2.2rem' : '1.8rem'};
  color: ${props => props.color ? `${paletteColor.textWhite}` : 'gray'};
`

export const Select = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: white;
`
