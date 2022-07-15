import React, { useEffect, useState } from 'react';
//style
import { Container, Title, Body } from './alert.js'

function Alert({state, action}){
  const [isAlert, setAlert] = useState(false)

  useEffect(()=>{
    if(state.title.length > 0){
      setAlert(true)
      setTimeout(()=>{
        action()
        setAlert(false)
      },4000)
    }
  },[state])

  return(
    <>
      {!!isAlert &&
        <Container>
          <div>
            <Title>{state.title}</Title>
          </div>
          <Body>{state.body}</Body>
        </Container>
      }
    </>
  )
}

export {Alert}
