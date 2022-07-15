import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
//redux
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as stateInfoActions from '../redux/actions/state-info-action-action.js';
import * as formsActions from '../redux/actions/form-action.js';
//containers
import { FormuAppUi } from "../jxs/pages/FormuApp/FormuAppUi";

function FormuApp(){
  const router = useRouter()
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  //redux
  const { assign_contract } = bindActionCreators(stateInfoActions, dispatch);
  const { progress_forms } = bindActionCreators(formsActions, dispatch);
  const { forms, stateInfo } = useSelector((state) => state);
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    if(!stateInfo.id){
      assign_contract()
    }
    if(forms.formNodes[index]?.completed){
      if((forms.formNodes.length - 1) !== index){
        setIndex(index + 1)
      }else{
        router.push("/result");
      }
    }
  },[index])

  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form)
  const handleIndex = (e) => {
    e.preventDefault()
    progress_forms(index, form)

    if((forms.formNodes.length - 1) !== index){
      setIndex(index + 1)
      setForm({})
      e.target.reset()
    }else{
      router.push("/result");
    }
  }

  return (
    <FormuAppUi
      form={form}
      forms={forms}
      index={index}
      handleClick={handleIndex}
      formHandler={formHandler}
    />
  )
}

export default FormuApp
