import { stateInfoTypes } from '../types/state-info-types.js'

const STATE_INFO_APP = {
  id: '',
  title: '',
  formInfo: [],
  loading: false,
  error: ''
}

export const stateInfoReducer = (state = STATE_INFO_APP, action) =>{
  switch(action.type){
    case stateInfoTypes.UPDATE:{
      return{
        ...state,
        id: action.payload.id,
        title: action.payload.title,
        loading: false,
        error: ''
      }
    }
    case stateInfoTypes.UPDATE_FORM_INFO:{
      return{
        ...state,
        formInfo: action.payload
      }
    }
    case stateInfoTypes.CAR_ACTUALIZATION_TOTAL:{
      return{
        ...state,
        total: action.payload
      }
    }
    case stateInfoTypes.LOADING:{
      return{
        ...state,
        loading: true
      }
    }
    case stateInfoTypes.ERROR:{
      return{
        ...state,
        error: action.payload,
        loading: false
      }
    }
    default:{
      return state;
    }
  }
}
