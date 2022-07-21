import styled from "styled-components";
import { paletteColor } from "../../../styles/globalStyles";

export const Search = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 40px;
  margin: 0 auto;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 1px 12px gray;
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

export const ContainerSearching = styled.div`
  position: absolute;
  top: 40px;
  left: calc(50% - 47%);
  background: #f3f0f0;
  width: 95%;
  border: none;
  border-radius: 2px;
  font-size: 2.0rem;
  /* Modifications */
  outline: none;
`
export const ContainerOptions = styled.div`
  padding: 5px 10px;
  :hover{
    background-color: ${paletteColor.mainColor};
    cursor: pointer;
  }
`

export const Options = styled.p`
  border-bottom: 1px solid gray;
  /* Hover */

`
