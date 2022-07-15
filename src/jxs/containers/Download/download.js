import styled from "styled-components";
import { paletteColor } from "../../../styles/globalStyles";

export const Container = styled.section`
  margin-top: 50px;
  padding: 20px;
`
export const Section = styled.section`
  display: flex;
  justify-content: space-around;
`

export const Preview = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px;
  background-color: ${paletteColor.secondaryColor};
  /* hover */
  cursor: pointer;
`

export const View = styled.p`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${paletteColor.textWhite};
`

export const Title = styled.p`
  margin: 10px;
  font-size: 1.6rem;
  color: white;
`

export const Btn = styled.button`
  width: 100%;
  min-height: 80px;
  max-height: 200px;
  background-color: ${paletteColor.textWhite};
  text-align: center;
  font-size: 1.6rem;
  color: ${paletteColor.textSecondary};
  /* hover */
  cursor: pointer;
`

export const Suggestion = styled.div`
  margin-top: 40px;
`

export const Ul = styled.ul`
  margin: 10px;
  padding: 10px 20px;
  color: ${paletteColor.textWhite};
`

export const Li = styled.li`
  margin: 5px 0px;
  list-style: circle;
  font-size: 1.2rem;
  color: ${paletteColor.textWhite};
`
