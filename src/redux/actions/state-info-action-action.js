import { stateInfoTypes } from '../types/state-info-types';
import { formsTypes } from '../types/forms-types'

export const assign_contract = () => {
  return (dispatch, getState) =>{
    const { id, title } = getState().forms
    dispatch({
      type: stateInfoTypes.UPDATE,
      payload: {id, title}
    })
  }
}

export const finish_contract = () => {
  return (dispatch) =>{
    dispatch({
      type: stateInfoTypes.UPDATE,
      payload: {id: '', title: ''}
    })
    dispatch({
      type: stateInfoTypes.UPDATE_FORM_INFO,
      payload: []
    })
    dispatch({
      type: formsTypes.UPDATE,
      payload: {id: '', title: ''}
    })
    dispatch({
      type: formsTypes.UPDATE_FORMS,
      payload: []
    })
  }
}
