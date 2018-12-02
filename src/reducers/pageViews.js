import {GET_PAGE_VIEWS} from '../actions/pageViewsActions'

const pageViews = (state= [], action) => {
    switch(action.type){
        case GET_PAGE_VIEWS:
        console.log('GET_PAGE_VIEWS: ',action);
            return action.pageViews
        
        default:
            return state
    }
}

export default pageViews