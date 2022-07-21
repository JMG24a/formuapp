import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FiSave } from 'react-icons/fi';
import { GiCancel } from 'react-icons/gi'
//styles
import { Btn, BtnEdit } from "./submit.js";

function Submit({title, flatEdit, setFlatEdit}){
  return(
    <>
      {!flatEdit &&
        <Btn type="submit">
          {title}
          <BsArrowRightCircleFill
            size={'25px'}
            style={{marginLeft: '5px'}}
          />
        </Btn>
      }

      {!!flatEdit &&
        <div style={{display: 'flex'}}>
          <BtnEdit type="submit">
            Guardar
            <FiSave
              size={'25px'}
              style={{marginLeft: '5px'}}
            />
          </BtnEdit>

          <BtnEdit type="button" onClick={()=>setFlatEdit(false)}>
            Cancelar
            <GiCancel
              size={'25px'}
              style={{marginLeft: '5px'}}
            />
          </BtnEdit>
        </div>
      }
    </>
  )
}

export { Submit }
