import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
//redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from "redux";
import * as AuthActions from '../redux/actions/auth-action';
//Ui
import { AuthUserUi } from "../jxs/pages/AuthUser/AuthUserUi";

function Login(){
  const router = useRouter()
  const [form, setForm] = useState()
  //redux
  const dispatch = useDispatch()
  const { auth_login } = bindActionCreators(AuthActions, dispatch)

  useEffect(()=>{
  },[router.pathname])

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(router.pathname.startsWith('/login')){
      const isTrue = auth_login(form);
      if(isTrue){
        router.push("/")
      }
    }else{

    }
    e.target.reset()
  }

  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <AuthUserUi
      router={router}
      form={form}
      handleSubmit={handleSubmit}
      formHandler={formHandler}
    />
  )
}

export default Login
