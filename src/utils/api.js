const api = "http://dev.4all.com:3050"

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

//Get all widgets
export const getWidgets = () =>
  fetch(`${api}/widgets`, { method: 'GET', headers })
    .then(res => res.json())
    .then(data => data)

//Get pageViews
export const getPageViews = () =>
  fetch(`${api}/pageViews`, { method: 'GET', headers })
    .then(res => res.json())
    .then(data => data)