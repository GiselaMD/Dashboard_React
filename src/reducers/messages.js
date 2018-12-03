import {GET_MESSAGES, ADD_MESSAGE} from '../actions/messagesActions'

const messages = (state= [], action) => {
    switch(action.type){
        case GET_MESSAGES:
        console.log('GET_MESSAGES: ',action);
            return action.messages
        
        case ADD_MESSAGE:
            return state.concat([action.message])
        
        default:
            return state
    }
}

export default messages