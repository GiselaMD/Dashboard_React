import {getPageViews} from '../utils/api'

export const GET_PAGE_VIEWS = 'GET_PAGE_VIEWS'

export const fetchPageViews = () => dispatch => (
    getPageViews()
      .then(pageViews => {
            dispatch({
              type: GET_PAGE_VIEWS,
              pageViews
            }) 
      })
  )