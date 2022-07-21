import React from "react";
import Link from "next/link.js";
//styles
import { Inputs, Anchor } from "./input.js";

function Input({form, node, formHandler, handleFocus}){
  return(
    <>
      <Inputs
        type={node.type}
        id={`${node.id}`}
        name={`${node.name}`}
        value={form[node.name] ? form[node.name] : ''}
        required={node.required}
        onChange={(e) => formHandler(e)}
        onFocus={(e)=>handleFocus(e)}
      />
      {!!node.footer &&
        <Link href={'/'}>
          <Anchor to={'/'}><p>{node.footer}</p></Anchor>
        </Link>
      }
    </>
  )
}

export { Input }
