import {GET_MESSAGES} from '../actions/messagesActions'

const messages = (state= [], action) => {
    switch(action.type){
        case GET_MESSAGES:
        console.log('GET_MESSAGES: ',action);
            return action.messages
        
        default:
            return state
    }
}

export default messages