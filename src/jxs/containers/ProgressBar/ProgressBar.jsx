import React from "react";
import { useRouter } from "next/router.js";
import { BsCheckLg } from 'react-icons/bs';
//style
import { Container, Nodes, Title, Complete, Edit } from './progressBar.js'

function ProgressBar({nodes, handleBack}) {
  const router = useRouter()
  let flat = false

  if(router.pathname.startsWith('/result')){
    flat = true
  }

  return (
    <Container>
      {nodes.map((item,key) => (
          <Nodes completed={item.completed} key={key}>
          <Title>{item.title}</Title>
            {item.completed &&
            <>
              <BsCheckLg color="white" size={'15px'}/>
              {!flat &&
                <Edit onClick={()=>handleBack(item.title)}>Editar</Edit>
              }

            </>
            }

          </Nodes>
      ))}

      <Complete completed={flat}>
          <Title>Descargar</Title>
      </Complete>
    </Container>
  )
}

export { ProgressBar }
