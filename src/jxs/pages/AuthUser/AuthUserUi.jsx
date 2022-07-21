import React from "react";
//container
import { MainPageLogin } from "../../containers/MainPageLogin/MainPageLogin.jsx";
import { FormLogin } from '../../containers/CustomFormsApp/FormLogin/FormLogin.jsx';
import { FormRegister } from '../../containers/CustomFormsApp/FormRegister/FormRegister.jsx';
//components
import { Message } from '../../components/Message/Message.jsx';

function AuthUserUi({router, form, handleSubmit, formHandler, handleFocus, handleContinue, isModal, setModal}){
  return(
    <MainPageLogin>
        {!!router.pathname.startsWith('/login') &&
          <>
            <FormLogin
              form={form}
              handleSubmit={handleSubmit}
              handleFocus={handleFocus}
              formHandler={formHandler}
            />
            <Message>
              <div style={{position: 'relative'}}>
                <p style={{fontSize: '3.8rem', fontWeight: '600', color: 'white'}}>{'"FormuApp es la mejor manera de hacer mis documentos"'}</p>
                <p style={{position: 'absolute', right: '0px', fontSize: '2.2rem', fontWeight: '400', color: '#d3cccc'}}>Alejandro Cabrejo - CEO Founder</p>
              </div>
            </Message>
          </>
        }

        {!router.pathname.startsWith('/login') &&
          <>
            <FormRegister
              isModal={isModal}
              setModal={setModal}
              handleSubmit={handleSubmit}
              handleContinue={handleContinue}
              formHandler={formHandler}
            />
            <Message>
              <div style={{position: 'relative'}}>
                <p style={{fontSize: '3.8rem', fontWeight: '600', color: 'white'}}>{'"FormuApp es la mejor manera de hacer mis documentos"'}</p>
                <p style={{position: 'absolute', right: '0px', fontSize: '2.2rem', fontWeight: '400', color: '#d3cccc'}}>Alejandro Cabrejo - CEO Founder</p>
              </div>
            </Message>
          </>
        }
    </MainPageLogin>
  )
}

export { AuthUserUi }
