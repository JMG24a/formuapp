import React from "react";
//components
import { Logo } from "../../components/Logo/Logo";
//style
import { paletteColor } from "../../../styles/globalStyles";

function ToolbarPDF({handlePrint, setIsModal}){
  return(
    <div
      style={{
        position: 'fixed',
        width: '100%',
        display: 'flex',
        zIndex: '3',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        background: `${paletteColor.darkMainColor}`,
      }}
    >
      <Logo/>

      <div>
        <button
            style={{
              margin: '10px',
              padding: '10px',
              background: `${paletteColor.secondaryColor}`,
              borderRadius: '5px',
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={handlePrint}
          >
              Descargar
          </button>

          <button
            style={{
              margin: '10px',
              padding: '10px',
              background: `${paletteColor.mainColor}`,
              borderRadius: '5px',
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={()=>setIsModal(false)}
          >
            Cerrar
          </button>
      </div>
    </div>
  )
}

export { ToolbarPDF }
