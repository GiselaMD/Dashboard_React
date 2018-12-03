import {getMessages, sendMessage} from '../utils/api'

export const GET_MESSAGES = 'GET_MESSAGES'
export const ADD_MESSAGE = 'ADD_MESSAGE'

export const fetchMessages = () => dispatch => (
    getMessages()
      .then(messages => {
            dispatch({
              type: GET_MESSAGES,
              messages
            }) 
      })
  )

export const createMessage = (message) => {
  return (dispatch) => {
    sendMessage(message).then(
      () => dispatch({ type: ADD_MESSAGE, message })
    )}
}