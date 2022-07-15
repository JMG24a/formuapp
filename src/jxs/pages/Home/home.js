import styled from "styled-components";
import {paletteColor} from '../../../styles/globalStyles';

export const H2 = styled.h2`
  text-align: center;
  font-size: 4.0rem;
  color: ${paletteColor.textWhite};
`

export const Paragraph = styled.p`
  margin-top: 30px;
  text-align: ${props => props.position ? `${props.position}` : `center`};
  margin: ${props => props.margin ? `${props.margin}` : `none`};
  font-size: 3.0rem;
  color: ${paletteColor.textWhite};
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.distance ? `${props.distance}` : `20px`};
`

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 40px;
  margin: 0 auto;
  border: none;
  border-radius: 10px;
  background-color: white;
`

export const Searcher = styled.input`
  width: 95%;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-size: 2.0rem;
  /* Modifications */
  outline: none;
`

export const Btn = styled.button`
  width: 140px;
  height: 35px;
  margin: 20px auto;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.primary ? `${paletteColor.mainColor}` : `${paletteColor.successColor}`};
  font-size: 1.6rem;
  font-weight: 800;
  color: ${paletteColor.textWhite};
  /* hover */
  cursor: pointer;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 25px;
  justify-items: center;
  margin-bottom: 40px;
`
