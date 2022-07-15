import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
//components
import { Input } from '../../components/Input/Input';
import { Select } from '../../components/Select/Select.jsx';
import { Radio } from '../../components/Radio/Radio.jsx';
//styles
import { Container, Paragraph, Label, Div, Form as F, Btn, Anchor } from "./form";
import Link from "next/link";

function Form({formulationOptions, handleClick, formHandler}){
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
                      formHandler={formHandler}
                    />
                  }

                  {!!item.select &&
                    <Select
                      node={item.select}
                      formHandler={formHandler}
                    />
                  }

                  {!!item.radio &&
                    <>
                    {console.log('Radio:',item.radio)}
                    <Radio
                      node={item.radio}
                      formHandler={formHandler}
                    />
                    </>
                  }
                </React.Fragment>
              ))}
            <Btn type="submit">
              {formulationOptions.button}
              <BsArrowRightCircleFill
                size={'25px'}
                style={{marginLeft: '5px'}}
              />
            </Btn>
          </F>
            }
          </Div>
          <Link href={'/'}><Anchor href={'/'}><p>{formulationOptions.footer}</p></Anchor></Link>
        </Container>
      }
    </>
  )
}

// export { Form }

// import React from "react";
// import { BsArrowRightCircleFill } from "react-icons/bs";
// //components
// import { Input } from '../../components/Input/Input';
// import { Select } from '../../components/Select/Select.jsx';
// import { Radio } from '../../components/Radio/Radio.jsx';
// //styles
// import { Container, Paragraph, Label, Div, Form as F, Btn, Anchor } from "./form";

// function Form({formulationOptions, handleClick, formHandler}){
//   return(
//     <>
//       {formulationOptions?.nodes &&
//           <Container>
//           <Paragraph>{`${formulationOptions?.title}`}</Paragraph>
//           <Div>
//             {formulationOptions?.nodes.length > 0 &&
//               <F onSubmit={handleClick} method={'POST'}>
//                 {nodes.map((item, key)=> (
//                   <React.Fragment key={key}>
//                     {!!item.label &&
//                       <Label htmlFor={item.label.id}>{item.label.title}</Label>
//                     }

//                     {!!item.input &&
//                       <Input
//                         node={item.input}
//                         formHandler={formHandler}
//                       />
//                     }

//                     {!!item.select &&
//                       <Select
//                         node={item.select}
//                         formHandler={formHandler}
//                       />
//                     }

//                     {!!item.radio &&
//                       <Radio
//                         key={index}
//                         node={indexRadio}
//                         formHandler={formHandler}
//                       />
//                     }
//                   </React.Fragment>
//                 ))}
//               <Btn type="submit">
//                 {button}
//                 <BsArrowRightCircleFill
//                   size={'25px'}
//                   style={{marginLeft: '5px'}}
//                 />
//               </Btn>
//             </F>
//             }
//           </Div>
//           <Anchor to={'/'}><p>{footer}</p></Anchor>
//         </Container>
//       }
//     </>
//   )
// }

export { Form }
