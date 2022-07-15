import { alertTypes } from "../types/alert-type"

export const send_alert = (data) => {
  return async (dispatch) =>{
    dispatch({
      type: alertTypes.UPDATE,
      payload: data
    })
  }
}

export const reset_alert = () => {
  return async (dispatch) =>{
    dispatch({
      type: alertTypes.RESET,
    })
  }
}
