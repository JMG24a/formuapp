//combine
import { combineReducers } from "redux";
import { FormReducer } from './reducers/form-reducer';
import  { stateInfoReducer } from './reducers/state-info-reducer';
import { authReducer } from './reducers/auth-reducer';
import { alertReducer } from './reducers/alert-reducer';
//store
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'

const reducers = combineReducers({
  forms: FormReducer,
  stateInfo: stateInfoReducer,
  auth: authReducer,
  alertState: alertReducer
})

export const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
)
