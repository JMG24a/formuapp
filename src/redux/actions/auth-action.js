import { authTypes } from '../types/auth-types';

export const auth_login = (data) => {
  return async (dispatch) =>{

    const addAuth = {
      email: data.email,
    }

    dispatch({
      type: authTypes.UPDATE,
      payload: addAuth
    })
  }
}
