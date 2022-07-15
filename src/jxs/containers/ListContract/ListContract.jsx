import React from 'react';
//styles
import { Card } from './listContainer.js'
function ListContract({slugs, selectionContract}) {

  return(
    <>
      {slugs.map((contract, index)=>(
        <Card key={index} onClick={()=>selectionContract(contract)}>
          <p>{contract.title}</p>
          <p>{contract.content}</p>
        </Card>
      ))}
    </>
  )
}

export { ListContract }
