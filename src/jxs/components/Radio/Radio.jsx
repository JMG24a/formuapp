import React from "react";
//styled
import { Container, ContainerRadio } from "./radio.js";

function Radio({node, formHandler}){
  return(
    <Container>
      {node?.values.map((radio, index) => (
        <ContainerRadio key={index}>
          <p>{`${radio}`}</p>
          <input
            type='radio'
            name={`${node.name}`}
            value={radio}
            onChange={formHandler}
          />
        </ContainerRadio>
      ))}
    </Container>
  )
}

export { Radio }
