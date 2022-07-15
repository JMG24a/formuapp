import styled from "styled-components";
import { paletteColor } from '../../../styles/globalStyles'
import Image from "next/image.js";

export const Container = styled.div`
  display: 'flex';
  position: 'relative';
`

export const SubText = styled.p`
  position: absolute;
  margin-top: -10px;
  margin-right: -24px;
  margin-left: 100px;
  border-bottom: 1px solid #0E3F5C;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${paletteColor.secondaryColor};
`

export const ImageLogo = styled(Image)`
  display: inline-flex;
  margin-left: 0px;
`

export const Logo = styled.a`
  position: absolute;
  margin-top: -20px;
  text-decoration: none;
  font-size: 5.0rem;
  font-weight: 700;
  color: ${paletteColor.mainColor};
`

export const ContainerLogo = styled.div`
  height: 40px;
  align-items: center;
  display: inline-flex;
`
