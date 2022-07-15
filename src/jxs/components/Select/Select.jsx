import React from "react";

function Select({node, formHandler}){
  return(
    <select
      name={`${node.name}`}
      onChange={formHandler}
    >
      <option value="">-Selecciona-</option>
      {node.options.map((option, index)=>(
        <option
          key={index}
          value={`${node.values[index]}`}

        >
          {node.options[index]}
        </option>
      ))}
    </select>
  )
}

export { Select }
