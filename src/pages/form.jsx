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
  const [form, setForm] = useState({});
  const [flatEdit, setFlatEdit] = useState(false);
  const [formts, setFormts] = useState({})
  //redux
  const dispatch = useDispatch();
  const { assign_contract } = bindActionCreators(stateInfoActions, dispatch);
  const { progress_forms,  } = bindActionCreators(formsActions, dispatch);
  const { forms, stateInfo } = useSelector((state) => state);
  const [index, setIndex] = useState(0)
  // console.log('Forms: ',forms, 'Info: ', stateInfo)

  useEffect(()=>{
    if(!stateInfo.id){
      assign_contract()
    }
    if(forms.formNodes[index]?.completed && !flatEdit){
      if((forms.formNodes.length - 1) !== index){
        setIndex(index + 1)
      }else{
        router.push("/result");
      }
    }
  },[index, flatEdit])

  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (e) => {
    setFormts({...formts, [e.target.name]: e.target.value})
  };

  const handleBack = (id) => {
    const formTitles = forms.formNodes.map(node => node.title)
    const editForm = formTitles.indexOf(id)
    const editInfo = stateInfo.formInfo.filter(i => i.title === id)
    setIndex(editForm)
    setForm(editInfo[0])
    setFlatEdit(true)
  }

  const handleIndex = (e) => {
    e.preventDefault()
    progress_forms(index, form)
    if(!!form.title){
      if((forms.formNodes.length - 1) !== index){
        setIndex(index + 1)
        setForm({})
        e.target.reset()
      }else{
        router.push("/result");
      }
    }
    setFlatEdit(false)
  }

  return (
    <FormuAppUi
      form={form}
      forms={forms}
      index={index}
      flatEdit={flatEdit}
      setFlatEdit={setFlatEdit}
      handleBack={handleBack}
      handleFocus={handleFocus}
      handleClick={handleIndex}
      formHandler={formHandler}
    />
  )
}

export default FormuApp
