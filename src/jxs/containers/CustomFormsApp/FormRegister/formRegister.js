import styled from "styled-components";
import { paletteColor } from "../../../../styles/globalStyles";

export const Form = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
`

export const H2 = styled.h2`
  margin: 10px 0px 40px;
  text-align: center;
  font-size: 2.9rem;
  font-weight: 400;
  color: ${paletteColor.textWhite};
`

export const Label = styled.label`
  width: 80%;
  text-align: left;
  font-size: 1.4rem;
  color: white;
`
export const ContainerInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0px 0px 25px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: white;
`
export const Input = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  text-align: center;
  outline: none;
`
export const Anchor = styled.p`
  width: 80%;
  margin-right: 2px;
  margin-top: ${props => props.marginTop ? `${props.marginTop}` : '0px'};
  text-align: ${props => props.textAlign ? `${props.textAlign}` : 'left'};
  color: white;
`

export const Submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 35px;
  padding: 5px;
  margin: 10px 0px 10px;
  border-radius: 10px;
  background-color: ${props => props.color ? `${props.color}` : `${paletteColor.successColor}`};
  color: white;
  /* hover */
  cursor: pointer;
`

//dasadsasdasgdyuyasgycigryynatxntcauebtc6avtrcf4vyanormyw7eoaryc7oawerno7wehc

export const View = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  padding: 30px;
  background: linear-gradient(180deg, #27799C 0%, #E94D2F 100%);
`

export const ContainerView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background: white;
`

export const Labels = styled.label`
  display: block;
  width: 100%;
  text-align: left;
  font-size: 1.4rem;
  color: gray;
`
