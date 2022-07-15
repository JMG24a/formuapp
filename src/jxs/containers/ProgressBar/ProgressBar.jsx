import React from "react";
import { useRouter } from "next/router.js";
import { BsCheckLg } from 'react-icons/bs';
//style
import { Container, Nodes, Title, Complete } from './progressBar.js'

function ProgressBar({nodes}) {
  const router = useRouter()
  let flat = false

  if(router.pathname.startsWith('/result')){
    flat = true
  }

  return (
    <Container>
      {nodes.map((item,key) => (
        <Nodes completed={item.completed} key={key}>
          {item.completed &&
            <BsCheckLg color="white" size={'15px'}/>
          }
          <Title>{item.title}</Title>
        </Nodes>
      ))}

      <Complete completed={flat}>
          <Title>Descargar</Title>
      </Complete>
    </Container>
  )
}

export { ProgressBar }
