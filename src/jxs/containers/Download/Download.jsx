import React from 'react';
//style
import { Container, Section, Suggestion, Title, Btn, Preview, View, Ul, Li,  } from './download.js'

function Download({forms, slugs, handleClick}){
  return (
    <Container>
      <Title>
        {forms?.relations?.length > 1 ?
          `Descarga estos ${forms.relations.length} documentos`
          :
          'Descarga este documento'
        }
      </Title>

      <Section>

        {forms?.relations?.length <= 0 &&
          <div style={{width: "30%"}}>
            <Btn>descargar {forms.title}</Btn>

            <Preview onClick={()=>handleClick(forms.id)}>
              <View>vista previa</View>
            </Preview>
          </div>
        }

        {forms?.relations?.map((relation, index) => {
          const infoSlug = slugs.filter(slug => slug.id === relation);

          return(
            <div key={index} style={{width: "30%"}}>
              <Btn>descargar {infoSlug[0].title}</Btn>

              <Preview onClick={()=>handleClick(relation)}>
                <View>vista previa</View>
              </Preview>
            </div>
          )
        })}

      </Section>
      <Suggestion>
        <Title>También te puede intera</Title>
        <Ul>
          <Li>Consulta de impuestos</Li>
          <Li>Agendar citas</Li>
          <Li>Consultar instructivo</Li>
        </Ul>
      </Suggestion>
    </Container>
  )
}

export { Download }
