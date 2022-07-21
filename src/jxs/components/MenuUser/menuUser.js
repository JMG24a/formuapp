import styled from "styled-components";
import { paletteColor } from "../../../styles/globalStyles";

export const Container = styled.div`
  z-index: 1;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 69%;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 200px;
  min-height: 90px;
  padding: 10px;
  background-color: #0c1434;
`

export const Title = styled.p`
  margin: 5px;
  text-align: left;
  font-size: 1.4rem;
  color: ${paletteColor.textWhite};
  /* hover */
  :hover {
    color: gray;
    cursor: pointer;
  }
`
