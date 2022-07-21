import { formsTypes } from '../types/forms-types'
import { stateInfoTypes } from '../types/state-info-types'

export const get_forms = (form) => {
  return (dispatch) =>{
    const formNode = JSON.parse(form.formStructure)
    const relations = JSON.parse(form.relations)

    dispatch({
      type: formsTypes.UPDATE,
      payload: {id: form.id, title: form.title, relations}
    })
    dispatch({
      type: stateInfoTypes.UPDATE,
      payload: {id: form.id, title: form.title}
    })
    dispatch({
      type: formsTypes.UPDATE_FORMS,
      payload: formNode
    })
  }
}

export const progress_forms = (index, data) => {
  return async (dispatch, getState) =>{
    const { formNodes } = getState().forms
    const { formInfo } = getState().stateInfo
    let updateInfo = []

    //update info
    if(data.title){
      const titles = formInfo.map(i => i.title)
      const indexof = titles.indexOf(data.title)
      formInfo[indexof] = {...data}
      updateInfo = [...formInfo]
    }else {
      updateInfo = [...formInfo, data]
      updateInfo[index].title = formNodes[index].title;
    }

    //update form
    let updateForm = [...formNodes]
    updateForm[index].completed = true;

    dispatch({
      type: stateInfoTypes.UPDATE_FORM_INFO,
      payload: updateInfo
    })

    dispatch({
      type: formsTypes.UPDATE_FORMS,
      payload: updateForm
    })
  }
}
