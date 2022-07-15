import { formsTypes } from '../types/forms-types'
import { stateInfoTypes } from '../types/state-info-types'

export const get_forms = (form) => {
  return (dispatch) =>{
    const formNode = JSON.parse(form.formStructure)

    dispatch({
      type: formsTypes.UPDATE,
      payload: {id: form.id, title: form.title}
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

    //update info
    let updateInfo = [...formInfo, data]
    updateInfo[index].title = formNodes[index].title;

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

// formNodes: [
//   {
//     id: '000',
//     title: 'Datos del comprador',
//     button: 'Ingresar',
//     footer: '¿No tienes una cuenta registrate?',
//     completed: false,
//     nodes: [
//       {
//         label: [
//           {
//             htmlFor: 'email',
//             title: 'Email: '
//           },
//           {
//             htmlFor: 'password',
//             title: 'Contraseña: '
//           }
//         ],
//         input: [
//           {
//             type: 'text',
//             id: 'email',
//           },
//           {
//             type: 'password',
//             id: 'password',
//             footer: '¿Olvidaste tu contraseña?'
//           }
//         ],
//       }
//     ],
//   },
