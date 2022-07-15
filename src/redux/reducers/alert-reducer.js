import { alertTypes } from '../types/alert-type'

const ALERT_STATE_APP = {
  title: '',
  body: '',
  error: ''
}

export const alertReducer = (state = ALERT_STATE_APP, action) =>{
  switch(action.type){
    case alertTypes.UPDATE:{
      return{
        ...state,
        title: action.payload.title,
        body: action.payload.body
      }
    }
    case alertTypes.RESET:{
      return{
        ...state,
        error: '',
        title: '',
        body: '',
      }
    }
    default:{
      return state;
    }
  }
}
