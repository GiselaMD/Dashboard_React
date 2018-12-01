import {getWidgets} from '../utils/api'

export const GET_WIDGETS = 'GET_WIDGETS'

export const fetchWidgets = () => dispatch => (
    getWidgets()
      .then(widgets => {
            dispatch({
              type: GET_WIDGETS,
              widgets
            }) 
      })
  )