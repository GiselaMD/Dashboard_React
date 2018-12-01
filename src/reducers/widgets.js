import {GET_WIDGETS} from '../actions/widgetsActions'

const widgets = (state= [], action) => {
    switch(action.type){
        case GET_WIDGETS:
        console.log('GET WIDGETS: ',action);
            return action.widgets
        
        default:
            return state
    }
}

export default widgets