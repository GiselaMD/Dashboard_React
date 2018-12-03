import {getMessages} from '../utils/api'

export const GET_MESSAGES = 'GET_MESSAGES'

export const fetchMessages = () => dispatch => (
    getMessages()
      .then(messages => {
            dispatch({
              type: GET_MESSAGES,
              messages
            }) 
      })
  )