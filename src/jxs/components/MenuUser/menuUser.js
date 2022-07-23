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
  width: 18%;
  min-height: 90px;
  padding: 0px;
  background-color: #0c1434;
  margin: 0px;
`;

export const ListStyleContainer = styled.ul`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const ListStyle = styled.li`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;
  font-size: 2em;
  align-items: center;
  display: flex;
  border-bottom: 1px solid white;
`;

export const CloseButton = styled.p`
  color: red;
  font-size: 2em;
  text-align: center;
`;

export const FollowUs = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  margin-top: 20%;
`;

export const BottomNav = styled.p`
  position: absolute;
  bottom: 30px;
  left: 15%;
  text-align: center;
  justify-content: center;
`;

export const PosicionFlecha = styled.div`
  height: 100%;
  background-color: #001e38;
  width: 35px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
