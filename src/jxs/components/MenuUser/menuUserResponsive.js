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
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 8%;
  min-height: 90px;
  padding: 0px;
  background-color: #0c1434;
  margin: 0px;
  transition: top 0.5s, opacity 0.5s;
`;

export const PosicionFlecha = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  background-color: #001e38;
  width: 27px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export const IconosAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  align-items: center;
  height: 40%;
`;
export const ExitIcon = styled.div`
  position: absolute;
  bottom: 20px;
`;
