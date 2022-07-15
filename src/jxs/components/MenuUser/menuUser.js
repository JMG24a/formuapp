import styled from "styled-components";
import { paletteColor } from "../../../styles/globalStyles";

export const Container = styled.div`
  position: absolute;
  top: 70px;
  right: 0px;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  min-height: 90px;
  padding: 10px;
  background-color: ${paletteColor.textSecondary};
`

export const Title = styled.p`
  margin: 5px;
  text-align: left;
  font-size: 1.4rem;
  color: ${paletteColor.textWhite};
  /* hover */
  cursor: pointer;
`
