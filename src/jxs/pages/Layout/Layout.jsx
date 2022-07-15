import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaHome } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";
//redux
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as alertActions from "../../../redux/actions/alert-action"
import * as stateInfoActions from "../../../redux/actions/state-info-action-action"
//containers
import { Nav } from '../../containers/Nav/Nav.jsx';
import { Alert } from '../../containers/Alert/Alert';
//styles
import { Container } from './layout'
import logo from '../../../../public/image/logo.svg'
import { paletteColor } from "../../../styles/globalStyles.js";
import Image from "next/image";

function Layout({children}){
  const router = useRouter()
  const [isHome, setHome] = useState(true)
  const [isForm, setForm] = useState({
    isVisible: false,
    text: 'Reiniciar',
    color: `${paletteColor.secondaryColor}`
  })
  //redux
  const dispatch = useDispatch()
  const { reset_alert } = bindActionCreators(alertActions, dispatch)
  const { finish_contract } = bindActionCreators(stateInfoActions, dispatch)
  const { auth, alertState, forms} = useSelector(state => state)
  console.log(forms)
  const handleReset = () => {
    handleClick()
    finish_contract()
  }

  const handleClick = () => {
    router.push('/')
  }

  useEffect(()=>{
    //button home
    router.pathname !== '/' ? setHome(true) : setHome(false)
    //button reset
    router.pathname.startsWith('/form') |
      router.pathname.startsWith('/result') ?
        setForm({...isForm, isVisible: true}) : setForm({...isForm, isVisible: false})
    //button reset color
    if(router.pathname.startsWith('/result')){
      setForm({...isForm, color: `${paletteColor.mainColor}`})
    }
  },[router.pathname])

  return(
    <Container>
      <Nav auth={auth.name}/>
      <div>
        {children}
      </div>
      {!!isHome &&
        <FaHome
          size={'40px'}
          color={'white'}
          style={{
            position: 'fixed',
            bottom: '20px',
            cursor: 'pointer'
          }}
          onClick={()=>handleClick()}
        />
      }
      {!!isForm.isVisible && !!auth.name &&
        <div
          style={{
            position: 'fixed',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            bottom: '20px',
            left: '120px',
            width: '100px',
            height: '30px',
            padding: '5px',
            borderRadius: '5px',
            background: `${isForm.color}`,
            textAlign: 'center',
            fontSize: '1.6rem',
            color: `${paletteColor.textWhite}`,
            cursor: 'pointer',
          }}
          onClick={handleReset}
        >
          {router.pathname.startsWith('/result') ?
            <Image src={logo} alt="Logo" width={'20px'} />
            :
            <AiOutlineReload style={{marginRight: '5px'}}/>
          }
          {router.pathname.startsWith('/result') ?
            'Finalizar' : 'Reiniciar'
          }
        </div>
      }


      <Alert state={alertState} action={reset_alert}/>
    </Container>
  )
}

export default Layout
