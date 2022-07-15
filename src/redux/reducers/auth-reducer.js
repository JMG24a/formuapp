import { authTypes } from '../types/auth-types.js'

const AUTH_STATE_APP = {
  id: '',
  name: '',
  role: '',
  token: '',
  loading: false,
  error: ''
}

export const authReducer = (state = AUTH_STATE_APP, action) =>{
  switch(action.type){
    case authTypes.UPDATE:{
      return{
        ...state,
        name: action.payload.email,
        loading: false
      }
    }
    case authTypes.LOADING:{
      return{
        ...state,
        loading: true
      }
    }
    case authTypes.ERROR:{
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
