import { formsTypes } from '../types/forms-types.js'

const FORM_STATE_APP = {
  id: '',
  title: '',
  loading: false,
  error: '',
  relations: [],
  formNodes: []
}

export const FormReducer = (state = FORM_STATE_APP, action) =>{
  switch(action.type){
    case formsTypes.UPDATE:{
      return{
        ...state,
        id: action.payload.id,
        title: action.payload.title,
        relations: action.payload.relations,
        loading: false
      }
    }
    case formsTypes.UPDATE_FORMS:{
      return{
        ...state,
        formNodes: action.payload,
        loading: false
      }
    }
    case formsTypes.CAR_ACTUALIZATION_TOTAL:{
      return{
        ...state,
        total: action.payload
      }
    }
    case formsTypes.LOADING:{
      return{
        ...state,
        loading: true
      }
    }
    case formsTypes.ERROR:{
      return{
        ...state,
        error: action.payload,
        loading: false
      }
    }
    default:{
      return state
    }
  }
}
