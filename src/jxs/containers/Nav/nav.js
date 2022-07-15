import styled from "styled-components";
import { paletteColor } from '../../../styles/globalStyles'

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ContainerAuth = styled.div`
  display: 'flex';
`

export const Btn = styled.a`
  width: 200px;
  height: 35px;
  margin: 0 10px;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.primary ? `${paletteColor.mainColor}` : `${paletteColor.darkSecondaryColor}`};
  text-align: center;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 800;
  color: ${paletteColor.textWhite};
  /* hover */
  cursor: pointer;
`

export const Avatar = styled.div`
  display: 'flex';
  align-content: 'center';
  align-items: center;
  margin: 0 10px;
  /* hover */
  cursor: pointer;
`

export const NameAvatar = styled.p`
  font-size: 1.4rem;
  color: white;
  /* hover */
  cursor: pointer;
`
