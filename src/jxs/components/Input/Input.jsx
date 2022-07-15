import React from "react";
import Link from "next/link.js";
//styles
import { Inputs, Anchor } from "./input.js";

function Input({node, formHandler}){
  return(
    <>
      <Inputs
        type={node.type}
        id={`${node.id}`}
        name={`${node.name}`}
        required={node.required}
        onChange={(e) => formHandler(e)}
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
