import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
//components
import { Input } from '../../components/Input/Input';
import { Select } from '../../components/Select/Select.jsx';
import { Radio } from '../../components/Radio/Radio.jsx';
import { Submit } from "../../components/Submit/Submit";
//styles
import { Container, Paragraph, Label, Div, Form as F, Anchor } from "./form";
import Link from "next/link";

function Form({
  formulationOptions,
  handleClick,
  form,
  formHandler,
  handleFocus,
  flatEdit,
  setFlatEdit
}){
  return(
    <>
      {formulationOptions?.nodes &&
        <Container>
          <Paragraph>{`${formulationOptions.title}`}</Paragraph>

          <Div>
            {formulationOptions.nodes.length > 0 &&
              <F onSubmit={handleClick} method={'POST'} autoComplete={"off"}>
              {formulationOptions.nodes.map((item, key)=> (
                <React.Fragment key={key}>
                  {!!item.label &&
                    <Label htmlFor={item.label.id}>{item.label.title}</Label>
                  }

                  {!!item.input &&
                    <Input
                      node={item.input}
                      form={form}
                      formHandler={formHandler}
                      handleFocus={handleFocus}
                    />
                  }

                  {!!item.select &&
                    <Select
                      node={item.select}
                      formHandler={formHandler}
                    />
                  }

                  {!!item.radio &&
                    <Radio
                      node={item.radio}
                      formHandler={formHandler}
                    />
                  }
                </React.Fragment>
              ))}
            <Submit title={formulationOptions.button} flatEdit={flatEdit} setFlatEdit={setFlatEdit}/>
          </F>
            }
          </Div>
          <Link href={'/'}><Anchor href={'/'}><p>{formulationOptions.footer}</p></Anchor></Link>
        </Container>
      }
    </>
  )
}

export { Form }
