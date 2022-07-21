import React, { useEffect } from "react"
import { useRouter } from 'next/router'
//redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from "redux";
import * as FormsActions from '../redux/actions/form-action';
import * as AlertsActions from '../redux/actions/alert-action';
//lib
import { getAllFilesMetadata } from '../lib/md';
//UI
import { HomeUi } from '../jxs/pages/Home/HomeUi'

export const getStaticProps = async () => {
  const PDFs = await getAllFilesMetadata('dataForm')

  return {
    props: {
      PDFs
    }
  }
}

export default function Home({PDFs}) {
  const router = useRouter()
  //redux
  const dispatch = useDispatch();
  const { get_forms  } = bindActionCreators(FormsActions, dispatch);
  const { send_alert } = bindActionCreators(AlertsActions, dispatch);
  const { forms, auth } = useSelector((state) => state);

  useEffect(()=>{
  },[forms.formNodes])

  const selectContract = async (form) => {
    get_forms(form)
    if(!!auth.name){
      router.push('/form')
    }else{
      send_alert({
        title: 'Inicia session',
        body: 'necesitas estar registrado para esta accion'
      })
    }
  }

  const preSelectContract = async (form) => {
    get_forms(form)
  }

  const handleClick = () => {
    if(forms.formNodes.length > 0 && !!auth.name){
      router.push('/form')
    }else{
      if(!!auth.name){
        send_alert({
          title: 'Selecciona un contrato',
          body: 'necesitas seleccionar una contrato para poder continuar'
        })
      }else{
        send_alert({
          title: 'Inicia session',
          body: 'necesitas estar registrado para esta accion'
        })
      }
    }
  }

  return (
    <HomeUi
      preSelectContract={preSelectContract}
      selectionContract={selectContract}
      handleClick={handleClick}
      slugs={PDFs}
    />
  )
}
